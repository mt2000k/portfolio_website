"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

function AnimatedSphere() {
    const { theme } = useTheme();
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    const color = theme === "dark" ? "#3b82f6" : "#60a5fa"; // Tailwind blue-500 or blue-400
    const emissive = theme === "dark" ? "#1e3a8a" : "#93c5fd"; // Tailwind blue-900 or blue-300

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.2}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                emissive={emissive}
                emissiveIntensity={0.5}
            />
        </Sphere>
    );
}

export function CanvasModel() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
