'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:contact@bunzailabs.dev', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container-center section-padding px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-mono text-gradient mb-2"
            >
              BUNZAI LABS
            </motion.h3>
            <p className="text-white/60 text-sm font-mono">
              © {new Date().getFullYear()} Bunzai Labs. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 10px rgba(210, 105, 30, 0.4)' 
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glass-border border-white/20 text-white/70 hover:text-buns-primary transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.4)' 
            }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:glass-border border-white/20 text-white/70 hover:text-neon-primary transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 font-mono">
            <a href="#" className="hover:text-neon-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neon-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-gradient-to-t from-neon-primary/10 to-transparent blur-xl"
        />
      </div>
    </footer>
  )
}
