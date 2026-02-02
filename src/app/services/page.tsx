"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CubeIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Section, SectionHeader, GradientText } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "product-development",
    icon: CubeIcon,
    title: "Product Development",
    subtitle: "End-to-end product development from concept to launch",
    description:
      "We build scalable, user-centric products using modern technologies and agile methodologies. From initial concept to market launch, we handle every aspect of product development.",
    features: [
      "Full-stack web and mobile development",
      "User experience (UX) design",
      "Agile development methodology",
      "Continuous integration and deployment",
      "Performance optimization",
      "Scalable architecture design",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "it-consultancy",
    icon: ChatBubbleLeftRightIcon,
    title: "IT Consultancy",
    subtitle: "Strategic technology advice for your business",
    description:
      "Our experienced consultants provide strategic guidance on technology decisions, architecture reviews, and digital transformation initiatives to help your business thrive.",
    features: [
      "Technology stack evaluation",
      "Architecture reviews and design",
      "Digital transformation strategy",
      "Team augmentation and mentoring",
      "Code quality audits",
      "Security assessments",
    ],
    technologies: ["Cloud Architecture", "DevOps", "Security", "CI/CD", "Microservices", "API Design"],
  },
  {
    id: "prototype-development",
    icon: BeakerIcon,
    title: "Prototype Development",
    subtitle: "Rapid prototyping to validate your ideas",
    description:
      "We help you validate concepts quickly with functional prototypes and MVPs. Test your ideas with real users before committing to full development.",
    features: [
      "Rapid prototyping",
      "MVP development",
      "Proof of concept creation",
      "User testing and validation",
      "Iterative design process",
      "Market validation support",
    ],
    technologies: ["Figma", "React", "Firebase", "Supabase", "Vercel", "React Native"],
  },
];

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    title: "Discovery",
    description: "We start by understanding your goals, requirements, and vision.",
  },
  {
    icon: PencilSquareIcon,
    title: "Design",
    description: "Creating wireframes, prototypes, and visual designs.",
  },
  {
    icon: CodeBracketIcon,
    title: "Develop",
    description: "Building your solution with clean, maintainable code.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Deploy",
    description: "Launching your product with proper testing and monitoring.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Support",
    description: "Ongoing maintenance, updates, and feature development.",
  },
];

export default function ServicesPage() {
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
              Our <GradientText>Services</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              We offer comprehensive digital solutions to help your business grow.
              From product development to strategic consultancy, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <Section key={service.id} id={service.id} dark={serviceIndex % 2 === 0}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-orange-400">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-400 text-lg mb-8">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card glass hover={false}>
                <CardHeader>
                  <CardTitle>Technologies We Use</CardTitle>
                  <CardDescription>
                    We work with modern, battle-tested technologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Process Section */}
      <Section>
        <SectionHeader
          title="Our Process"
          subtitle="A proven approach to delivering exceptional results"
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 relative z-10">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-orange-500 font-medium mb-1">
                      Step {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
