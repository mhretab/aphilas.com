"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/section";

interface ProjectColumnProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
  startIndex?: number;
  isFirstColumn?: boolean;
}

const ProjectColumn = ({
  images,
  direction = "up",
  speed = 20,
  startIndex = 0,
  isFirstColumn = false,
}: ProjectColumnProps) => {
  const columnImages = [
    ...images.slice(startIndex),
    ...images.slice(0, startIndex),
    ...images.slice(startIndex),
    ...images.slice(0, startIndex),
  ];

  const yAnimation =
    direction === "up" ? [0, -(images.length * 400)] : [-(images.length * 400), 0];

  return (
    <motion.div
      className="flex flex-col gap-6 md:gap-8 absolute inset-0"
      initial={{ y: direction === "up" ? 0 : -(images.length * 400) }}
      animate={{ y: yAnimation }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      }}
    >
      {columnImages.map((img, index) => (
        <div
          key={index}
          className="relative w-full md:w-[340px] aspect-[3/4] opacity-75 hover:opacity-100 transition-all duration-300 rounded-xl md:rounded-2xl shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <Image
            src={img}
            alt={`Project ${index + 1}`}
            fill
            className="object-cover rounded-lg md:rounded-xl p-1"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
            priority={isFirstColumn && index === 0}
          />
        </div>
      ))}
    </motion.div>
  );
};

export function HeroSection() {
  const projectImages1 = ["/project-1.png", "/project-2.png", "/project-3.jpg"];
  const projectImages2 = ["/project-4.png", "/project-6.png", "/project-9.png"];

  return (
    <div className="relative min-h-screen w-full bg-gray-900 overflow-hidden">
      {/* Dark overlay with gradient and frosted glass effect */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.92), rgba(0,0,0,0.85), rgba(0,0,0,0.92))",
          backdropFilter: "blur(10px)",
        }}
      />

      {/* Background columns container */}
      <div className="absolute inset-0 flex gap-4 sm:gap-6 md:gap-8 justify-evenly px-4 z-10">
        <div className="relative flex-1">
          <ProjectColumn
            images={projectImages1}
            direction="up"
            speed={40}
            startIndex={0}
            isFirstColumn={true}
          />
        </div>

        <div className="relative flex-1">
          <ProjectColumn
            images={projectImages2}
            direction="down"
            speed={50}
            startIndex={0}
          />
        </div>

        <div className="relative hidden md:block flex-1">
          <ProjectColumn
            images={projectImages1}
            direction="up"
            speed={45}
            startIndex={2}
          />
        </div>

        <div className="relative hidden lg:block flex-1">
          <ProjectColumn
            images={projectImages2}
            direction="down"
            speed={35}
            startIndex={2}
          />
        </div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-20 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We are <GradientText>Aphilas Studio</GradientText>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          What can we make for you today?
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/portfolio">
            <Button size="lg" variant="secondary">
              View Our Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
