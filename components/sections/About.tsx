'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Award } from 'lucide-react'
import GlassCard from '../GlassCard'

const techStack = [
  { name: 'Next.js', color: '#000000' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'GraphQL', color: '#E10098' }
]

const teamValues = [
  {
    icon: <Users size={32} />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and close client partnerships.'
  },
  {
    icon: <Target size={32} />,
    title: 'Precision',
    description: 'Every line of code is crafted with attention to detail and purpose.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible with cutting-edge technology.'
  },
  {
    icon: <Award size={32} />,
    title: 'Excellence',
    description: 'Delivering solutions that exceed expectations and drive results.'
  }
]

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative section-divider">
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
            About Us
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-mono">
            Meet the team behind the innovation
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center mb-16">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="text-3xl font-bold font-mono text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Founded with a passion for digital innovation, Bunzai Labs emerged from the vision 
                  of creating exceptional digital experiences that make a real impact.
                </p>
                <p>
                  We're a team of dedicated developers, designers, and strategists who believe that 
                  technology should be accessible, beautiful, and purposeful. Every project we take on 
                  is an opportunity to push boundaries and deliver solutions that truly matter.
                </p>
                <p>
                  From concept to deployment, we partner with our clients to transform ideas into 
                  powerful digital realities that drive growth and success.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
          >
            {teamValues.map((value, index) => (
              <GlassCard key={index} delay={index * 0.1} className="text-center">
                <div className="text-buns-primary mb-3 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold font-mono text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-8">
            Our Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-transparent rounded-full border border-buns-primary/30 hover:border-buns-primary/60 transition-all duration-300"
              >
                <span className="text-white font-mono font-semibold">
                  {tech.name}
                </span>
              </motion.div>
            ))}
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
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-neon-primary/3 to-orange-400/3 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-l from-amber-500/3 to-neon-primary/3 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
