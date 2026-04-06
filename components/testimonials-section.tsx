'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechCorp Industries',
      text: 'Jai Jansi Industries has been our trusted partner for 5 years. Their products consistently exceed our expectations in quality and reliability.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Global Manufacturing Ltd',
      text: 'Outstanding service and exceptional product quality. The team is highly responsive and professional. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Precision Engineering Co.',
      text: 'The customization options and technical support are unmatched. They truly understand our industry needs.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'International Solutions Inc.',
      text: 'Reliable, professional, and committed to excellence. Jai Jansi has become an integral part of our supply chain.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
