'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  MessageCircle,
  Zap,
  Globe,
  Settings
} from 'lucide-react'
import GlassCard from '../GlassCard'

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and TypeScript.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.',
    technologies: ['Flutter', 'React Native', 'iOS', 'Android']
  },
  {
    icon: <Database size={32} />,
    title: 'API & Systems Design',
    description: 'Scalable backend systems, RESTful APIs, and microservices architecture with robust database design.',
    technologies: ['Node.js', 'PostgreSQL', 'GraphQL', 'MongoDB']
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design approach creating intuitive interfaces and exceptional user experiences.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Consulting & Support',
    description: 'Technical consulting, code reviews, performance optimization, and ongoing maintenance support.',
    technologies: ['Architecture', 'Performance', 'Security', 'Maintenance']
  },
  {
    icon: <Zap size={32} />,
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, cloud infrastructure setup, and deployment automation for scalable applications.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
  }
]

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 relative wireframe-grid">
      <div className="container-center section-padding px-4 sm:px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-gradient mb-4">
            Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-mono">
            Comprehensive development solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl wireframe-border corner-accent flex items-center justify-center text-buns-primary mb-4">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-mono text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-transparent text-buns-primary/80 rounded-full border border-buns-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional Service Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-8 text-white/40">
            <Globe size={24} />
            <Settings size={24} />
            <Zap size={24} />
            <Code size={24} />
            <Database size={24} />
          </div>
        </motion.div>
      </div>

      {/* Background Elements - Much more subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-0 w-24 h-24 bg-gradient-to-r from-neon-primary/3 to-orange-400/3 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-0 w-20 h-20 bg-gradient-to-l from-amber-500/3 to-neon-primary/3 rounded-full blur-2xl"
        />
      </div>
    </section>
  )
}
