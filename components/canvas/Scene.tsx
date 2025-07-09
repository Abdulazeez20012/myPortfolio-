import React, { useRef, useMemo } from 'react';
import type { ComponentProps } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { technologies } from '../../constants';
import * as maath from 'maath/random';

const TechIcon: React.FC<{ position: [number, number, number]; name: string }> = ({ position, name }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.5;
    ref.current.position.y = position[1] + Math.sin(t * 2 + position[0]) * 0.1;
  });

  return (
    <group position={position}>
      <Icosahedron ref={ref} args={[0.3, 1]}>
        <meshStandardMaterial color="#08f" roughness={0.5} metalness={0.8} />
      </Icosahedron>
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

type StarMaterialProps = ComponentProps<typeof MeshDistortMaterial>;

const StarCore: React.FC<{ material: StarMaterialProps }> = ({ material }) => {
  return (
    <Icosahedron args={[1.5, 4]}>
      <MeshDistortMaterial {...material} />
    </Icosahedron>
  )
}

const Scene: React.FC = () => {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null!);
  const star = useRef<THREE.Group>(null!);

  const techPositions = useMemo(() => {
    return maath.inSphere(new Float32Array(technologies.length * 3), { radius: 4.5 }) as Float32Array;
  }, []);

  const starMaterial = useMemo<StarMaterialProps>(() => ({
    color: new THREE.Color('#08f'),
    roughness: 0.1,
    metalness: 0.5,
    ior: 1.8,
    transmission: 1,
    thickness: 1.5,
    transparent: true,
    opacity: 0.8,
    distort: 0.4,
    speed: 2,
  }), []);


  useFrame((state, delta) => {
    // Animate group rotation based on scroll
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, (-scroll.offset * Math.PI * 2), 4, delta);
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, scroll.offset * 10, 4, delta);
    
    // Animate star core
    star.current.rotation.y += delta * 0.2;
    star.current.rotation.x += delta * 0.1;
    
    // Animate camera to follow a path
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, 2 * Math.sin(scroll.offset * Math.PI), 4, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8000ff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#0088ff" />

      <group ref={group}>
        <group ref={star}>
            <StarCore material={starMaterial}/>
        </group>
        
        {technologies.map((tech, i) => (
            <TechIcon key={tech.name} name={tech.name} position={[techPositions[i*3], techPositions[i*3+1], techPositions[i*3+2]]} />
        ))}
      </group>
      
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.8} />
      </EffectComposer>
    </>
  );
};

export default Scene;