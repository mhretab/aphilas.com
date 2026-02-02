"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CubeIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeader, GradientText } from "@/components/ui/section";

const services = [
  {
    id: "product-development",
    title: "Product Development",
    description:
      "End-to-end product development from concept to launch. We build scalable, user-centric products using agile methodologies.",
    icon: CubeIcon,
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    description:
      "Strategic technology advice and architecture reviews. We help businesses make informed decisions about their digital transformation.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: "prototype-development",
    title: "Prototype Development",
    description:
      "Rapid prototyping and MVP development. We turn your ideas into working prototypes to validate concepts quickly.",
    icon: BeakerIcon,
  },
];

export function ServicesPreview() {
  return (
    <Section id="services-preview">
      <SectionHeader
        title="What We Do"
        subtitle="We offer comprehensive digital solutions to help your business grow and innovate."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/services#${service.id}`}>
              <Card className="h-full group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
        >
          View all services
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </motion.div>
    </Section>
  );
}

export default ServicesPreview;
