'use client';

import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  company: z.string().optional(),
  product: z.string().min(1, 'Please select a product category'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const productCategory = watch('product');

  const productCategories = [
    'Borewell Submersible Pumps',
    'SS304 Stainless Steel Submersible Pumps',
    'Open Well Submersible Pumps',
    'Self-Priming Centrifugal Monoblock',
    'Centrifugal Monoblock Pumps',
    'Jet Pump Sets',
    'Special Application Submersible Pumps',
    'Borewell Compressor Pumps & Motors',
    'Energy Efficient AC Induction Motors',
    'Industrial Air Compressors',
    'Vehicle Washers / High Pressure Washers',
    'Other / General Inquiry',
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We will get back to you shortly.');
      console.log('Form data:', data);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@jaijansi.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0422-2560104 / 0422-2565090',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'SF No 301, Duraisamy Layout, Avarampalayam, Coimbatore – 641006, Tamil Nadu, India',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              Get In Touch
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollAnimationWrapper key={info.label} delay={index * 0.1}>
                  <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>

          {/* Contact Form */}
          <ScrollAnimationWrapper delay={0.3}>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    {...register('name')}
                    placeholder="Your name"
                    className="bg-background border-border text-foreground"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border text-foreground"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    {...register('phone')}
                    placeholder="+91-XXX-XXX-XXXX"
                    className="bg-background border-border text-foreground"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    {...register('company')}
                    placeholder="Company name (optional)"
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Category</label>
                <Select value={productCategory} onValueChange={(value) => setValue('product', value)}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.product && (
                  <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  {...register('message')}
                  placeholder="Tell us about your requirements..."
                  className="bg-background border-border text-foreground min-h-32"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
