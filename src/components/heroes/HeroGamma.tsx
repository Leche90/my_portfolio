'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGamma() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Central object — a wireframe torus knot, like an archived schematic
    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 200, 16);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0x0F0E0C,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    // A second, blood-colored, smaller version inside
    const innerGeo = new THREE.TorusKnotGeometry(1.4, 0.35, 100, 12);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xD9412A,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const innerKnot = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerKnot);

    // Floating dots — like notation in a manuscript
    const dotsGeo = new THREE.BufferGeometry();
    const dotsCount = 600;
    const positions = new Float32Array(dotsCount * 3);
    for (let i = 0; i < dotsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    dotsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dotsMat = new THREE.PointsMaterial({
      color: 0x0F0E0C,
      size: 0.025,
      transparent: true,
      opacity: 0.4,
    });
    const dots = new THREE.Points(dotsGeo, dotsMat);
    scene.add(dots);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationId: number;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!reduceMotion) {
        knot.rotation.x += 0.002;
        knot.rotation.y += 0.003;
        innerKnot.rotation.x -= 0.003;
        innerKnot.rotation.y -= 0.002;
        dots.rotation.y += 0.0004;

        // Smooth parallax
        targetX += (mouseX * 0.4 - targetX) * 0.04;
        targetY += (-mouseY * 0.4 - targetY) * 0.04;
        camera.position.x = targetX;
        camera.position.y = targetY;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      knotGeo.dispose();
      knotMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      dotsGeo.dispose();
      dotsMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-paper">
      {/* Three.js canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft vignette to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(242, 235, 219, 0.85) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        {/* Header strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-ink"
        >
          <div className="marginalia flex items-center gap-3">
            <span className="text-blood font-medium">ARCHIVE</span>
            <span className="text-ink-line">/</span>
            <span>Volume I · Folio 001</span>
          </div>
          <div className="marginalia">
            ◆ Open archive · Free to inspect ◆
          </div>
        </motion.div>

        {/* Main content centered, with the 3D scene behind */}
        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-32">
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="marginalia mb-6 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blood animate-pulse" />
              The personal archive of L. Leche
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-display font-light text-[clamp(3.5rem,12vw,12rem)] leading-[0.85] tracking-tightest text-ink"
            >
              Notes &amp;
              <br />
              <span className="font-serif italic font-light text-blood">
                schematics
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 max-w-2xl font-serif text-xl md:text-2xl text-ink-soft leading-relaxed"
            >
              An open archive of websites I've built, things I've learned,
              and projects in progress. Catalogued by{' '}
              <span className="font-display italic text-ink">
                Lanzema Leche
              </span>
              , web developer in Winnipeg.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cabinet"
                className="group inline-flex items-center gap-3 px-8 py-5 bg-ink text-paper font-mono text-meta uppercase tracking-wider-mono hover:bg-blood transition-all duration-300 ease-editorial"
              >
                Inspect the works
                <span className="group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
              <a
                href="#correspondence"
                className="group inline-flex items-center gap-3 px-8 py-5 border border-ink text-ink font-mono text-meta uppercase tracking-wider-mono hover:bg-ink hover:text-paper transition-all duration-300"
              >
                Begin a commission
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-32 pt-6 border-t border-ink grid grid-cols-12 gap-6"
        >
          <div className="col-span-6 md:col-span-3">
            <div className="marginalia mb-1">Coordinates</div>
            <div className="font-mono text-meta">49.8951°N · 97.1384°W</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="marginalia mb-1">Established</div>
            <div className="font-mono text-meta">MMXXIV · Anno Domini</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="marginalia mb-1">Trade</div>
            <div className="font-mono text-meta">Web · Front-end</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="marginalia mb-1">Status</div>
            <div className="font-mono text-meta text-blood">
              ● Open for work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
