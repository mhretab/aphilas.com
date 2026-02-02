import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aphilas Studio AB | Product Development & IT Consultancy",
    template: "%s | Aphilas Studio AB",
  },
  description:
    "Aphilas Studio AB specializes in product development, IT consultancy, and prototype development. We transform ideas into innovative digital solutions.",
  keywords: [
    "product development",
    "IT consultancy",
    "prototype development",
    "software development",
    "digital solutions",
    "Stockholm",
    "Sweden",
  ],
  authors: [{ name: "Aphilas Studio AB" }],
  creator: "Aphilas Studio AB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aphilas.com",
    siteName: "Aphilas Studio AB",
    title: "Aphilas Studio AB | Product Development & IT Consultancy",
    description:
      "We transform ideas into innovative digital solutions. From product development to IT consultancy, we help businesses thrive in the digital age.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aphilas Studio AB | Product Development & IT Consultancy",
    description:
      "We transform ideas into innovative digital solutions. From product development to IT consultancy, we help businesses thrive in the digital age.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
