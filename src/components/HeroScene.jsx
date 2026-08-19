import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Background Particle Field
function ParticleField({ count = 120, isMobile = false }) {
  const pointsRef = useRef();
  const particleCount = isMobile ? 45 : count;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    // Palette: Soft Purples, Cyans, and White
    const palette = [
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#612D92'),
      new THREE.Color('#38BDF8'),
      new THREE.Color('#A78BFA'),
      new THREE.Color('#C4B5FD'),
    ];

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t * 0.3;
    pointsRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.07 : 0.09}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Orbiting Concept Node Component
function OrbitNode({ label, color, radius, speed, offsetAngle, yOffset, tilt = [0, 0, 0], isMobile }) {
  const nodeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!nodeRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offsetAngle;
    
    const rawX = Math.cos(t) * radius;
    const rawZ = Math.sin(t) * radius;
    const rawY = Math.sin(t * 1.5) * 0.3 + yOffset;

    nodeRef.current.position.set(rawX, rawY, rawZ);

    const targetScale = hovered ? 1.35 : 1.0;
    nodeRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group rotation={tilt}>
      {/* Orbital Guideline Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.015, radius + 0.015, 64]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.12} 
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* Orbiting Node Body */}
      <group ref={nodeRef}>
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[isMobile ? 0.18 : 0.22, 24, 24]} />
          <meshPhysicalMaterial
            color={hovered ? '#FFFFFF' : color}
            emissive={color}
            emissiveIntensity={hovered ? 1.4 : 0.6}
            roughness={0.15}
            metalness={0.7}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Glow halo around node */}
        <mesh scale={hovered ? 1.8 : 1.4}>
          <sphereGeometry args={[isMobile ? 0.18 : 0.22, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.35 : 0.15}
          />
        </mesh>

        {/* Micro HTML Label on hover or desktop */}
        <Html
          position={[0, 0.35, 0]}
          center
          distanceFactor={9}
          style={{
            pointerEvents: 'none',
            transition: 'all 0.2s ease',
            opacity: hovered ? 1 : 0.85,
            transform: hovered ? 'scale(1.1)' : 'scale(0.95)',
          }}
        >
          <div className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase whitespace-nowrap shadow-md select-none">
            <span style={{ color }}>● </span>{label}
          </div>
        </Html>
      </group>
    </group>
  );
}

// Learning Intelligence Core
function IntelligenceCore({ isMobile }) {
  const coreGroupRef = useRef();
  const innerRef = useRef();
  const outerGeodesicRef = useRef();
  const outerRingRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1.0 + Math.sin(t * 1.8) * 0.04;

    if (coreGroupRef.current) {
      coreGroupRef.current.rotation.y = t * 0.15 + state.pointer.x * 0.35;
      coreGroupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 - state.pointer.y * 0.25;
      coreGroupRef.current.position.y = Math.sin(t * 0.8) * 0.12;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.z = t * 0.2;
      innerRef.current.scale.set(pulse, pulse, pulse);
    }

    if (outerGeodesicRef.current) {
      outerGeodesicRef.current.rotation.x = t * 0.1;
      outerGeodesicRef.current.rotation.z = -t * 0.12;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.08;
    }
  });

  const baseScale = isMobile ? 0.8 : 1.0;

  return (
    <group ref={coreGroupRef} position={[0, 0.2, 0]} scale={[baseScale, baseScale, baseScale]}>
      {/* 1. Inner Luminous Core Sphere */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhysicalMaterial
          color="#8B5CF6"
          emissive="#612D92"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 2. Faceted Crystal Icosahedron Shell */}
      <mesh>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshPhysicalMaterial
          color="#4C1D95"
          emissive="#612D92"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.6}
          transmission={0.4}
          thickness={0.8}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </mesh>

      {/* 3. Outer Geodesic Wireframe Lattice */}
      <mesh ref={outerGeodesicRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#C084FC"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* 4. Equatorial Holographic Gyro Rings */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.45, 0.012, 16, 64]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[1.6, 0.01, 16, 64]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.25} />
        </mesh>
      </group>

      {/* Central Core Point Light */}
      <pointLight color="#C084FC" intensity={2.5} distance={6} decay={2} />
    </group>
  );
}

// Scene Root with Damped Parallax Camera
function SceneContent({ isMobile }) {
  const groupRef = useRef();
  const [scale, setScale] = useState(0.85);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1.0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    const targetCamX = state.pointer.x * (isMobile ? 0.4 : 1.0);
    const targetCamY = (state.pointer.y * (isMobile ? 0.3 : 0.7)) + 0.2;

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetCamX, 3, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetCamY, 3, delta);
    state.camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3-Point Sophisticated Lighting */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[6, 8, 5]} intensity={1.2} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -4]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[0, -2, 3]} intensity={0.8} color="#38BDF8" />

      {/* Procedural Particle System */}
      <ParticleField isMobile={isMobile} count={140} />

      {/* Central Intelligence Core */}
      <IntelligenceCore isMobile={isMobile} />

      {/* Orbiting Concept Nodes */}
      <OrbitNode
        label="AI"
        color="#F472B6"
        radius={isMobile ? 2.2 : 2.7}
        speed={0.35}
        offsetAngle={0}
        yOffset={0.2}
        tilt={[0.2, 0.1, 0.1]}
        isMobile={isMobile}
      />
      <OrbitNode
        label="Python"
        color="#FBBF24"
        radius={isMobile ? 2.5 : 3.2}
        speed={0.25}
        offsetAngle={1.8}
        yOffset={-0.3}
        tilt={[-0.3, 0.4, -0.1]}
        isMobile={isMobile}
      />
      <OrbitNode
        label="Web Dev"
        color="#38BDF8"
        radius={isMobile ? 2.8 : 3.7}
        speed={0.3}
        offsetAngle={3.4}
        yOffset={0.4}
        tilt={[0.4, -0.2, 0.3]}
        isMobile={isMobile}
      />
      <OrbitNode
        label="Data"
        color="#A78BFA"
        radius={isMobile ? 3.1 : 4.2}
        speed={0.2}
        offsetAngle={4.9}
        yOffset={-0.2}
        tilt={[-0.2, -0.3, 0.2]}
        isMobile={isMobile}
      />
      <OrbitNode
        label="Cloud"
        color="#34D399"
        radius={isMobile ? 3.4 : 4.7}
        speed={0.28}
        offsetAngle={0.9}
        yOffset={0.1}
        tilt={[0.1, 0.5, -0.2]}
        isMobile={isMobile}
      />
      <OrbitNode
        label="Skills"
        color="#818CF8"
        radius={isMobile ? 3.7 : 5.2}
        speed={0.18}
        offsetAngle={2.6}
        yOffset={-0.5}
        tilt={[-0.4, 0.2, 0.4]}
        isMobile={isMobile}
      />
    </group>
  );
}

// Fallback CSS Graphic for non-WebGL devices or loading
function HeroSceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none opacity-40">
      <div className="relative w-72 h-72 rounded-full border border-purple-300/40 animate-pulse-glow flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-dashed border-[#8B5CF6]/50 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#612D92] to-[#8B5CF6] blur-sm opacity-80" />
      </div>
    </div>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 z-0">
        <HeroSceneFallback />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0.4, 7], fov: isMobile ? 55 : 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <React.Suspense fallback={null}>
          <SceneContent isMobile={isMobile} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
