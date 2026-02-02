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

const softwareServices = [
  {
    id: "product-development",
    icon: CubeIcon,
    title: "Product Development",
    subtitle: "End-to-end software product development from concept to launch",
    description:
      "We build scalable, user-centric software products using modern technologies and agile methodologies. From initial concept to market launch, we handle every aspect of digital product development.",
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
    id: "software-prototyping",
    icon: BeakerIcon,
    title: "Software Prototyping",
    subtitle: "Rapid digital prototyping to validate your ideas",
    description:
      "We help you validate software concepts quickly with functional prototypes and MVPs. Test your ideas with real users before committing to full development.",
    features: [
      "Rapid digital prototyping",
      "MVP development",
      "Proof of concept creation",
      "User testing and validation",
      "Iterative design process",
      "Market validation support",
    ],
    technologies: ["Figma", "React", "Firebase", "Supabase", "Vercel", "React Native"],
  },
];

const hardwareServices = [
  {
    id: "hardware-product-development",
    icon: CpuChipIcon,
    title: "Product Development Support",
    subtitle: "Comprehensive hardware product development from ideation to production",
    description:
      "We provide end-to-end support for hardware product development, helping you bring physical products to life. From concept validation to production-ready designs, we guide you through every stage.",
    features: [
      "Product ideation and concept validation",
      "Technical feasibility analysis",
      "Component selection and sourcing",
      "Production planning and scaling",
      "Supply chain management support",
      "Manufacturing partner coordination",
    ],
    technologies: ["PCB Design", "Embedded Systems", "IoT", "Manufacturing", "Supply Chain", "Quality Control"],
  },
  {
    id: "hardware-software-integration",
    icon: Cog6ToothIcon,
    title: "Hardware–Software Integration",
    subtitle: "Seamless integration of hardware and software systems",
    description:
      "We bridge the gap between hardware and software, creating cohesive IoT solutions and embedded systems. Our expertise ensures smooth communication and optimal performance.",
    features: [
      "Embedded software development",
      "IoT platform integration",
      "Firmware development and updates",
      "Sensor integration and calibration",
      "Real-time data processing",
      "Cloud connectivity and APIs",
    ],
    technologies: ["C/C++", "Python", "MQTT", "BLE", "Wi-Fi", "Arduino", "Raspberry Pi", "ESP32"],
  },
  {
    id: "hardware-prototyping",
    icon: CircleStackIcon,
    title: "Prototyping Support",
    subtitle: "Rapid hardware prototyping for proof of concept",
    description:
      "We accelerate your hardware development with rapid prototyping services. Test form, fit, and function before investing in tooling and mass production.",
    features: [
      "3D printing and rapid manufacturing",
      "PCB prototyping and testing",
      "Functional prototype development",
      "Design for manufacturing (DFM)",
      "Iterative testing and refinement",
      "Multiple prototyping technologies",
    ],
    technologies: ["3D Printing", "CNC Machining", "PCB Fabrication", "Soldering", "Testing Equipment"],
  },
  {
    id: "cad-design",
    icon: Square3Stack3DIcon,
    title: "CAD Design Support",
    subtitle: "Professional CAD design and engineering services",
    description:
      "Our CAD experts transform your concepts into detailed technical drawings and 3D models ready for manufacturing. We ensure designs are optimized for both functionality and production.",
    features: [
      "3D modeling and rendering",
      "Mechanical design and engineering",
      "Design for assembly (DFA)",
      "Technical documentation",
      "Tolerance analysis",
      "Manufacturing-ready drawings",
    ],
    technologies: ["Fusion 360", "SolidWorks", "AutoCAD", "KiCAD", "Altium Designer", "FreeCAD"],
  },
  {
    id: "digital-product-design",
    icon: PaintBrushIcon,
    title: "Digital Product Design",
    subtitle: "User-centered design for digital and physical products",
    description:
      "We create compelling digital experiences for your hardware products, from mobile apps to web dashboards. Our designs ensure users can easily interact with and control your devices.",
    features: [
      "User interface (UI) design",
      "User experience (UX) research",
      "Mobile app design for IoT devices",
      "Web dashboard design",
      "Design systems and guidelines",
      "Interactive prototypes",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
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
              We offer comprehensive software and hardware solutions to help your business innovate and grow.
              From digital product development to hardware prototyping, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Software Services Category */}
      <Section dark>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <GradientText>Software</GradientText> Services
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Digital solutions for web, mobile, and cloud platforms
          </p>
        </motion.div>
      </Section>

      {/* Software Services Sections */}
      {softwareServices.map((service, serviceIndex) => (
        <Section key={service.id} id={service.id} dark={serviceIndex % 2 === 1}>
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
                    Modern, battle-tested technologies and tools
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

      {/* Hardware Services Category */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <GradientText>Hardware</GradientText> Prototyping
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Physical product development from concept to production
          </p>
        </motion.div>
      </Section>

      {/* Hardware Services Sections */}
      {hardwareServices.map((service, serviceIndex) => (
        <Section key={service.id} id={service.id} dark={serviceIndex % 2 === 1}>
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
                    Industry-standard tools and technologies
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
