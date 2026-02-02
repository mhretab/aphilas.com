import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our services: Product Development, IT Consultancy, and Prototype Development. We help businesses build innovative digital solutions using modern technologies.",
  openGraph: {
    title: "Services | Aphilas Studio AB",
    description:
      "Explore our services: Product Development, IT Consultancy, and Prototype Development. We help businesses build innovative digital solutions.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
