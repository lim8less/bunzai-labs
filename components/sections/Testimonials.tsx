'use client'

import { motion } from 'framer-motion'
import { UserCircle, Feather, Globe, CheckCircle } from 'lucide-react'
import GlassCard from '../GlassCard'
import AnimatedBackground from '../AnimatedBackground'

const testimonials = [
  {
    quote: "Bunzai Labs transformed our digital presence and boosted our sales tremendously!",
    author: "Alexa Ray",
    position: "CEO of TechNova"
  },
  {
    quote: "Their attention to detail and technical expertise is unparalleled. Highly recommended!",
    author: "Liam Jordan",
    position: "CTO of Start-Up X"
  },
  {
    quote: "Partnering with Bunzai Labs was a turning point for our business strategy.",
    author: "Marta Hernandez",
    position: "CMO of Creative Agency"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen py-20 relative overflow-hidden section-divider">
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
            Testimonials
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-mono">
            What our clients are saying about us
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-stretch">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex-1 max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center text-center h-full">
                <UserCircle size={64} className="text-buns-primary mb-4" />
                <p className="text-lg text-white/90 mb-4">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/60">{testimonial.position}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Iconography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-8 text-white/40">
            <Feather size={24} />
            <Globe size={24} />
            <CheckCircle size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
