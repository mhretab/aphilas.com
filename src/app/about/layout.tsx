import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aphilas Studio AB, a Stockholm-based digital studio specializing in product development, IT consultancy, and prototype development. Meet our team and discover our values.",
  openGraph: {
    title: "About Us | Aphilas Studio AB",
    description:
      "Learn about Aphilas Studio AB, a Stockholm-based digital studio specializing in product development, IT consultancy, and prototype development.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
