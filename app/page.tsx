"use client";
import type { IconType } from "react-icons";
import type React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Instagram,
  Music,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Database,
  Server,
  Palette,
  Zap,
  ArrowRight,
  Download,
  Eye,
  X,
  Send,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DiAndroid, DiJava } from "react-icons/di";
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiAndroid,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiSpringboot,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiTailwindcss,
  SiGithub as SiGithubIcon,
  SiFramer,
  SiAmazonwebservices,
  SiShadcnui,
  SiSpotify,
} from "react-icons/si";
import { title } from "process";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-orange-500/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Animated background grid
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// Hero section
const HeroSection = ({
  setShowForm,
}: {
  setShowForm: (show: boolean) => void;
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Socials array with correct typing
  const socials: {
    icon: IconType | LucideIcon;
    href: string;
    color: string;
    type?: string;
  }[] = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akshat-rai-shriv/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      href: "https://github.com/AkshatRaiShrivastava",
      color: "hover:text-gray-300",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/build.gradle.akshat",
      color: "hover:text-pink-500",
    },
    {
      icon: SiSpotify,
      href: "https://open.spotify.com/user/314erlctyhbs62oppjaotxq57y3m",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      href: "mailto:shrivastavak2005@gmail.com",
      color: "hover:text-orange-500",
      type: "mailto",
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between px-8 lg:px-16 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Hero Text */}
      <div className="flex-1 z-10 order-2 lg:order-1 w-full">
        {/* ...existing text content... */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Hi, I am
          </motion.h1>
          <motion.h2
            className="text-6xl lg:text-8xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Akshat Rai
          </motion.h2>
          <motion.p
            className="text-xl lg:text-2xl text-orange-500 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Full-Stack Developer and Android Enthusiast
          </motion.p>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            I am a passionate and dedicated professional with a strong
            background in Mobile App Developmment.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 items-center rounded-full">
              <a
                href="/assets/Akshat_Rai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full"
            >
              <a href="#projects">
                <Eye className="w-4 h-4 mr-2" />
                View Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full mb-8 lg:mb-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl opacity-20 absolute inset-0"></div>
          <Image
            src="/assets/akshat_1.jpg"
            alt="Akshat Rai Avatar"
            width={400}
            height={400}
            className="relative z-10 drop-shadow-2xl w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        {socials.map((social, index) => {
          const Icon = social.icon as React.ElementType;
          return (
            <motion.button
              key={index}
              onClick={() => {
                if (social.type === "mailto") {
                  window.location.href = social.href;
                  return;
                }
                window.open(social.href, "_blank");
              }}
              className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              {Icon ? <Icon className="w-5 h-5" /> : null}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

// Experience section
const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // removed once: true

  const experiences = [
    {
      title: "Co-Founder",
      company: "NexYug Tech",
      period: "Feb 2025 - Present",
      description:
        "Building NexYug Tech, a startup where we create cutting-edge software solutions for web, mobile, and AI applications that transform businesses and drive innovation.",
      technologies: [
        "Android",
        "Web",
        "AI",
        "Desktop",
        "iOS",
      ],
    },
    {
      title: "Mobile App Developer",
      company: "Social Chitra",
      period: "June 2025 - Sep 2025",
      description: "Developing a SaaS platform for sports industry",
      technologies: ["Flutter", "Dart", "Android", "iOS", "Firebase", "Nodejs"],
    },
    {
      title: "Flutter Developer",
      company: "The Coders Hub",
      period: "Feb 2025 - May 2025",
      description:
        "Worked on a community app where people can connect and share their thoughts. Added multilingual feature, added chat notification based app routing, optimised AGP.",
      technologies: ["Flutter", "Dart", "Firebase", "Android", "FCM", "AGP"],
    },
    {
      title: "Software Developer",
      company: "M V Multitech Controls",
      period: "Mar 2022 - Present",
      description:
        "Built their website, worked on many industrial projects including Robotic machines, SCADA Applications, PLC programming, and micro-controllers' projects.",
      technologies: [
        "C#",
        ".NET",
        "SQL",
        "Java",
        "Javascript",
        "HTML",
        "CSS",
        "Robotics",
        "C++",
        "PLC",
        "TCPIP",
        "Modbus",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }} // removed once: true
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-orange-500 text-lg font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-orange-500 text-orange-500 w-fit"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(249, 115, 22, 0.3)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Projects section
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // removed once: true

  const projects = [
    {
      title:"SPM Android App",
      description:"An Android application demonstrating a full-stack, real-time data synchronization pipeline. Data flows seamlessly from a PostgreSQL database through a Spring Boot backend via WebSockets to a native Android UI built with Jetpack Compose.",
      image:"/assets/pr10.png",
      technologies:["Kotlin", "Web Sockets", "PostgreSQL", "Android"],
      github:"https://github.com/AkshatRaiShrivastava/spm-android",
      demo:"https://github.com/AkshatRaiShrivastava/spm-android/releases/tag/app",
      period:"Nov 2025 - Dec 2025"
    },
    {
      title:"SPM Spring Backend",
      description:"A production-ready microservice designed for real-time industrial machine data monitoring. It leverages PostgreSQL's LISTEN/NOTIFY mechanism to push database changes instantly to connected clients via WebSockets, eliminating the need for polling and ensuring minimal latency.",
      image:"/assets/pr11.png",
      technologies:["Java", "Spring Boot","Web Socket", "PostgreSQL","Maven"],
      github:"https://github.com/AkshatRaiShrivastava/spm-backend",
      period:"Nov 2025 - Dec 2025"
    },
    {
      title: "Clean City App",
      description:
        "CleanCity is a tech-driven platform that empowers citizens to report and track urban sanitation issues in real-time. It bridges the gap between communities and authorities to create cleaner, smarter, and more sustainable cities.",
      image: "/assets/pr7.png",
      technologies: ["Flutter", "Firebase", "Dart", "Android", "Cloudinary"],
      github: "https://github.com/AkshatRaiShrivastava/clean-city-mobile-app",
      demo: "#",
      period: "Apr 2025 - Present",
    },
    {
      title: "Wee Wear",
      description:
        "A clothing app which shows the latest and trendy clothing styles and wears.",
      image: "/assets/pr5.png",
      technologies: [
        "Android",
        "Java",
        "XML",
        "Firebase",
        "Firestore",
        "Android Studio",
      ],
      github: "https://github.com/AkshatRaiShrivastava/wee-wear",
      demo: "https://github.com/AkshatRaiShrivastava/wee-wear/releases/tag/java",
      period: "Aug 2024 - Sept 2024",
    },
    {
      title: "Music Streaming App",
      description:
        "A music streaming app which fetches music from spotify track id and also syncs the lyrics.",
      image: "/assets/pr6.png",
      technologies: [
        "Flutter",
        "Dart",
        "Spotify",
        "Firebase",
        "MusixMatch API",
        "Android Studio",
      ],
      github:
        "https://github.com/AkshatRaiShrivastava/music-player-application-in-flutter",
      demo: "https://www.linkedin.com/posts/akshat-rai-shriv_flutter-spotify-firebase-activity-7237835306358427650-Ta6-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEclvrYBp50dAZywMd_m47NAlIhrbtOdp3M",
      period: "Oct 2024 - Nov 2024",
    },
    {
      title: "SCADA Application",
      description:
        "A desktop application which centralize and digitalise the data from various machines and work stations.",
      image: "/assets/pr9.png",
      technologies: ["C#", "Windows Development", "SQL", "Modbus", "TCP/IP"],

      period: "Mar 2023 - Jan 2024",
    },
    {
      title: "Jotify",
      description:
        "An online note taking app with offline caching capability, secure sign-in, and image uploading feature.",
      image: "/assets/pr2.png",
      technologies: ["Flutter", "Dart", "Firebase", "Cloudinary"],
      github: "https://github.com/AkshatRaiShrivastava/jotify",
      demo: "https://github.com/AkshatRaiShrivastava/jotify/releases/tag/v1.2.0",
      period: "Jan 2025 - Jan 2025",
    },
    {
      title: "Minimal Chat App",
      description:
        "Built a cross-platform Chatting App using Flutter and Firebase, leveraging real-time capabilities for a seamless messaging and video/voice call experience!",
      image: "/assets/pr4.png",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Cloudinary",
        "Provider",
        "Android",
      ],
      github: "https://github.com/AkshatRaiShrivastava/minimal-chat-app",
      demo: "https://www.linkedin.com/posts/akshat-rai-shriv_flutterdev-firebase-sideproject-activity-7282776501643526145-zCUa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEclvrYBp50dAZywMd_m47NAlIhrbtOdp3M",
      period: "Dec 2024 - Jan 2025",
    },
    {
      title: "Realtime Code Editor",
      description:
        "Online code editor on which the users can collaborate and code.",
      image: "/assets/pr3.png",
      technologies: ["React", "MongoDB", "Express", "Socket.IO", "Node.js"],
      github: "https://github.com/AkshatRaiShrivastava/realtime-code-editor",
      demo: "https://realtime-code-editor-omdg.onrender.com/",
      period: "Dec 2024 - Jan 2025",
    },
    {
      title: "Learning App UI",
      description: "UI of a learning app.",
      image: "/assets/pr1.png",
      technologies: ["Flutter", "Dart"],
      github: "https://github.com/AkshatRaiShrivastava/coding-juniors",
      demo: "#",
      period: "Sept 2024 - Oct 2024",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-20 px-8 lg:px-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.15 }} // removed once: true
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group"
            >
              <Card className="bg-gray-800/50  border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col h-full relative">
                  {/* Image and overlay */}
                  <div className="relative mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-100 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-lg"></div>
                    <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                      {project.period}
                    </Badge>
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies used */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Technologies section
const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // removed once: true

  // Explicitly type icon as IconType
  const techStack: { name: string; icon: IconType; color: string }[] = [
    { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    { name: "Dart", icon: SiDart, color: "text-blue-600" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
    { name: "Java", icon: DiJava, color: "text-red-500" },
    { name: "Android", icon: SiAndroid, color: "text-green-400" },
    { name: "ReactJS", icon: SiReact, color: "text-blue-500" },
    { name: "React Native", icon: SiReact, color: "text-blue-500" },
    { name: "NodeJS", icon: SiNodedotjs, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  ];

  const services: { name: string; icon: IconType; color: string }[] = [
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "ShadCN UI", icon: SiShadcnui, color: "text-gray-400" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "GitHub", icon: SiGithubIcon, color: "text-gray-300" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
  ];

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Technologies
        </motion.h2>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold text-gray-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon as React.ElementType;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 p-6 text-center cursor-pointer">
                    {Icon ? (
                      <Icon
                        className={`w-8 h-8 mx-auto mb-3 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                    ) : null}
                    <p className="text-white font-medium group-hover:text-orange-500 transition-colors">
                      {tech.name}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-semibold text-gray-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Services and Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon as React.ElementType;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 p-6 text-center cursor-pointer">
                    {Icon ? (
                      <Icon
                        className={`w-8 h-8 mx-auto mb-3 ${service.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                    ) : null}
                    <p className="text-white font-medium group-hover:text-orange-500 transition-colors">
                      {service.name}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Contact section with form
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // removed once: true
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    setIsSubmitting(false);
    setShowForm(false);

    if (response.ok) {
      setPopup({ message: "Message sent successfully!", type: "success" });
    } else {
      setPopup({ message: "Failed to send message.", type: "error" });
    }
  };

  const contactOptions = [
    {
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akshat-rai-shriv/",
      color: "hover:border-blue-500 hover:text-blue-500",
      action: "external",
    },
    {
      title: "GitHub",
      description: "Follow me on GitHub",
      icon: Github,
      href: "https://github.com/AkshatRaiShrivastava",
      color: "hover:border-gray-300 hover:text-gray-300",
      action: "external",
    },
    {
      title: "Instagram",
      description: "Follow me on Instagram",
      icon: Instagram,
      href: "https://instagram.com/build.gradle.akshat",
      color: "hover:border-pink-500 hover:text-pink-500",
      action: "external",
    },
    {
      title: "Spotify",
      description: "Follow me on Spotify :)",
      icon: SiSpotify,
      href: "https://open.spotify.com/user/314erlctyhbs62oppjaotxq57y3m",
      color: "hover:border-green-500 hover:text-green-500",
      action: "external",
    },
    {
      title: "Message",
      description: "Send me a message directly",
      icon: Mail,
      href: "#",
      color: "hover:border-orange-500 hover:text-orange-500",
      action: "form",
    },
  ];

  const handleContactClick = (option: (typeof contactOptions)[0]) => {
    if (option.action === "form") {
      setShowForm(true);
    } else {
      window.open(option.href, "_blank");
    }
  };

  return (
    <>
      <section ref={ref} className="py-20 px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact
          </motion.h2>

          <motion.p
            className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contact me for potential projects and collaborations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
                onClick={() => handleContactClick(option)}
              >
                <Card
                  className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 transition-all duration-300 p-8 text-center h-full ${option.color}`}
                >
                  {(() => {
                    const Icon = option.icon as React.ElementType;
                    return Icon ? (
                      <Icon className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:scale-125 transition-all duration-300" />
                    ) : null;
                  })()}
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-current transition-colors
                    "
                  >
                    {option.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-current transition-colors">
                    {option.description}
                  </p>
                  <ArrowRight className="w-5 h-5 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateX: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-center text-sm">
                Or reach out to me directly at{" "}
                <a
                  href="mailto:akshat.rai@example.com"
                  className="text-orange-500 hover:underline"
                >
                  shrivastavak2005@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const AnimatedPopup = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 40, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className={`fixed top-8 left-1/2 z-[100] -translate-x-1/2 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3
      ${
        type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }
    `}
    role="alert"
  >
    {type === "success" ? (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )}
    <span>{message}</span>
    <button
      onClick={onClose}
      className="ml-4 text-white hover:text-gray-200 focus:outline-none"
      aria-label="Close"
    >
      <X className="w-5 h-5" />
    </button>
  </motion.div>
);

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-8 lg:px-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-white mb-4 md:mb-0"
        >
          Ar
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-center"
        >
          This website is open source on{" "}
          <a
            href="https://github.com/AkshatRaiShrivastava/akshat-portfolio-nextjs"
            className="text-orange-500 hover:underline"
          >
            GitHub
          </a>
        </motion.p>
      </div>
    </footer>
  );
};

// Main component
export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Pass setShowForm to HeroSection
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingParticles />
      <AnimatedGrid />
      
      <HeroSection setShowForm={setShowForm} />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
