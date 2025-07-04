'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useRef, useState } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
  onClick?: () => void
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  onClick 
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState<{x: number, y: number} | null>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  function handleMouseLeave() {
    setGlow(null)
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      {...(hover && { variants: { ...cardVariants, ...hoverVariants } })}
      onClick={onClick}
      onMouseMove={hover ? handleMouseMove : undefined}
      onMouseLeave={hover ? handleMouseLeave : undefined}
      className={`
        glass rounded-2xl p-6 transition-shadow duration-300
        ${className}
      `}
      style={glow ? {
        '--glow-x': `${glow.x}px`,
        '--glow-y': `${glow.y}px`
      } as React.CSSProperties : {}}
    >
      <div
        style={glow ? {
          pointerEvents: 'none',
          position: 'absolute',
          left: 0, top: 0, right: 0, bottom: 0,
          borderRadius: 'inherit',
          zIndex: 2,
          background: `radial-gradient(180px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(210,105,30,0.18), transparent 70%)`,
          transition: 'background 0.2s',
        } : { display: 'none' }}
      />
      {children}
    </motion.div>
  )
}

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

export function GlassButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  type = 'button'
}: GlassButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [glow, setGlow] = useState<{x: number, y: number} | null>(null)
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  const variantClasses = {
    primary: 'btn-neon',
    secondary: 'glass hover:glass-border border-white/30',
    ghost: 'hover:glass transition-all duration-300'
  }
  function handleMouseMove(e: React.MouseEvent) {
    const rect = btnRef.current?.getBoundingClientRect()
    if (!rect) return
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  function handleMouseLeave() {
    setGlow(null)
  }
  return (
    <motion.button
      ref={btnRef}
      type={type}
      whileHover={{ 
        scale: 1.02,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        rounded-lg font-mono font-semibold uppercase tracking-wide
        transition-all duration-300
        ${className}
      `}
      style={glow ? {
        '--glow-x': `${glow.x}px`,
        '--glow-y': `${glow.y}px`
      } as React.CSSProperties : {}}
    >
      <span
        style={glow ? {
          pointerEvents: 'none',
          position: 'absolute',
          left: 0, top: 0, right: 0, bottom: 0,
          borderRadius: 'inherit',
          zIndex: 2,
          background: `radial-gradient(120px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(210,105,30,0.18), transparent 70%)`,
          transition: 'background 0.2s',
        } : { display: 'none' }}
      />
      {children}
    </motion.button>
  )
}

interface GlassInputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  className?: string
  multiline?: boolean
  rows?: number
}

export function GlassInput({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  multiline = false,
  rows = 4
}: GlassInputProps) {
  const baseClasses = `
    glass w-full px-4 py-3 rounded-lg
    bg-white/5 border-white/20 
    text-white placeholder-white/50
    focus:outline-none focus:ring-2 focus:ring-buns-primary/50
    focus:border-buns-primary/50
    transition-all duration-300
  `

  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${baseClasses} ${className} resize-none`}
      />
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${className}`}
    />
  )
}
