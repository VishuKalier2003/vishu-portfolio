// components/ThreeScene.js
import { useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying float vPositionY;
  void main() {
    vUv = uv;
    vPositionY = position.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vPositionY;
  uniform float time;
  uniform float waterLevel;
  
  void main() {
    vec2 uv = vUv;
    float wave = sin(uv.y * 10.0 + time) * 0.1;
    vec3 color = vec3(0.0, 0.5 + wave, 1.0);

    // Blend color based on water level
    if (vPositionY < waterLevel) {
      color = mix(color, vec3(0.0, 0.2, 0.8), (waterLevel - vPositionY) / 2.0);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

const ThreeScene = ({ containerRef }) => {
  useEffect(() => {
    // Ensure containerRef is set
    if (!containerRef.current) return;

    // Get container dimensions
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ensure transparency
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Function to create an icosahedron with fluid effect
    const createIcosahedronWithFluid = (size, position) => {
      const geometry = new THREE.IcosahedronGeometry(size, 0);
      
      // Shader material for the fluid effect
      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 },
          waterLevel: { value: size * 0.7 } // 70% water level
        }
      });

      const icosahedron = new THREE.Mesh(geometry, shaderMaterial);
      icosahedron.position.set(position.x, position.y, position.z);
      const edges = new THREE.EdgesGeometry(geometry);
      const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x0f0f0f40, linewidth: 2 });
      const outline = new THREE.LineSegments(edges, outlineMaterial);
      icosahedron.add(outline);

      return icosahedron;
    };

    // Create and add the icosahedron with fluid effect
    const size = 5; // Size of the icosahedron
    const position = {
      x: 0, // x position
      y: 0, // y position
      z: 0  // z position
    };
    const icosahedron = createIcosahedronWithFluid(size, position);
    scene.add(icosahedron);

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update shader time uniform
      icosahedron.material.uniforms.time.value += 0.01;

      // Rotate the icosahedron
      icosahedron.rotation.x += 0.01;
      icosahedron.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef]);

  // Render to the container
  return <div ref={containerRef}  />;
};

export default ThreeScene;
