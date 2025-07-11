'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <AnimatePresence>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 bg-mesh-pattern"
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  Elevate Your Content
                </motion.span>
                <br />
                with Our AI-Powered Writing Tool
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Transform your writing with advanced AI technology. Create engaging, error-free content in seconds. Perfect for bloggers, marketers, and professionals.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.6 },
                  scale: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-accent rounded-lg shadow-glow hover:shadow-glow-lg transition-shadow"
              >
                Get Started Now
              </motion.button>
            </motion.div>

            {/* Code Editor Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500" />
                  <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500" />
                  <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-4 bg-white/5 rounded animate-pulse" 
                  />
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-4 bg-white/5 rounded animate-pulse" 
                  />
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-4 bg-white/5 rounded animate-pulse" 
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-glow"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" 
        />
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000" 
        />
      </section>
    </AnimatePresence>
  );
};

export default HeroSection;
