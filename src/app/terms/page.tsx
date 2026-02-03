"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, GradientText } from "@/components/ui/section";

export default function TermsPage() {
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
              Terms of <GradientText>Service</GradientText>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Aphilas Studio AB website (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on Aphilas Studio AB&apos;s website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Aphilas Studio AB at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Services</h2>
              <p>
                Aphilas Studio AB provides IT consultancy, product development, and prototype development services. The specific terms of service delivery, pricing, timelines, and deliverables will be outlined in separate project agreements or statements of work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Aphilas Studio AB and is protected by international copyright laws. The intellectual property rights for work created as part of our services will be defined in individual project agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. User Submissions</h2>
              <p>
                By submitting content through our contact forms or other communication channels, you grant Aphilas Studio AB a non-exclusive, royalty-free license to use, reproduce, and share such content for the purpose of providing our services and improving our offerings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
              <p className="mb-4">
                The materials on Aphilas Studio AB&apos;s website are provided on an &quot;as is&quot; basis. Aphilas Studio AB makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Aphilas Studio AB does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitations</h2>
              <p>
                In no event shall Aphilas Studio AB or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aphilas Studio AB&apos;s website, even if Aphilas Studio AB or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Accuracy of Materials</h2>
              <p>
                The materials appearing on Aphilas Studio AB&apos;s website could include technical, typographical, or photographic errors. Aphilas Studio AB does not warrant that any of the materials on its website are accurate, complete, or current. Aphilas Studio AB may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Links</h2>
              <p>
                Aphilas Studio AB has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Aphilas Studio AB of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Modifications</h2>
              <p>
                Aphilas Studio AB may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Sweden, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> info@aphilas.com</li>
                <li><strong>Company:</strong> Aphilas Studio AB</li>
                <li><strong>Location:</strong> Sollentuna, Sweden</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
