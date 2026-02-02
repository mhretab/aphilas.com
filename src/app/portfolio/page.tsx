"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader, GradientText } from "@/components/ui/section";

type Category = "all" | "product" | "prototype" | "consultancy";

const projects = [
  {
    id: "project-1",
    title: "AIQA",
    category: "product" as const,
    description:
      "AI-powered quality assurance platform for telesales operations. Monitors call quality in real-time, provides automated feedback to agents, and delivers actionable insights to management. Helps reduce staff turnover by 30% and improve sales conversion rates through data-driven coaching.",
    image: "/project-1.png",
    tags: ["AI/ML", "Quality Assurance", "Analytics", "Speech Recognition"],
    client: "AIQA",
    year: "2024",
  },
  {
    id: "project-2",
    title: "Narrated",
    category: "product" as const,
    description:
      "Browser extension that transforms any web content into high-quality audio. Uses advanced text-to-speech technology to convert articles, blogs, and documentation into natural-sounding speech. Features playback controls, offline saving, and multi-voice support for an enhanced listening experience.",
    image: "/project-2.png",
    tags: ["Browser Extension", "TTS", "Audio", "Web API"],
    client: "Narrated",
    year: "2024",
  },
  {
    id: "project-3",
    title: "Inky Display",
    category: "prototype" as const,
    description:
      "Ultra-low power e-ink advertising displays designed for 24/7 operation. Complete hardware and software solution featuring custom-designed e-ink screens, solar-powered operation, and cloud-based content management. Perfect for retail, transit, and outdoor advertising with minimal energy costs.",
    image: "/project-3.jpg",
    tags: ["E-ink", "Hardware", "IoT", "Embedded Systems"],
    client: "Inky Display",
    year: "2023",
  },
  {
    id: "project-4",
    title: "Semay Mart",
    category: "product" as const,
    description:
      "Modern e-commerce platform that combines the robust WooCommerce backend with a lightning-fast Next.js frontend. Features server-side rendering for SEO, optimized images, and instant page transitions. Delivers exceptional performance while maintaining full compatibility with the WooCommerce ecosystem.",
    image: "/project-9.png",
    tags: ["Next.js", "WooCommerce", "E-commerce", "REST API"],
    client: "Semay Mart",
    year: "2024",
  },
  {
    id: "project-5",
    title: "IoT Management System",
    category: "consultancy" as const,
    description:
      "Architecture design and implementation for a scalable IoT device management platform.",
    image: "/project-7.jpg",
    tags: ["AWS IoT", "Node.js", "React", "TimescaleDB"],
    client: "SmartHome Tech",
    year: "2023",
  },
  {
    id: "project-6",
    title: "Social App Prototype",
    category: "prototype" as const,
    description:
      "Interactive prototype for a social networking app, used to secure seed funding.",
    image: "/project-6.png",
    tags: ["Figma", "React Native", "Supabase"],
    client: "ConnectHub",
    year: "2022",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "product", label: "Product Development" },
  { value: "prototype", label: "Prototypes" },
  { value: "consultancy", label: "Consultancy" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our <GradientText>Portfolio</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Explore our recent projects and see how we&apos;ve helped businesses
              achieve their goals through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Section>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                id={project.id}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 capitalize">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-orange-400/80 mb-2">
                      {project.client}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </Section>
    </>
  );
}
