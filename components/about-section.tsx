'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export function AboutSection() {
  const values = [
    { icon: '💧', title: 'Quality', description: 'ISO 9001:2008 certified manufacturing process' },
    { icon: '⚡', title: 'Efficiency', description: 'BIS-marked energy efficient pump solutions' },
    { icon: '🏭', title: 'Excellence', description: 'State-of-the-art facility in Coimbatore' },
    { icon: '🌾', title: 'Trust', description: 'Trusted by farmers and industries across India' },
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
                Established in Coimbatore, Tamil Nadu, Jai Jansi Industries is a trusted manufacturer of high-quality submersible pumps, centrifugal pumps, motors, and allied equipment. With 30+ years of excellence, we serve farmers, contractors, and industrial clients across India.
              </p>
              <p className="text-foreground/70 text-lg mb-8">
                ISO 9001:2008 Certified, we offer a complete range from 0.5 HP to 100+ HP pump solutions. Our commitment to quality, innovation, and customer satisfaction has made us leaders in water management and industrial pumping solutions.
              </p>
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
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
