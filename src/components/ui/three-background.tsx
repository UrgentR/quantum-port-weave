import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null!)
  
  // Generate random particles
  const particles = useMemo(() => {
    const temp = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3
      temp[i3] = (Math.random() - 0.5) * 200
      temp[i3 + 1] = (Math.random() - 0.5) * 200
      temp[i3 + 2] = (Math.random() - 0.5) * 200
    }
    return temp
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.05
      ref.current.rotation.y = t * 0.075
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function NeuralNetwork() {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.1
    }
  })

  const nodes = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5
      })
    }
    return temp
  }, [])

  return (
    <group ref={ref}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position} scale={node.scale}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial color="#ff00ff" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 100], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Particles />
        <NeuralNetwork />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      </Canvas>
    </div>
  )
}