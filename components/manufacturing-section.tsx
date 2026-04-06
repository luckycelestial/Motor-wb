'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export function ManufacturingSection() {
  const processes = [
    { step: '01', title: 'Design & Engineering', description: 'Advanced CAD modeling and design optimization' },
    { step: '02', title: 'Raw Material Selection', description: 'Premium sourcing from certified suppliers' },
    { step: '03', title: 'Precision Manufacturing', description: 'State-of-the-art machinery and techniques' },
    { step: '04', title: 'Quality Control', description: 'Rigorous testing and inspection protocols' },
    { step: '05', title: 'Finishing & Packaging', description: 'Professional finishing and secure packaging' },
    { step: '06', title: 'Delivery', description: 'Timely and reliable logistics solutions' },
  ];

  return (
    <section id="manufacturing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              Our Manufacturing Process
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A comprehensive approach to quality that ensures excellence at every step.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ScrollAnimationWrapper key={process.step} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.15)' }}
                className="p-8 rounded-lg border border-border hover:border-primary transition-all relative"
              >
                <div className="text-5xl font-bold text-primary/30 mb-4">{process.step}</div>
                <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                <p className="text-foreground/70">{process.description}</p>
                
                {index < processes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute -right-4 top-1/3 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent origin-left"
                  />
                )}
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
