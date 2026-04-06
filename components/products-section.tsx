'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import Image from 'next/image';

export function ProductsSection() {
  const products = [
    { name: 'Precision Bearings', category: 'Engineering', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Bearings' },
    { name: 'Industrial Gears', category: 'Mechanical', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Gears' },
    { name: 'Hydraulic Components', category: 'Fluid Systems', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Hydraulics' },
    { name: 'Control Systems', category: 'Automation', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Controls' },
    { name: 'Metal Fasteners', category: 'Hardware', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Fasteners' },
    { name: 'Power Transmission', category: 'Drive Systems', image: 'https://placehold.co/400x300/1e90ff/0a1628?text=Transmission' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              Our Products
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Comprehensive range of industrial solutions designed to meet diverse manufacturing needs.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)' }}
              className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-primary text-sm font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-2">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
