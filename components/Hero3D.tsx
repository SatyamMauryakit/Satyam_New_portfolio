"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";

function SpinningKnot() {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t/2) * 0.6;
    ref.current.rotation.y += 0.01;
  });
  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.1, 0.36, 120, 16]} />
        <meshStandardMaterial color="#60a5fa" roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[420px] w-full">
      <Canvas camera={{ position: [0, 0, 4] }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Suspense fallback={<Html><div className="text-white">Loading…</div></Html>}>
          <SpinningKnot />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
    </div>
  );
}
