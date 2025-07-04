'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SoftLightRays() {
  const raysRef = useRef<THREE.Group>(null!)
  
  const rays = useMemo(() => {
    const temp = []
    for (let i = 0; i < 6; i++) { // Just 6 very subtle rays
      temp.push({
        position: [
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        length: Math.random() * 30 + 20,
        opacity: Math.random() * 0.03 + 0.01
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (raysRef.current) {
      raysRef.current.children.forEach((ray, index) => {
        // Very slow rotation
        ray.rotation.z += 0.001 * (index % 2 === 0 ? 1 : -1)
        // Gentle opacity pulse
        const material = (ray as THREE.Mesh).material as THREE.MeshBasicMaterial
        material.opacity = rays[index].opacity + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.01
      })
    }
  })

  return (
    <group ref={raysRef}>
      {rays.map((ray, index) => (
        <mesh
          key={index}
          position={ray.position as [number, number, number]}
          rotation={ray.rotation as [number, number, number]}
        >
          <planeGeometry args={[0.5, ray.length]} />
          <meshBasicMaterial
            color="#D2691E"
            transparent
            opacity={ray.opacity}
            side={2}
          />
        </mesh>
      ))}
    </group>
  )
}

function GentleGlowOrbs() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const orbs = useMemo(() => {
    const temp = []
    for (let i = 0; i < 4; i++) { // Just 4 very subtle glowing orbs
      temp.push({
        position: [
          (Math.random() - 0.5) * 120,
          (Math.random() - 0.5) * 120,
          (Math.random() - 0.5) * 120
        ],
        size: Math.random() * 0.8 + 0.4,
        speed: Math.random() * 0.01 + 0.005,
        baseOpacity: Math.random() * 0.02 + 0.01
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh, index) => {
        // Very gentle floating motion
        mesh.position.y = orbs[index].position[1] + Math.sin(state.clock.elapsedTime * orbs[index].speed + index) * 1
        mesh.position.x = orbs[index].position[0] + Math.cos(state.clock.elapsedTime * orbs[index].speed * 0.8 + index) * 0.8
        
        // Gentle glow pulse
        const material = (mesh as THREE.Mesh).material as THREE.MeshBasicMaterial
        material.opacity = orbs[index].baseOpacity + Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.008
      })
    }
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, index) => (
        <mesh
          key={index}
          position={orb.position as [number, number, number]}
        >
          <sphereGeometry args={[orb.size, 12, 12]} />
          <meshBasicMaterial
            color="#F4A460"
            transparent
            opacity={orb.baseOpacity}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null!)
  const orbCount = 3 // Reduced from 8 to 3
  
  const orbs = useMemo(() => {
    const temp = []
    for (let i = 0; i < orbCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30
        ],
        color: '#D2691E',
        size: Math.random() * 0.3 + 0.1 // Much smaller
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, index) => {
        orb.position.y = Math.sin(state.clock.elapsedTime * 0.2 + index) * 1 // Slower movement
        orb.position.x = Math.cos(state.clock.elapsedTime * 0.15 + index) * 1.5
      })
    }
  })

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position as [number, number, number]}>
          <sphereGeometry args={[orb.size, 8, 8]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  )
}

interface AnimatedBackgroundProps {
  type?: 'subtle' | 'enhanced' | 'minimal'
}

export default function AnimatedBackground({ type = 'subtle' }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        style={{ background: '#000000' }}
      >
        <ambientLight intensity={0.01} />
        
        {type === 'subtle' && <SoftLightRays />}
        {type === 'enhanced' && (
          <>
            <SoftLightRays />
            <GentleGlowOrbs />
          </>
        )}
        {type === 'minimal' && <GentleGlowOrbs />}
      </Canvas>
      
      {/* Very light overlay to ensure content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/15 pointer-events-none" />
    </div>
  )
}
