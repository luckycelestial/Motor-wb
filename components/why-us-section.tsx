'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Check } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    'Industry-leading quality standards and certifications',
    'State-of-the-art manufacturing facilities',
    'Expert team with decades of combined experience',
    'Customization capabilities for unique requirements',
    'Competitive pricing without compromising quality',
    'Reliable on-time delivery and logistics',
    'Dedicated customer support and technical assistance',
    'Commitment to continuous innovation and improvement',
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/500x600/1e90ff/0a1628?text=Why+Choose+Us"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <ScrollAnimationWrapper>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Why Choose Jai Jansi
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                We stand out in the industry through our unwavering commitment to excellence, innovation, and customer satisfaction.
              </p>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{reason}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
              >
                Request Consultation
              </motion.button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
