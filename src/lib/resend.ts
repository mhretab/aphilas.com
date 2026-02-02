import { Resend } from 'resend';

// Lazy initialization - only create the client when actually needed
let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Email configuration
export const emailConfig = {
  from: 'Aphilas Studio <noreply@aphilas.com>',
  to: process.env.CONTACT_EMAIL || 'info@aphilas.com',
};
