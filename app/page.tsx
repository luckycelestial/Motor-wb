'use client';

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { WhyUsSection } from '@/components/why-us-section';
import { ManufacturingSection } from '@/components/manufacturing-section';
import { QualitySection } from '@/components/quality-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { JVBannerSection } from '@/components/jv-banner-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <ManufacturingSection />
        <QualitySection />
        <TestimonialsSection />
        <JVBannerSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
