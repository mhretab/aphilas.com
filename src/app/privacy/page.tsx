"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, GradientText } from "@/components/ui/section";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-gray-900 to-red-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy <GradientText>Policy</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert prose-orange">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-300"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Aphilas Studio AB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aphilas.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Communicate with us via email or other means</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, company name, phone number, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as email delivery services.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
              <p className="mb-4">If you are a resident of the European Economic Area, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure of your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at info@aphilas.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> info@aphilas.com</li>
                <li><strong>Address:</strong> Aphilas Studio AB, Sollentuna, Sweden</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
