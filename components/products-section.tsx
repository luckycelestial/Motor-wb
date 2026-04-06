'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ProductsSection() {
  const products = [
    { 
      name: 'Borewell Submersible Pumps', 
      description: 'V3 / V4 / V6 - Single & Three Phase', 
      icon: '💧', 
      image: 'https://www.jaijansi.com/img/l03.png',
      details: 'Our Borewell Submersible Pumps (V3, V4, and V6 series) are designed for deep well applications. These pumps offer superior performance with high discharge rates and are suitable for both single-phase and three-phase power supplies, making them ideal for agriculture, industrial use, and municipal water supply.'
    },
    { 
      name: 'SS304 Stainless Steel Submersible Pumps', 
      description: 'V4 / V6 (100mm & 150mm)', 
      icon: '🔩', 
      image: 'https://www.jaijansi.com/img/l01.png',
      details: 'Built with premium SS304 grade stainless steel, these submersible pumps guarantee rust-free operation and long lifespan. Their corrosion-resistant properties are perfectly matched for challenging water conditions, ensuring clean water delivery for commercial and domestic needs.'
    },
    { 
      name: 'Open Well Submersible Pumps', 
      description: 'High capacity horizontal installation', 
      icon: '🌊', 
      image: 'https://www.jaijansi.com/img/l02.png',
      details: 'Designed for underwater applications in shallow wells or sumps, the horizontal open well submersible pumps eliminate priming issues. These pumps provide an energy-efficient, silent operation and are optimal for irrigation, canals, and large cooling towers.'
    },
    { 
      name: 'Self-Priming Centrifugal Pumps', 
      description: 'Automatic priming capability', 
      icon: '🔄', 
      image: 'https://www.jaijansi.com/img/img01.jpg',
      details: 'Self-priming centrifugal monoblock pumps handle air-entrained water efficiently without needing manual priming every time. They are robust, highly reliable, and excel in domestic water supply, gardening, and small scale irrigation tasks.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id=""products"" className=""py-20 px-4 sm:px-6 lg:px-8 bg-card"">
      <div className=""mx-auto max-w-7xl"">
        <ScrollAnimationWrapper>
          <div className=""text-center mb-16"">
            <h2 className=""text-4xl sm:text-5xl font-bold mb-4"" style={{ fontFamily: 'var(--font-bebas)' }}>
              Our Products
            </h2>
            <p className=""text-foreground/70 text-lg max-w-2xl mx-auto"">
              Comprehensive range of industrial pump solutions designed to meet diverse manufacturing needs.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <motion.div
          variants={containerVariants}
          initial=""hidden""
          whileInView=""visible""
          viewport={{ once: true, amount: 0.2 }}
          className=""grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6""
        >
          {products.map((product) => (
            <Dialog key={product.name}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)' }}
                className=""rounded-lg overflow-hidden border border-border hover:border-primary transition-all flex flex-col bg-card/50 h-full group cursor-pointer""
              >
                <div className=""relative h-56 overflow-hidden bg-white flex items-center justify-center p-4"">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className=""object-contain h-full w-full group-hover:scale-110 transition-transform duration-500""
                  />
                  <div className=""absolute top-3 right-3 bg-background/80 backdrop-blur rounded-full p-2 text-2xl shadow-sm"">
                    {product.icon}
                  </div>
                </div>
                <div className=""p-5 flex flex-col flex-grow text-center"">
                  <h3 className=""text-lg font-bold mb-2 line-clamp-2"">{product.name}</h3>
                  <p className=""text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow"">{product.description}</p>
                  
                  <DialogTrigger asChild>
                    <Button variant=""outline"" className=""w-full text-primary hover:bg-primary border-primary hover:text-white mt-auto transition-colors"">
                      View Details
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className=""sm:max-w-2xl border-primary/20 backdrop-blur-xl"">
                    <DialogHeader>
                      <DialogTitle className=""text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2"" style={{ fontFamily: 'var(--font-bebas)' }}>
                        <span>{product.icon}</span> {product.name}
                      </DialogTitle>
                      <DialogDescription className=""text-foreground/80 mt-4 text-base leading-relaxed"">
                        {product.details}
                      </DialogDescription>
                    </DialogHeader>
                    <div className=""mt-4 flex justify-center bg-white rounded-xl p-4 border shadow-inner"">
                      <img src={product.image} alt={product.name} className=""max-h-72 object-contain"" />
                    </div>
                  </DialogContent>
                </div>
              </motion.div>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
}