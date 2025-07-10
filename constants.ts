import { NavLink, Project } from './types';

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const placeholderVideo = 'https://res.cloudinary.com/dwiewdn6f/video/upload/v1752085187/101347-video-720_ltjzcf.mp4';

export const projects: Project[] = [
  {
    id: "project-1",
    name: "3D Solar System",
    description:
      "An interactive 3D model of our solar system built with Three.js and React. Users can explore planets, view their orbits, and learn interesting facts. Features realistic lighting and textures.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "threejs",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/solarsystem/500/300",
    video_snippet_url: placeholderVideo,
    source_code_link: "https://github.com/",
    live_demo_link: "#",
  },
  {
    id: "project-2",
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce website for fashion apparel. Includes product listings, a shopping cart, user authentication, and a checkout process, built with a modern frontend stack.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/ecommerce/500/300",
    video_snippet_url: placeholderVideo,
    source_code_link: "https://github.com/",
  },
  {
    id: "project-3",
    name: "AI Prompt Sharing App",
    description:
      "A platform for users to discover, create, and share creative AI prompts. Features a sleek interface, user profiles, and the ability to copy prompts with a single click. Optimized for SEO.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "tailwindcss",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/aiprompt/500/300",
    video_snippet_url: placeholderVideo,
    source_code_link: "https://github.com/Abdulazeez20012/PromptVerse",
    live_demo_link: "#",
  },
];

export const technologies = [
    { name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" },
    { name: "TypeScript" }, { name: "React JS" }, { name: "Next.js" },
    { name: "Three JS" }, { name: "Tailwind CSS" }, { name: "Framer Motion" },
    { name: "Node JS" }, { name: "MongoDB" }, { name: "Git" }
];
