'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Farmer, Tamil Nadu',
      company: 'Agriculture Sector',
      text: 'Jai Jansi&apos;s submersible pumps have been reliable for over a decade. Great efficiency and outstanding after-sales support. Highly recommend for irrigation!',
      rating: 5,
    },
    {
      name: 'Industrial Contractor',
      company: 'Water Supply Systems',
      text: 'ISO certified quality and BIS-marked efficiency. Their pumps perform exceptionally well across various applications. Best value for money.',
      rating: 5,
    },
    {
      name: 'Plant Manager',
      company: 'Manufacturing Unit',
      text: 'Dependable, energy-efficient, and backed by excellent technical support. We trust Jai Jansi for critical water management applications.',
      rating: 5,
    },
    {
      name: 'District Coordinator',
      company: 'Government Project',
      text: 'Proudly made in India. Jai Jansi&apos;s commitment to quality and customer service sets them apart. Perfect for public water supply projects.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              What Our Clients Say
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Trusted by leading companies across multiple industries.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-lg p-8 md:p-12"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-2xl text-primary">★</span>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-foreground/70">{testimonials[currentIndex].company}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
