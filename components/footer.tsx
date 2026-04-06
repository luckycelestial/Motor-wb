'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['About Us', 'Products', 'Services', 'Blog', 'Careers'];
  const resources = ['Documentation', 'Support', 'FAQs', 'Terms', 'Privacy'];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              <span className="text-primary">JAI JANSI</span>
              <span className="text-foreground"> INDUSTRIES</span>
            </div>
            <p className="text-foreground/70 text-sm mb-6">
              HI-FLOW Pumps — Powering India's Water Future. ISO 9001:2008 Certified manufacturer of premium submersible and centrifugal pumps.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@jaijansi.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@jaijansi.com</span>
              </a>
              <a
                href="tel:+919842267330"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98422 67330</span>
              </a>
              <div className="flex items-start gap-3 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>SF No 301, Avarampalayam, Coimbatore – 641006, TN</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Jai Jansi Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-foreground/60 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
