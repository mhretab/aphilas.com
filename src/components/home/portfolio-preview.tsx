"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const projects = [
  {
    id: "project-1",
    title: "AIQA",
    category: "AI & Analytics",
    description: "AI-powered quality assurance platform for telesales operations that monitors call quality, provides real-time feedback, and delivers actionable insights to improve sales performance.",
    image: "/project-1.png",
    tags: ["AI/ML", "Quality Assurance", "Analytics"],
  },
  {
    id: "project-2",
    title: "Narrated",
    category: "Browser Extension",
    description: "Transform any web content into high-quality audio. A browser extension that converts articles and text into natural-sounding speech for on-the-go listening.",
    image: "/project-2.png",
    tags: ["Browser Extension", "LLM", "TTS", "Audio"],
  },
  {
    id: "project-3",
    title: "Inky Display",
    category: "Hardware + Software",
    description: "Ultra-low power e-ink advertising displays with cloud-based content management. Complete hardware and software solution for modern digital signage.",
    image: "/project-3.jpg",
    tags: ["E-ink", "ESP-32", "Hardware", "IoT"],
  },
  {
    id: "project-4",
    title: "Semay Mart",
    category: "E-commerce",
    description: "Modern e-commerce platform combining the reliability of WooCommerce with the speed and performance of Next.js for an exceptional shopping experience.",
    image: "/project-9.png",
    tags: ["Next.js", "WooCommerce", "E-commerce"],
  },
];

export function PortfolioPreview() {
  return (
    <Section id="portfolio-preview" dark={false}>
      <SectionHeader
        title="Our Work"
        subtitle="Explore our recent projects and see how we've helped businesses achieve their goals."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/portfolio#${project.id}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
        >
          View all projects
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

export default PortfolioPreview;
