import React from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeInText = (delay: number): Variants => ({
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.25, delay } },
});

const Tech: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-16 text-center">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInText(0.1)}
        >
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">What I work with</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Tech Stack.
          </h2>
        </motion.div>
        <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInText(0.2)}
            className="mt-4 text-gray-300 text-[17px] leading-[30px]"
        >
            My toolkit is a curated collection of modern technologies that allow me to build performant, scalable, and visually stunning web applications. The orbiting technologies in the background represent the core of my development stack.
        </motion.p>
      </div>
    </section>
  );
};

export default Tech;