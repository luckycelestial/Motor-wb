'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Award, Shield, Zap, Trophy } from 'lucide-react';

export function QualitySection() {
  const certifications = [
    { icon: Award, title: 'ISO 9001:2008', description: 'Quality Management System certified' },
    { icon: Trophy, title: 'BIS-Marked', description: 'BIS-marked energy efficient products' },
    { icon: Shield, title: 'Advanced Testing', description: 'Comprehensive quality testing facilities' },
    { icon: Zap, title: 'Performance', description: '0.5 HP to 100+ HP pump range' },
  ];

  return (
    <section id="quality" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              Quality & Certifications
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Maintaining the highest standards through certified processes and continuous improvement.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <ScrollAnimationWrapper key={cert.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-8 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-foreground/70 text-sm">{cert.description}</p>
                </motion.div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        <ScrollAnimationWrapper>
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Our Quality Promise</h3>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto">
              Every pump is tested rigorously to ensure optimal performance, reliability, and durability. Our ISO 9001:2008 certified process guarantees that each product meets international standards and delivers exceptional value to our customers.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
