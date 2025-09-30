import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database, 
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.jpg";
import PROJECT_IMG_7 from "../assets/images/project-7.jpg";


export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600" },
            { name: "Next.js", level: 88, color: "bg-gray-800" },
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
            { name: "Framer Motion", level: 85, color: "bg-pink-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500" },
            { name: "Express.js", level: 88, color: "bg-gray-700" },
            { name: "Python", level: 85, color: "bg-yellow-500" },
            { name: "GraphQL", level: 80, color: "bg-pink-600" },
            { name: "REST APIs", level: 92, color: "bg-orange-500" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and Optimizing data storage",
        skills: [
            { name: "MongoDB", level: 88, color: "bg-green-600" },
            { name: "PostgreSQL", level: 85, color: "bg-blue-700" }, // fixed duplicate MongoDB
            { name: "Redis", level: 80, color: "bg-red-500" },
            { name: "Prisma", level: 82, color: "bg-indigo-600" },
            { name: "Firebase", level: 78, color: "bg-yellow-600" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 82, color: "bg-blue-600" },
            { name: "AWS", level: 78, color: "bg-orange-600" },
            { name: "Vercel", level: 90, color: "bg-gray-900" },
            { name: "Git", level: 95, color: "bg-orange-700" },
            { name: "CI/CD", level: 75, color: "bg-purple-600" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript", // fixed typo
    "HTML5",
    "CSS3",
    "Sass", // fixed casing
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

export const STATS = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100+", label: "Client Satisfaction" },
];

export const PROJECTS = [
   {
    id: 1,
    title: "Blog Website",
    description: "A full-stack blog platform with user authentication, rich text editor, categories, comments, and SEO optimization.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    liveUrl: "https://blog-website-frontend-plum.vercel.app/",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
   },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat application with websocket messaging, user presence, private/group chats, message history, typing indicators, and file/image sharing.",
    image: PROJECT_IMG_2,
    tags: ["React", "Socket.io", "Tailwind", "Node.js", "MongoDB"],
    liveUrl: "https://chat-app-frontend-red-two.vercel.app/",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
},

 {
    id: 3,
    title: "Weather App",
    description: "A real-time weather application using API integration to display live temperature, conditions, and time by district or location.",
    image: PROJECT_IMG_4,
    tags: ["React", "API", "Tailwind"],
    liveUrl: "https://jk18122002.github.io/Weather-Website/",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
},


    {
    id: 4,
    title: "Quiz App",
    description: "A responsive frontend quiz application with multiple-choice questions, score tracking, timer, and interactive animations.",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://quiz-app-eosin-seven-29.vercel.app/",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
    },
  {
    id: 5,
    title: "Automatic Password Generator",
    description: "A client-side automatic password generator with customizable length and character sets (uppercase, lowercase, numbers, symbols), strength meter, copy-to-clipboard, and entropy-based strength feedback.",
    image: PROJECT_IMG_5,
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://password-generator-hazel-xi.vercel.app/",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
},

    {
        id: 6,
        title: "Modern Website",
        description: "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory",
        image: PROJECT_IMG_6,
        tags: ["React", "Tailwind", "Node.js", "MongoDB"],
        liveUrl: "https://website-frontend-alpha.vercel.app/",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    // {
    //     id: 7,
    //     title: "E-Commerce Platform",
    //     description: "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory",
    //     image: PROJECT_IMG_7,
    //     tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    //     liveUrl: "#",
    //     githubUrl: "#",
    //     featured: false,
    //     category: "Web App",
    // },
];

export const JOURNEY_STEPS = [
    {
        year: "2022",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2023",
        title: "First Internship",
        company: "CDAC Noida",
        description: "Worked on real-world projects and gained hands-on experience in web development.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    // {
    //     year: "2023",
    //     title: "Computer Science Degree",
    //     company: "University",
    //     description: "Graduated with honours, specializing in web technologies and software engineering.",
    //     icon: GraduationCap,
    //     color: "bg-purple-500",
    // },
    {
        year: "2024",
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        description: "Promoted to Full Stack Developer. Built end-to-end applications using the MERN stack and mentored juniors.",
        icon: Rocket,
        color: "bg-orange-500",
    },
    {
        year: "2025",
        title: "Freelance & Open Source",
        company: "Independent",
        description: "Started freelancing and contributing to open-source projects.",
        icon: Award,
        color: "bg-pink-500",
    },
    // {
    //     year: "2025",
    //     title: "Senior Developer",
    //     company: "Present",
    //     description: "Currently building innovative solutions and exploring new technologies like AI integration and advanced computing.",
    //     icon: Zap,
    //     color: "bg-cyan-500",
    // },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://linkedin.com",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://twitter.com",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
    {
        name: "Mail",
        icon: Mail,
        url: "mailto:jk@example.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Bulandshahr, Uttar Pradesh",
    },
    {
        icon: Mail,
        label: "Email",
        value: "jk@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 (555) 123-4567",
    },
];
