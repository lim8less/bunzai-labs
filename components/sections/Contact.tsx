'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GlassButton, GlassInput } from '../GlassCard'
import AnimatedBackground from '../AnimatedBackground'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  }

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden section-divider">
      <AnimatedBackground type="minimal" />

      <div className="container-center section-padding px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-gradient mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-mono">
            We'd love to hear from you. Let's start a project together!
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-xl w-full mx-auto glass p-4 sm:p-8 rounded-lg">
          <div className="mb-6">
            <GlassInput type="text" placeholder="Your Name" className="mb-4" />
            <GlassInput type="email" placeholder="Your Email" className="mb-4" />
            <GlassInput multiline placeholder="Your Message" rows={5} />
          </div>
          <GlassButton variant="primary" type="submit">
            <Send size={16} className="inline mr-2" /> Send Message
          </GlassButton>
        </form>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <div className="flex items-center space-x-2 text-white/80">
            <Mail size={20} />
            <a href="mailto:contact@bunzailabs.dev" className="hover:text-buns-primary">contact@bunzailabs.dev</a>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <Phone size={20} />
            <a href="tel:+1234567890" className="hover:text-buns-primary">+1 (234) 567-890</a>
          </div>
        </div>
      </div>

      {/* Background Elements - Much more subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/4 w-32 h-32 bg-gradient-to-br from-neon-primary/5 to-orange-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-neon-primary/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
