'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { HiSparkles, HiLightningBolt, HiChartBar, HiClock, HiShieldCheck, HiTranslate } from "react-icons/hi";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: IconType;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative p-6 bg-card backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all"
    >
      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted">{description}</p>
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: HiSparkles,
    title: "AI-Powered Writing",
    description: "Advanced AI algorithms help you write better content faster with smart suggestions.",
  },
  {
    icon: HiLightningBolt,
    title: "Real-Time Assistance",
    description: "Get instant feedback and improvements as you write with our real-time AI assistant.",
  },
  {
    icon: HiChartBar,
    title: "Style Analysis",
    description: "Analyze and improve your writing style with detailed insights and recommendations.",
  },
  {
    icon: HiClock,
    title: "Time-Saving",
    description: "Reduce writing time by up to 50% with automated suggestions and corrections.",
  },
  {
    icon: HiShieldCheck,
    title: "Grammar Check",
    description: "Advanced grammar and spelling checker powered by machine learning.",
  },
  {
    icon: HiTranslate,
    title: "Multi-Language",
    description: "Support for multiple languages with accurate translations and localization.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-mesh-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Key Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
          >
            Discover how our AI-powered tools can transform your writing experience
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
    </section>
  );
};

export default FeaturesSection;
