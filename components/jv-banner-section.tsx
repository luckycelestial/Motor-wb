'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Button } from '@/components/ui/button';

export function JVBannerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 -z-10" />
          <img
            src="https://placehold.co/1200x400/1e90ff/0a1628?text=Joint+Ventures"
            alt="Joint Ventures"
            className="w-full h-96 object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <ScrollAnimationWrapper>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                Joint Ventures & Distribution
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <p className="text-lg text-foreground/90 mb-8 max-w-2xl">
                Open to joint ventures and overseas distribution tie-ups. Partner with a trusted ISO 9001:2008 certified manufacturer serving India for 30+ years.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Partnerships
              </Button>
            </ScrollAnimationWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
