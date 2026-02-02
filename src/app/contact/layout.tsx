import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aphilas Studio AB. Let's discuss your project and explore how we can help bring your vision to life. Contact us today.",
  openGraph: {
    title: "Contact | Aphilas Studio AB",
    description:
      "Get in touch with Aphilas Studio AB. Let's discuss your project and explore how we can help bring your vision to life.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
