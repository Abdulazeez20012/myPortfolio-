import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const main = document.querySelector('main');
    const aboutSection = document.getElementById('about');
    if (main && aboutSection) {
        main.scrollTo({
            top: aboutSection.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="relative w-full h-full mx-auto flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#08f]" />
          <div className="w-1 sm:h-80 h-40" style={{ background: 'linear-gradient(to bottom, #08f, transparent)'}} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#08f]">Abdul Azeez</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I craft immersive 3D visuals, intuitive <br className="sm:block hidden" />
            user interfaces, and robust web applications.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-16 w-full flex justify-center items-center">
        <button onClick={handleScrollDown} aria-label="Scroll down">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-gray-400 flex justify-center items-start p-2 hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-gray-400"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;