import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Aphilas Studio AB's Terms of Service. Understand the terms and conditions that apply when you use our website and services.",
  openGraph: {
    title: "Terms of Service | Aphilas Studio AB",
    description:
      "Read Aphilas Studio AB's Terms of Service. Understand the terms and conditions that apply when you use our services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
