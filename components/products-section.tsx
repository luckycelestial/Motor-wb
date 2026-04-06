'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import Image from 'next/image';

export function ProductsSection() {
  const products = [
    { name: 'Borewell Submersible Pumps', description: 'V3 / V4 / V6 - Single & Three Phase', icon: '💧', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Borewell+Submersible' },
    { name: 'SS304 Stainless Steel Submersible Pumps', description: 'V4 / V6 (100mm & 150mm)', icon: '🔩', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=SS304+Submersible' },
    { name: 'Open Well Submersible Pumps - Horizontal', description: 'High capacity horizontal installation', icon: '🌊', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Open+Well+Horizontal' },
    { name: 'Open Well Submersible Pumps - Vertical', description: 'Heavy duty vertical submersion', icon: '⬆️', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Open+Well+Vertical' },
    { name: 'Self-Priming Centrifugal Monoblock Pumps', description: 'Automatic priming capability', icon: '🔄', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Self-Priming' },
    { name: 'Centrifugal Monoblock Pumps', description: 'Compact and efficient design', icon: '⚙️', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Centrifugal+Monoblock' },
    { name: 'Jet Pump Sets', description: 'Shallow well and surface water solutions', icon: '🚿', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Jet+Pump' },
    { name: 'Special Application Submersible Pumps', description: 'Custom engineered solutions', icon: '🏭', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Special+Application' },
    { name: 'Borewell Compressor Pumps & Motors', description: 'Pneumatic and electric power', icon: '💨', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Compressor+Pumps' },
    { name: 'Energy Efficient AC Induction Motors', description: 'BIS-marked efficiency certified', icon: '⚡', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=AC+Motors' },
    { name: 'Industrial Air Compressors', description: 'Reliable air compression systems', icon: '🌬️', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Air+Compressors' },
    { name: 'Vehicle Washers / High Pressure Washers', description: 'Professional cleaning equipment', icon: '🚗', image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Pressure+Washers' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)' }}
              className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all cursor-pointer group bg-card/50"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{product.icon}</span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{product.description}</p>
                <button className="text-primary hover:text-primary/80 font-semibold text-xs flex items-center gap-2">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
