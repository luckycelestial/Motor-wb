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
      name: 'Open Well Submersible Pumps - Horizontal', 
      description: 'High capacity horizontal installation', 
      icon: '🌊', 
      image: 'https://www.jaijansi.com/img/l02.png',
      details: 'Designed for underwater applications in shallow wells or sumps, the horizontal open well submersible pumps eliminate priming issues. These pumps provide an energy-efficient, silent operation and are optimal for irrigation, canals, and large cooling towers.'
    },
    { 
      name: 'Open Well Submersible Pumps - Vertical', 
      description: 'Heavy duty vertical submersion', 
      icon: '⬆️', 
      image: 'https://www.jaijansi.com/img/l03.png',
      details: 'Vertical open well submersible pumps are engineered for fluctuating water levels. With a rugged build and rust-resistant components, they ensure continuous water supply for multi-story buildings and large-scale agricultural projects.'
    },
    { 
      name: 'Self-Priming Centrifugal Monoblock Pumps', 
      description: 'Automatic priming capability', 
      icon: '🔄', 
      image: 'https://www.jaijansi.com/img/img01.jpg',
      details: 'Self-priming centrifugal monoblock pumps handle air-entrained water efficiently without needing manual priming every time. They are robust, highly reliable, and excel in domestic water supply, gardening, and small scale irrigation tasks.'
    },
    { 
      name: 'Centrifugal Monoblock Pumps', 
      description: 'Compact and efficient design', 
      icon: '⚙️', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Centrifugal+Monoblock',
      details: 'Engineered for smooth flow and quiet operation, our monoblock pumps integrate motor and pump into a single unit. They are compact, occupy minimum space, and are widely utilized in pressure boosting systems, HVAC installations, and water supply applications.'
    },
    { 
      name: 'Jet Pump Sets', 
      description: 'Shallow well and surface water solutions', 
      icon: '🚿', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Jet+Pump',
      details: 'Jet Pump Sets are the perfect solution for drawing water from shallow wells, tanks, and cisterns. With outstanding suction capacity and steady pressure, they deliver reliable water distribution for rural and residential homes.'
    },
    { 
      name: 'Special Application Submersible Pumps', 
      description: 'Custom engineered solutions', 
      icon: '🛠️', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Special+Application',
      details: 'Tailor-made for specialized industrial fluid handling, these pumps manage corrosive, abrasive, or high-temperature liquids safely. Custom manufactured to industry specifications for reliable chemical and wastewater management.'
    },
    { 
      name: 'Borewell Compressor Pumps & Motors', 
      description: 'Pneumatic and electric power', 
      icon: '💨', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Compressor+Pumps',
      details: 'Harness the power of compressed air for lifting water from deep borewells with low yields. Our borewell compressor pumps offer a highly durable, low-maintenance solution for challenging water extraction environments.'
    },
    { 
      name: 'Energy Efficient AC Induction Motors', 
      description: 'BIS-marked efficiency certified', 
      icon: '⚡', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=AC+Motors',
      details: 'Our BIS-marked AC induction motors are designed to reduce electricity consumption while maximizing torque output. Whether for running heavy industrial machinery or agricultural pump setups, these motors are verified for long-lasting, heavy-duty performance.'
    },
    { 
      name: 'Industrial Air Compressors', 
      description: 'Reliable air compression systems', 
      icon: '🌬️', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Air+Compressors',
      details: 'Industrial air compressors by HI-FLOW are designed for high efficiency and consistent compressed air delivery. They are essential for pneumatic tools, assembly lines, and workshops that demand uninterruptible pneumatic power.'
    },
    { 
      name: 'Vehicle Washers / High Pressure Washers', 
      description: 'Professional cleaning equipment', 
      icon: '🚗', 
      image: 'https://placehold.co/400x300/0f1f3d/1E90FF?text=Pressure+Washers',
      details: 'Deliver professional-grade cleaning with our robust high-pressure washers. Engineered for garages, vehicle showrooms, and extreme industrial cleaning requirements, they effectively cut through dirt, grease, and grime while minimizing water usage.'
    },
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
            <Dialog key={product.name}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)' }}
                className="rounded-lg overflow-hidden border border-border hover:border-primary transition-all flex flex-col bg-card/50 h-full group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur rounded-full p-2 text-2xl shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full text-primary hover:bg-primary border-primary hover:text-white mt-auto transition-colors">
                      View Details
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-2xl border-primary/20 backdrop-blur-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                        <span>{product.icon}</span> {product.name}
                      </DialogTitle>
                      <DialogDescription className="text-foreground/80 mt-4 text-base leading-relaxed">
                        {product.details}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex justify-center bg-white rounded-xl p-4 border shadow-inner">
                      <img src={product.image} alt={product.name} className="max-h-72 object-contain" />
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