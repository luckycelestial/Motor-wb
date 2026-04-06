'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { AnimatedCounter } from './animated-counter';

export function StatsSection() {
  const stats = [
    { label: 'Years of Excellence', value: 19, suffix: '+' },
    { label: 'Products Manufactured', value: 50000, suffix: '+' },
    { label: 'Global Clients', value: 500, suffix: '+' },
    { label: 'Team Members', value: 450, suffix: '+' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              By The Numbers
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Our commitment to quality and innovation has made us a trusted partner for businesses worldwide.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimationWrapper key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-foreground/70 mt-4 font-medium">{stat.label}</p>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
