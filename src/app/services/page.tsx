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
  CpuChipIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  Square3Stack3DIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { Section, SectionHeader, GradientText } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "product-development",
    icon: CubeIcon,
    title: "Product Development",
    subtitle: "End-to-end software and hardware product development",
    description:
      "We build scalable, user-centric products using modern technologies and agile methodologies. From initial concept to market launch, we handle every aspect of digital and physical product development.",
    features: [
      "Full-stack web and mobile development",
      "Hardware prototyping and production",
      "User experience (UX) design",
      "Agile development methodology",
      "Scalable architecture design",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "IoT", "Embedded Systems"],
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
      "Security assessments",
      "Code quality audits",
    ],
    technologies: ["Cloud Architecture", "DevOps", "Security", "CI/CD", "Microservices"],
  },
  {
    id: "prototyping",
    icon: BeakerIcon,
    title: "Rapid Prototyping",
    subtitle: "Fast validation for software and hardware concepts",
    description:
      "We help you validate concepts quickly with functional prototypes and MVPs. Test your ideas with real users before committing to full development—whether digital or physical.",
    features: [
      "Software MVP development",
      "3D printing and rapid manufacturing",
      "PCB prototyping and testing",
      "User testing and validation",
      "Iterative design process",
    ],
    technologies: ["Figma", "React", "3D Printing", "PCB Fabrication", "Arduino", "ESP32"],
  },
  {
    id: "hardware-software-integration",
    icon: CpuChipIcon,
    title: "Hardware–Software Integration",
    subtitle: "Seamless IoT and embedded systems solutions",
    description:
      "We bridge the gap between hardware and software, creating cohesive IoT solutions and embedded systems. Our expertise ensures smooth communication and optimal performance.",
    features: [
      "Embedded software development",
      "IoT platform integration",
      "Firmware development",
      "Sensor integration and calibration",
      "Cloud connectivity and APIs",
    ],
    technologies: ["C/C++", "Python", "MQTT", "BLE", "Raspberry Pi", "AWS IoT"],
  },
  {
    id: "cad-design",
    icon: Square3Stack3DIcon,
    title: "CAD & Engineering Design",
    subtitle: "Professional CAD design and mechanical engineering",
    description:
      "Our CAD experts transform your concepts into detailed technical drawings and 3D models ready for manufacturing. We ensure designs are optimized for both functionality and production.",
    features: [
      "3D modeling and rendering",
      "Mechanical design and engineering",
      "Design for manufacturing (DFM)",
      "Technical documentation",
      "Manufacturing-ready drawings",
    ],
    technologies: ["Fusion 360", "SolidWorks", "KiCAD", "Altium Designer", "AutoCAD"],
  },
  {
    id: "digital-product-design",
    icon: PaintBrushIcon,
    title: "Digital Product Design",
    subtitle: "User-centered design for all platforms",
    description:
      "We create compelling digital experiences for your products, from mobile apps to web dashboards. Our designs ensure users can easily interact with and control your devices and services.",
    features: [
      "User interface (UI) design",
      "User experience (UX) research",
      "Mobile and web app design",
      "Design systems and guidelines",
      "Interactive prototypes",
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Principle", "Tailwind CSS"],
  },
];

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    title: "Discovery",
    description: "Understanding your goals, requirements, and vision.",
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
    description: "Launching with proper testing and monitoring.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Support",
    description: "Ongoing maintenance and feature development.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-900 overflow-hidden">
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
              Comprehensive software and hardware solutions to help your business innovate and grow.
              From digital products to physical prototypes, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card glass hover className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-orange-400 text-sm mb-2">{service.subtitle}</p>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section dark>
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
