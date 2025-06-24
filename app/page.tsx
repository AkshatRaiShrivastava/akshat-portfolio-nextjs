"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
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
  )
}

// Animated background grid
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

// Hero section
const HeroSection = ({ setShowForm }: { setShowForm: (show: boolean) => void }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.section
      className="min-h-screen flex items-center justify-between px-8 lg:px-16 relative overflow-hidden"
      style={{ y, opacity }}
    >
      <div className="flex-1 z-10">
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
            className="text-4xl lg:text-6xl font-bold mb-4 text-white"
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            I am a passionate and dedicated professional with a strong background in Java, Spring Boot, Android
            Development, Web Development and SCADA Development. With hands-on experience in TypeScript, Next.js, Spring
            Boot, Java, Kotlin, Flutter.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 flex justify-center items-center"
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
          <div className="w-80 h-80 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl opacity-20 absolute inset-0"></div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Akshat Rai Avatar"
            width={400}
            height={400}
            className="relative z-10 drop-shadow-2xl"
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
        {[
          { icon: Linkedin, href: "https://linkedin.com/in/akshat-rai", color: "hover:text-blue-500" },
          { icon: Github, href: "https://github.com/akshat-rai", color: "hover:text-gray-300" },
          { icon: Instagram, href: "https://instagram.com/akshat.rai", color: "hover:text-pink-500" },
          { icon: Music, href: "https://open.spotify.com/user/akshat-rai", color: "hover:text-green-500" },
          { icon: Mail, href: "#", color: "hover:text-orange-500", action: "form" },
        ].map((social, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (social.action === "form") {
                setShowForm(true)
              } else {
                window.open(social.href, "_blank")
              }
            }}
            className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  )
}

// Experience section
const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Ltd",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    },
    {
      title: "Android Developer",
      company: "Mobile Solutions Inc",
      period: "2022 - 2023",
      description:
        "Developed and maintained Android applications with over 100k+ downloads. Implemented modern Android architecture patterns and optimized app performance.",
      technologies: ["Kotlin", "Android", "Firebase", "MVVM", "Retrofit"],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description:
        "Built end-to-end web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    },
  ]

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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-orange-500 text-lg font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-orange-500 text-orange-500 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.3)" }}
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
  )
}

// Projects section
const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Wee Wear",
      description: "A clothing app which shows the latest and trendy clothing styles and wears.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Android", "Java", "XML", "Firebase", "Firestore", "Android Studio"],
      github: "#",
      demo: "#",
      period: "Aug 2024 - Sept 2024",
    },
    {
      title: "Music Stream",
      description:
        "A music streaming application which fetches songs, playlists and lyrics from the database, includes add to favourite option, secure firebase login, repeat songs.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Android", "Kotlin", "XML", "Firebase", "Firestore", "Android Studio"],
      github: "#",
      demo: "#",
      period: "Aug 2024 - Sept 2024",
    },
    {
      title: "SCADA Application",
      description:
        "A desktop application which centralise and digitalise the data from various machines and work stations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["C#", "Windows Development", "SQL", "Modbus", "TCP/IP"],
      demo: "#",
      period: "Mar 2023 - Jan 2024",
    },
    {
      title: "Jotify",
      description:
        "An online note taking app with offline caching capability, secure sign-in, and image uploading feature.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Dart", "Firebase", "Cloudinary"],
      github: "#",
      demo: "#",
      period: "Jan 2025 - Jan 2025",
    },
    {
      title: "Minimal Chat App",
      description:
        "Built a cross-platform Chatting App using Flutter and Firebase, leveraging real-time capabilities for a seamless messaging experience!",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Dart", "Firebase", "Cloudinary", "Provider", "Android"],
      github: "#",
      demo: "#",
      period: "Dec 2024 - Jan 2025",
    },
    {
      title: "Realtime Code Editor",
      description: "Online code editor on which the users can collaborate and code.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "MongoDB", "Express", "Socket.IO", "Node.js"],
      github: "#",
      demo: "#",
      period: "Dec 2024 - Jan 2025",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16 relative">
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
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group perspective-1000"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">{project.period}</Badge>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// Technologies section
const TechnologiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const techStack = [
    { name: "Java", icon: Code, color: "text-red-500" },
    { name: "ReactJS", icon: Globe, color: "text-blue-500" },
    { name: "Spring Boot", icon: Server, color: "text-green-500" },
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "Android", icon: Smartphone, color: "text-green-400" },
    { name: "Kotlin", icon: Code, color: "text-purple-500" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "Flutter", icon: Smartphone, color: "text-blue-400" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: "Dart", icon: Code, color: "text-blue-600" },
    { name: "NodeJS", icon: Server, color: "text-green-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-500" },
  ]

  const services = [
    { name: "Postman", icon: Zap, color: "text-orange-500" },
    { name: "Firebase", icon: Database, color: "text-yellow-500" },
    { name: "Netlify", icon: Globe, color: "text-teal-500" },
    { name: "Vercel", icon: Globe, color: "text-white" },
    { name: "ShadCN UI", icon: Palette, color: "text-gray-400" },
    { name: "AWS", icon: Server, color: "text-orange-600" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
    { name: "GitHub", icon: Github, color: "text-gray-300" },
    { name: "Framer Motion", icon: Zap, color: "text-pink-500" },
  ]

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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technologies
        </motion.h2>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold text-gray-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group"
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 p-6 text-center cursor-pointer">
                  <tech.icon
                    className={`w-8 h-8 mx-auto mb-3 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                  />
                  <p className="text-white font-medium group-hover:text-orange-500 transition-colors">{tech.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-semibold text-gray-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Services and Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="group"
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/50 transition-all duration-300 p-6 text-center cursor-pointer">
                  <service.icon
                    className={`w-8 h-8 mx-auto mb-3 ${service.color} group-hover:scale-125 transition-transform duration-300`}
                  />
                  <p className="text-white font-medium group-hover:text-orange-500 transition-colors">{service.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Contact section with form
const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form and close modal
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setShowForm(false)

    // You can replace this with actual form submission logic
    alert("Message sent successfully!")
  }

  const contactOptions = [
    {
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/akshat-rai",
      color: "hover:border-blue-500 hover:text-blue-500",
      action: "external",
    },
    {
      title: "GitHub",
      description: "Follow me on GitHub",
      icon: Github,
      href: "https://github.com/akshat-rai",
      color: "hover:border-gray-300 hover:text-gray-300",
      action: "external",
    },
    {
      title: "Instagram",
      description: "Follow me on Instagram",
      icon: Instagram,
      href: "https://instagram.com/akshat.rai",
      color: "hover:border-pink-500 hover:text-pink-500",
      action: "external",
    },
    {
      title: "Spotify",
      description: "Follow me on Spotify :)",
      icon: Music,
      href: "https://open.spotify.com/user/akshat-rai",
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
  ]

  const handleContactClick = (option: (typeof contactOptions)[0]) => {
    if (option.action === "form") {
      setShowForm(true)
    } else {
      window.open(option.href, "_blank")
    }
  }

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
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:scale-125 transition-all duration-300" />
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-current transition-colors
                    "
                  >
                    {option.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-current transition-colors">{option.description}</p>
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
            onClick={(e) => e.stopPropagation()}
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
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
                <a href="mailto:akshat.rai@example.com" className="text-orange-500 hover:underline">
                  akshat.rai@example.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

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
          <a href="#" className="text-orange-500 hover:underline">
            GitHub
          </a>
        </motion.p>
      </div>
    </footer>
  )
}

// Main component
export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
  )
}
