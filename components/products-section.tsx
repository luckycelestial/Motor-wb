'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { products } from '@/lib/data';

export function ProductsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
              Comprehensive range of industrial pump solutions designed to meet diverse manufacturing needs.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)' }}
              className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all flex flex-col bg-card/50 h-full group"
            >
              <div className="relative h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500 rounded-md"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur rounded-full p-2 text-2xl shadow-sm">
                  {product.icon}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                
                <Button variant="outline" asChild className="w-full text-primary hover:bg-primary border-primary hover:text-white mt-auto transition-colors">
                  <Link href={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}