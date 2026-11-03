import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFCF9F2, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff7e6, 1.2);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xffb703, 2, 50);
    goldLight.position.set(0, 10, 15);
    scene.add(goldLight);

    // --- 1. Petal Geometry (Curved Oval Petal) ---
    function createPetalGeometry() {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.4, 0.6, 0.5, 1.4, 0, 2.0);
      shape.bezierCurveTo(-0.5, 1.4, -0.4, 0.6, 0, 0);

      const extrudeSettings = {
        depth: 0.05,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02
      };
      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geom.center();
      return geom;
    }

    const petalGeom = createPetalGeometry();

    // Marigold Petal Material (Deep orange & golden yellow)
    const marigoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xFB8500,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    // Jasmine Petal Material (Pearl White & soft cream)
    const jasmineMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFF0,
      roughness: 0.2,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    // Instanced Mesh for Marigold Petals (60 petals)
    const marigoldCount = 60;
    const marigoldMesh = new THREE.InstancedMesh(petalGeom, marigoldMaterial, marigoldCount);
    
    // Instanced Mesh for Jasmine Petals (60 petals)
    const jasmineCount = 60;
    const jasmineMesh = new THREE.InstancedMesh(petalGeom, jasmineMaterial, jasmineCount);

    const dummy = new THREE.Object3D();
    const petalData = [];

    // Initialize random positions, rotations, and fall speeds
    const initPetals = (count, isMarigold = true) => {
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 45;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 25;
        const scale = 0.4 + Math.random() * 0.4;

        dummy.position.set(x, y, z);
        dummy.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();

        if (isMarigold) {
          marigoldMesh.setMatrixAt(i, dummy.matrix);
        } else {
          jasmineMesh.setMatrixAt(i, dummy.matrix);
        }

        petalData.push({
          x,
          y,
          z,
          scale,
          rotX: Math.random() * Math.PI,
          rotY: Math.random() * Math.PI,
          rotZ: Math.random() * Math.PI,
          speedY: 0.015 + Math.random() * 0.025,
          speedRotX: (Math.random() - 0.5) * 0.02,
          speedRotY: (Math.random() - 0.5) * 0.02,
          swingAmp: 0.5 + Math.random() * 1.5,
          swingSpeed: 0.5 + Math.random() * 1.5,
          isMarigold,
          index: i
        });
      }
    };

    initPetals(marigoldCount, true);
    initPetals(jasmineCount, false);

    marigoldMesh.instanceMatrix.needsUpdate = true;
    jasmineMesh.instanceMatrix.needsUpdate = true;

    scene.add(marigoldMesh);
    scene.add(jasmineMesh);

    // --- 2. Golden Sparkle Dust Particles ---
    const dustCount = 200;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSpeeds = new Float32Array(dustCount);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 50;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      dustSpeeds[i] = 0.01 + Math.random() * 0.02;
    }

    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.18,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const dustParticles = new THREE.Points(dustGeom, dustMaterial);
    scene.add(dustParticles);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 2.5;
      camera.position.y = targetY * 1.5;
      camera.lookAt(0, 0, 0);

      // Light pulsing
      goldLight.intensity = 1.8 + Math.sin(elapsedTime * 2) * 0.4;

      // Update Petals
      petalData.forEach((p) => {
        p.y -= p.speedY;
        p.rotX += p.speedRotX;
        p.rotY += p.speedRotY;
        p.rotZ += 0.005;

        // Reset if fallen below view
        if (p.y < -22) {
          p.y = 22;
          p.x = (Math.random() - 0.5) * 45;
        }

        const swayX = p.x + Math.sin(elapsedTime * p.swingSpeed + p.y) * p.swingAmp * 0.2;

        dummy.position.set(swayX, p.y, p.z);
        dummy.rotation.set(p.rotX, p.rotY, p.rotZ);
        dummy.scale.set(p.scale, p.scale, p.scale);
        dummy.updateMatrix();

        if (p.isMarigold) {
          marigoldMesh.setMatrixAt(p.index, dummy.matrix);
        } else {
          jasmineMesh.setMatrixAt(p.index, dummy.matrix);
        }
      });

      marigoldMesh.instanceMatrix.needsUpdate = true;
      jasmineMesh.instanceMatrix.needsUpdate = true;

      // Update Golden Dust
      const positions = dustGeom.attributes.position.array;
      for (let i = 0; i < dustCount; i++) {
        positions[i * 3 + 1] -= dustSpeeds[i];
        if (positions[i * 3 + 1] < -22) {
          positions[i * 3 + 1] = 22;
        }
      }
      dustGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      petalGeom.dispose();
      marigoldMaterial.dispose();
      jasmineMaterial.dispose();
      dustGeom.dispose();
      dustMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
