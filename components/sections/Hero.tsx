'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedBackground from '../AnimatedBackground'
import { GlassButton } from '../GlassCard'
import { useEffect, useState } from 'react'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Typing animation for tagline
  const phrases = [
    'We Engineer Ideas into Reality',
    'We Build Digital Experiences',
    'We Create Modern Solutions',
    'We Code Your Vision'
  ];
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation state and effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && charIdx < phrases[phraseIdx].length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 60);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 30);
    } else if (!deleting && charIdx === phrases[phraseIdx].length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 400);
    }
    setDisplayed(phrases[phraseIdx].slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-x-hidden">
      <AnimatedBackground type="subtle" />
      
      <div className="container-center section-padding px-4 sm:px-8 md:px-12 lg:px-24 relative z-10 content-enhanced">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-mono break-words">
              <span className="text-gradient animate-gradient-x inline-block">BUNZAI</span>
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-mono mt-2">
              <span className="text-white">LABS</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-mono max-w-3xl mx-auto min-h-[2.5em] px-2"
          >
            {displayed}
            <span className="inline-block w-2 h-6 align-middle bg-white/80 animate-pulse ml-1" style={{verticalAlign:'-0.2em'}}></span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-lg md:text-xl text-white/60 font-mono max-w-2xl mx-auto px-2"
          >
            Modern freelance development firm crafting digital experiences 
            that push the boundaries of technology and design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center -mt-6 w-full"
          >
            <GlassButton 
              onClick={scrollToServices}
              size="lg"
              className="w-full sm:w-auto min-w-[140px]"
            >
              See Our Work
            </GlassButton>
            <GlassButton 
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[140px]"
            >
              Get In Touch
            </GlassButton>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Much more subtle */}
      <div className="absolute inset-0 pointer-events-none max-w-full overflow-x-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 max-w-full bg-buns-primary/5 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-3/4 right-1/4 w-3 h-3 max-w-full bg-buns-light/5 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/2 w-2 h-2 max-w-full bg-buns-accent/5 rounded-full blur-sm"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 mt-24"
        onClick={scrollToServices}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 rounded-full wireframe-border hover:border-buns-primary/60 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-buns-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
