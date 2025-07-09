import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { projects } from '../constants';
import { Project } from '../types';

const fadeIn = (direction: 'up' | 'down', delay: number): Variants => ({
    hidden: { y: direction === 'up' ? 50 : -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1, delay, ease: 'easeOut' } },
});

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M15.64,10.36,18.7,7.3a4.24,4.24,0,0,0-6-6L9.62,4.38a4.24,4.24,0,0,0,6,6ZM14.22,9.62a1,1,0,0,0-1.41,0L10.36,12.07a1,1,0,0,0,0,1.41,4.22,4.22,0,0,0,3,1.24,4.3,4.3,0,0,0,3-1.24,1,1,0,0,0,0-1.41ZM8.36,13.64,5.3,16.7A4.24,4.24,0,0,0,11.27,22l3.07-3.07a4.24,4.24,0,0,0-6-6Z"></path></svg>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn("up", index * 0.2)}
    >
        <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#100d25]/50 p-5 rounded-2xl sm:w-[360px] w-full transform transition-transform duration-300 group relative backdrop-blur-sm border border-gray-800"
        >
            <div className="aurora-border"></div>
            <div className="relative w-full h-[230px]">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-2xl absolute inset-0 transition-opacity duration-300 group-hover:opacity-10"
                />
                {project.video_snippet_url && (
                <video
                    src={project.video_snippet_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                )}

                <div className="absolute top-3 right-3 flex gap-2 z-10">
                    {project.live_demo_link && (
                        <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-cyan-500 transition-colors">
                            <LinkIcon />
                        </a>
                    )}
                    <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-cyan-500 transition-colors">
                        <GithubIcon />
                    </a>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-gray-400 text-[14px]">{project.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                </p>
                ))}
            </div>
        </motion.div>
    </motion.div>
  );
};

const FeaturedWorks: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-24 px-6 sm:px-16">
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn("up", 0.1)} 
            className="text-center"
        >
            <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">My work</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
            </h2>
        </motion.div>
        <div className="w-full flex justify-center">
            <motion.p 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn("up", 0.2)}
                className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px] text-center"
            >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. It reflects my ability to
            solve complex problems, work with different technologies, and manage
            projects effectively.
            </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    </section>
  );
};

export default FeaturedWorks;