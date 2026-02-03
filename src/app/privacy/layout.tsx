import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Aphilas Studio AB's Privacy Policy to understand how we collect, use, and protect your personal information. GDPR compliant.",
  openGraph: {
    title: "Privacy Policy | Aphilas Studio AB",
    description:
      "Read Aphilas Studio AB's Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
