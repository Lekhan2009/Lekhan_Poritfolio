// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threads,
  youtube,
  snappy,
  typescript,
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Lekhan Poluri";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/Lekhan2009",
};

// experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "",
    points: [
      "Building dynamic and interactive user interfaces with React.js.",
      "Optimizing application performance and improving loading times.",
      "Ensuring mobile responsiveness and smooth user experiences.",
      "Writing clean, maintainable, and efficient code with best practices.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "",
    points: [
      "Developing cross-platform mobile applications using React Native.",
      "Integrating APIs and third-party libraries for enhanced functionality.",
      "Debugging and fixing performance issues for smooth user experience.",
      "Collaborating with designers to implement intuitive UI components.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "",
    points: [
      "Creating responsive and feature-rich eCommerce platforms.",
      "Implementing SEO best practices for better search rankings.",
      "Enhancing website security and data protection measures.",
      "Optimizing website speed and ensuring seamless navigation.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "",
    points: [
      "Developing scalable web applications with both frontend and backend technologies.",
      "Managing databases and ensuring efficient data storage solutions.",
      "Integrating real-time functionalities and authentication systems.",
      "Writing clean, modular, and reusable code for long-term maintainability.",
    ],
  },
];

// projects
export const PROJECTS = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Modern UI/UX YouTube Clone",
    description:
      "Explore my React.js-based YouTube clone, powered by Rapid API. Seamlessly navigate, search, and enjoy dynamic video content with a sleek and intuitive design.",
    link: "#",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "UniSearch",
    description:
      'UniSearch is an advanced search platform that aggregates results from education, shopping, AI tools, news, games, and food. It provides fast, accurate, and visually stunning results by fetching data from multiple sources. UniSearch simplifies information access, ensuring users find what they need effortlessly, all in one place.',
    link: "https://unisearch.free.nf/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Blog",
    description:
      "Blog app offers up-to-date, complete programming courses for free, making learning accessible to everyone. With a modern UI, smooth navigation, and Firebase notifications, users stay updated with new content.",
    link: "https://thinkunlimitedyt.blogspot.com/",
  },
  {
    iconUrl: snappy,
    theme: "btn-back-pink",
    name: "Online Chat Application",
    description:
      "Experience my chat app, built on React.js, Socket.io, and MongoDB. Enjoy seamless communication with a sleek design for an intuitive and engaging messaging experience.",
    link: "#",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Portfolio",
    description:
      "Embark on an interstellar journey with my Portfolio, a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.",
    link: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "#",
  },
];
