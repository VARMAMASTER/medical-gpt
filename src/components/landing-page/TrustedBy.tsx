import * as React from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BrandLogoProps {
  name: string;
  logo: string;
  delay: number;
}

function BrandLogo({ name, logo, delay }: BrandLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <div className="relative w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

export default function TrustedBy() {
  const brands = [
    { name: "Disney", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Disney_wordmark.svg" },
    { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_logo_2021.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Tinder", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tinder_Logo.svg" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
              Trusted
            </span>{' '}
            by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg"
          >
            Join thousands of leading companies using our AI writing assistant
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <BrandLogo
              key={brand.name}
              {...brand}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
    </section>
  );
}
