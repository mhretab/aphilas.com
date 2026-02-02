import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

// Service labels for the email
const serviceLabels: Record<string, string> = {
  'product-development': 'Product Development',
  'it-consultancy': 'IT Consultancy',
  'prototype-development': 'Prototype Development',
  other: 'Other',
};

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    // Check if RESEND_API_KEY is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 },
      );
    }

    const serviceLabel = body.service
      ? serviceLabels[body.service] || body.service
      : 'Not specified';
    const toEmail = process.env.CONTACT_EMAIL || 'info@aphilas.com';

    // Use Resend API directly via fetch (edge-compatible)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aphilas Studio <onboarding@resend.dev>', // Use resend.dev for testing, change to your verified domain
        to: toEmail,
        reply_to: body.email,
        subject: `New Contact Form Submission from ${body.name}`,
        html: generateEmailHtml(body, serviceLabel),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

function generateEmailHtml(body: ContactFormData, serviceLabel: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); padding: 32px; text-align: center;">
                    <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">
                      New Contact Form Submission
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 32px;">
                    <!-- Contact Details -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <p style="margin: 0 0 4px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                          <p style="margin: 0; color: white; font-size: 16px;">${escapeHtml(body.name)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <p style="margin: 0 0 4px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 0; color: white; font-size: 16px;">
                            <a href="mailto:${escapeHtml(body.email)}" style="color: #f97316; text-decoration: none;">${escapeHtml(body.email)}</a>
                          </p>
                        </td>
                      </tr>
                      ${
                        body.company
                          ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <p style="margin: 0 0 4px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                          <p style="margin: 0; color: white; font-size: 16px;">${escapeHtml(body.company)}</p>
                        </td>
                      </tr>
                      `
                          : ''
                      }
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                          <p style="margin: 0 0 4px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Service Interest</p>
                          <p style="margin: 0; color: white; font-size: 16px;">${escapeHtml(serviceLabel)}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message -->
                    <div style="background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
                      <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <p style="margin: 0; color: white; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(body.message)}</p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 24px 32px; background-color: rgba(255, 255, 255, 0.02); border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                    <p style="margin: 0; color: #6b7280; font-size: 14px;">
                      This email was sent from the contact form on aphilas.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
