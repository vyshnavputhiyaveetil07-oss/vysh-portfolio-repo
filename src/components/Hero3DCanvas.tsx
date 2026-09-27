import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Data Bar Column Component
function DataBar({ position, height, color, label }: { position: [number, number, number]; height: number; color: string; label: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered && meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        position={[0, height / 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.5, height, 0.5]} />
        <meshStandardMaterial
          color={hovered ? '#60a5fa' : color}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          emissive={hovered ? '#3b82f6' : '#1e3a8a'}
          emissiveIntensity={hovered ? 0.6 : 0.2}
        />
      </mesh>
      {/* 3D Label Badge floating above */}
      <Html position={[0, height + 0.4, 0]} center distanceFactor={10}>
        <div className={`px-2 py-1 rounded text-xs font-mono transition-all duration-300 pointer-events-none select-none ${
          hovered 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110' 
            : 'bg-slate-900/90 text-blue-300 border border-blue-500/30'
        }`}>
          {label}
        </div>
      </Html>
    </group>
  );
}

// 3D Central Glowing Data Cube
function CentralDataCube() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta * 0.4;
    cubeRef.current.rotation.y += delta * 0.6;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={cubeRef} position={[0, 1.2, 0]}>
        <octahedronGeometry args={[1.2, 0]} />
        <MeshWobbleMaterial
          color="#38bdf8"
          factor={0.3}
          speed={1.5}
          wireframe={true}
          emissive="#0284c7"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Particle Constellation Background
function DataParticles({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
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
        size={0.08}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// 3D Flow Nodes (DATA -> ANALYSIS -> INSIGHT -> DECISION)
function FlowNodes() {
  const nodes = [
    { label: "DATA", pos: [-3.2, 0, 0] as [number, number, number], color: "#38bdf8" },
    { label: "ANALYSIS", pos: [-1.1, 0, 0] as [number, number, number], color: "#818cf8" },
    { label: "INSIGHT", pos: [1.1, 0, 0] as [number, number, number], color: "#c084fc" },
    { label: "DECISION", pos: [3.2, 0, 0] as [number, number, number], color: "#34d399" }
  ];

  return (
    <group position={[0, -1.8, 0]}>
      {nodes.map((node, i) => (
        <group key={node.label} position={node.pos}>
          <mesh>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} />
          </mesh>
          <Html position={[0, -0.6, 0]} center distanceFactor={10}>
            <div className="text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-white border border-slate-700/50 shadow-md">
              {node.label}
            </div>
          </Html>
          {i < nodes.length - 1 && (
            <mesh position={[1.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <cylinderGeometry args={[0.03, 0.03, 1.4]} />
              <meshBasicMaterial color="#475569" transparent opacity={0.6} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

export const Hero3DCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-800/80 shadow-2xl shadow-blue-950/20">
      {/* Top Bar Header Decor */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 py-2.5 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono text-slate-400 ml-2">vyshnav_analytics_3d_engine.v2</span>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono text-blue-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            3D WebGL Active
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">Drag to Orbit</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} color="#93c5fd" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#c084fc" />

        {/* Floating 3D Data Bars representing analytics metrics */}
        <group position={[0, -0.6, 0]}>
          <DataBar position={[-2.4, 0, -1]} height={2.2} color="#3b82f6" label="SQL queries" />
          <DataBar position={[-1.2, 0, -0.5]} height={3.1} color="#6366f1" label="Pandas EDA" />
          <DataBar position={[0, 0, 0]} height={2.6} color="#8b5cf6" label="Power BI DAX" />
          <DataBar position={[1.2, 0, -0.5]} height={3.6} color="#ec4899" label="Excel XLOOKUP" />
          <DataBar position={[2.4, 0, -1]} height={2.8} color="#10b981" label="Tableau Viz" />
        </group>

        {/* Central Geometric Octahedron Wireframe */}
        <CentralDataCube />

        {/* 3D Process Pipeline */}
        <FlowNodes />

        {/* Background Particles */}
        <DataParticles count={100} />

        {/* Mouse Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Interactive Overlay Hint */}
      <div className="absolute bottom-3 right-4 z-10 pointer-events-none text-[11px] font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700/50 backdrop-blur-sm shadow-md">
        Interactive 3D View • Rotate Canvas
      </div>
    </div>
  );
};
