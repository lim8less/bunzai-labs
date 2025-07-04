'use client'

import { motion } from 'framer-motion'
import GlassCard from '../GlassCard'

const projects = [
  {
    title: 'Alpha Project',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://via.placeholder.com/400x300',
    description: 'A robust project management platform tailored for startups.'
  },
  {
    title: 'Beta Platform',
    stack: ['Next.js', 'MongoDB', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    description: 'An e-commerce platform that scales effortlessly.'
  },
  {
    title: 'Gamma Analytics',
    stack: ['Python', 'Django', 'Vue.js'],
    image: 'https://via.placeholder.com/400x300',
    description: 'Advanced analytics dashboards for data-driven insights.'
  },
  {
    title: 'Delta Initiative',
    stack: ['Flutter', 'Firebase', 'GraphQL'],
    image: 'https://via.placeholder.com/400x300',
    description: 'A cross-platform app for community building.'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-20 relative section-divider">
      <div className="container-center section-padding px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-mono">
            Explore a selection of our recent work that showcases our ability to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="flex flex-col h-full justify-between">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="rounded-xl mb-4 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold font-mono text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
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
      </div>
    </section>
  )
}

