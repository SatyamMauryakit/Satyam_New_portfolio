"use client";

import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
// Font will be loaded dynamically

function DeveloperLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }

    if (sphereRef.current) {
      const t = state.clock.elapsedTime;
      sphereRef.current.position.x = Math.cos(t) * 3;
      sphereRef.current.position.y = Math.sin(t) * 3;
    }
  });

  return (
    <group>
      {/* Main Developer Logo */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 0.5]} />
        <meshStandardMaterial
          color={hovered ? "#6366f1" : "#3b82f6"}
          metalness={0.6}
          roughness={0.2}
          emissive={hovered ? "#1e40af" : "#1e3a8a"}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating Code Brackets - Using mesh instead of Text3D */}
      <mesh position={[-3, 1, 0]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Floating React Symbol */}
      <mesh position={[3, -1, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#61dafb" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Orbiting Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Hero3DDeveloper() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#3b82f6"
        />
        <DeveloperLogo />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
