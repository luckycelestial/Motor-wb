'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export function AboutSection() {
  const values = [
    { icon: '⚙️', title: 'Precision', description: 'Every product crafted with meticulous attention to detail' },
    { icon: '🔬', title: 'Innovation', description: 'Constantly pushing boundaries with advanced technology' },
    { icon: '🤝', title: 'Partnership', description: 'Building long-term relationships with our clients' },
    { icon: '🌍', title: 'Sustainability', description: 'Committed to environmentally responsible practices' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                About Jai Jansi Industries
              </h2>
              <p className="text-foreground/70 text-lg mb-4">
                Founded in 2005, Jai Jansi Industries has emerged as a leading manufacturer of premium industrial products. Our journey is marked by consistent innovation, unwavering quality commitment, and customer-centric approach.
              </p>
              <p className="text-foreground/70 text-lg mb-8">
                We specialize in manufacturing a diverse range of products that cater to multiple industries, ensuring each product meets the highest standards of quality and performance.
              </p>
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollAnimationWrapper key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
