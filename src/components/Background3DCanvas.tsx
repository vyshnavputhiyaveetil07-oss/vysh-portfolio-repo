import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Light-theme ambient 3D floating shape with rich professional colors
function FloatingShape({ position, color, shape = 'cube' }: { position: [number, number, number]; color: string; shape?: 'cube' | 'octahedron' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.9} position={position}>
      <mesh ref={meshRef}>
        {shape === 'cube' && <boxGeometry args={[0.85, 0.85, 0.85]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.75, 0]} />}
        {shape === 'torus' && <torusGeometry args={[0.65, 0.18, 12, 24]} />}
        <meshStandardMaterial
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

// 3D Particle Cloud with subtle multi-color mix
function ParticlesCloud({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#0284c7"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export const Background3DCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[10, 10, 10]} intensity={1.0} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.7} color="#a855f7" />

        {/* Ambient 3D floating geometric wireframe shapes with rich analytics colors */}
        <FloatingShape position={[-4.8, 3.2, -2]} color="#0d9488" shape="octahedron" />
        <FloatingShape position={[4.8, -2.2, -1]} color="#2563eb" shape="cube" />
        <FloatingShape position={[-4.0, -3.8, -3]} color="#7c3aed" shape="torus" />
        <FloatingShape position={[4.2, 3.5, -2]} color="#059669" shape="octahedron" />

        {/* Floating particle cloud */}
        <ParticlesCloud count={100} />
      </Canvas>
    </div>
  );
};
