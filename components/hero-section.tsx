'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const words = ['Precision', 'Reliability', 'Efficiency', 'Solutions'];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Background Image from jaijansi.com */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://www.jaijansi.com/img/img01.jpg)', opacity: 0.15 }}
      />
      <div className="absolute inset-0 -z-10 bg-background/80" />

      <div className="mx-auto max-w-6xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-primary text-lg sm:text-xl font-bold mb-4 tracking-wider uppercase">JAI JANSI — Powering India's Water Future</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
            <span className="block mb-2">Premium Submersible & Centrifugal Pumps</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Over decades of manufacturing excellence. Serving farmers, contractors, and industries across India with high-quality pump solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg">
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 h-14 rounded-full"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
