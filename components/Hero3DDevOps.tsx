"use client";

import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, Cylinder, Sphere, Box } from "@react-three/drei";
import { Group, Mesh } from "three";

function DevOpsInfrastructure() {
  const groupRef = useRef<Group | null>(null);
  const containerRef = useRef<Mesh | null>(null);
  const cloudRef = useRef<Mesh | null>(null);
  const serverRef = useRef<Mesh | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
    }

    if (containerRef.current) {
      containerRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }

    if (cloudRef.current) {
      cloudRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.1
      );
    }

    if (serverRef.current) {
      serverRef.current.rotation.z += 0.02;
    }
  });



  return (
    <group ref={groupRef} scale={1.2}>
      {/* Main Container Box */}
      <mesh ref={containerRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial
          color="#10b981"
          metalness={0.6}
          roughness={0.3}
          emissive="#047857"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cloud Infrastructure */}
      <mesh ref={cloudRef} position={[2.5, 1, 0.5]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.6}
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Additional cloud parts */}
      <mesh position={[3, 0.6, 0.3]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} />
      </mesh>

      <mesh position={[2, 1.3, 0.7]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Server Cylinder */}
      <mesh ref={serverRef} position={[-2.5, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
        <meshStandardMaterial
          color="#34d399"
          metalness={0.6}
          roughness={0.3}
          emissive="#059669"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Pipeline connections */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 16]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.1} />
      </mesh>

      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 16]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Kubernetes pods (small cubes) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 1.5,
            Math.sin((i / 6) * Math.PI * 2) * 0.5,
            Math.sin((i / 6) * Math.PI * 2) * 1.5,
          ]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#22c55e" : "#16a34a"}
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Data flow particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`particle-${i}`}
          position={[
            Math.cos((Date.now() * 0.001 + i) * 0.5) * 2,
            Math.sin((Date.now() * 0.001 + i) * 0.3) * 0.5,
            Math.cos((Date.now() * 0.001 + i) * 0.7) * 1,
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#fcd34d"
            metalness={0.8}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3DDevOps() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#06b6d4"
        />
        <DevOpsInfrastructure />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
