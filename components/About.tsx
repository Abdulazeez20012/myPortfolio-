import React from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => ({
    hidden: { 
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0 
    },
    show: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', duration: 1.2, delay, ease: 'easeOut' } },
});

const About: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-16">
        <div className="max-w-4xl w-full">
            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn("up", 0.1)}
            >
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                Overview.
                </h2>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-12">
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn("right", 0.3)}
                    className="flex-shrink-0"
                >
                <img 
                    src="https://res.cloudinary.com/dwiewdn6f/image/upload/v1752083091/WhatsApp_Image_2025-05-29_at_17.32.36_f31078a6_bvbakb.jpg" 
                    alt="Abdul Azeez Muhammad" 
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/20"
                />
                </motion.div>
                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn("left", 0.3)}
                    className="text-gray-300 text-[17px] leading-[30px] max-w-xl text-center md:text-left"
                >
                    I'm a passionate and skilled software engineer with 1.5 years of professional experience, focusing on creating beautiful and functional web applications. 
                    I have a strong foundation in frontend technologies and a love for bringing ideas to life, from concept to deployment. 
                    I'm a quick learner and thrive on collaborating with teams to build efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to build something amazing!
                </motion.p>
            </div>
      </div>
    </section>
  );
};

export default About;