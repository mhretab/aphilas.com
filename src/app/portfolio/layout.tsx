import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects including e-commerce platforms, healthcare dashboards, FinTech solutions, and more. See how we've helped businesses grow.",
  openGraph: {
    title: "Portfolio | Aphilas Studio AB",
    description:
      "Explore our portfolio of successful projects. See how we've helped businesses grow with innovative digital solutions.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
