import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Preload } from '@react-three/drei';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWorks from './components/FeaturedWorks';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Scene from './components/canvas/Scene';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2}>
            <Scene />
          </ScrollControls>
          <Preload all />
        </Suspense>
      </Canvas>

      <main className="relative z-10 scrollbar-hide">
        <div style={{ height: '100vh' }}>
          <Hero />
        </div>
        <div id="about" style={{ height: '100vh' }}>
          <About />
        </div>
        <div id="work" style={{ minHeight: '100vh', paddingBottom: '10rem' }}>
          <FeaturedWorks />
        </div>
        <div id="tech" style={{ height: '100vh' }}>
          <Tech />
        </div>
        <div id="contact" style={{ height: '100vh' }}>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;
