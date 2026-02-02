"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Section, SectionHeader, GradientText } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description:
      "We embrace new technologies and creative approaches to solve complex problems and deliver cutting-edge solutions.",
  },
  {
    icon: SparklesIcon,
    title: "Quality",
    description:
      "Every line of code, every design decision, and every interaction is crafted with meticulous attention to detail.",
  },
  {
    icon: UserGroupIcon,
    title: "Partnership",
    description:
      "We work closely with our clients as true partners, ensuring alignment with your vision and business goals.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Transparency",
    description:
      "Open communication, honest feedback, and clear expectations are the foundation of every project we undertake.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "25+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-gray-900 to-red-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <GradientText>Aphilas Studio</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              We are a team of passionate developers, designers, and strategists
              dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded in Stockholm, Aphilas Studio AB was born from a simple
                belief: that technology should empower businesses to achieve their
                full potential. We started as a small team of developers with a
                passion for creating beautiful, functional software.
              </p>
              <p>
                Today, we&apos;ve grown into a full-service digital studio,
                partnering with startups and enterprises alike to deliver
                innovative solutions across product development, IT consultancy,
                and prototype development.
              </p>
              <p>
                Our approach combines technical excellence with creative thinking,
                ensuring every project we undertake not only meets but exceeds
                expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
                  AS
                </div>
                <div className="text-white/50 mt-2">Aphilas Studio</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section dark={false}>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Section */}
      <Section dark={false}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              To empower businesses with innovative digital solutions that drive
              growth, enhance user experiences, and create lasting value. We
              believe in building technology that makes a difference.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
