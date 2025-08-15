"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero3DDeveloper from "./Hero3DDeveloper";
import Hero3DDevOps from "./Hero3DDevOps";
import { useModeStore } from "@/lib/modeStore";
import { heroCopy } from "@/lib/data";
import { 
  
  Sparkles, 
  ExternalLink, 
  Mail, 
  ChevronDown, 
  Download, 
  ArrowDown, 
  Code2, 
  Cog,
  Server,
  Cloud,
 
  Star,
  
} from "lucide-react";
import { Section } from "./Section";

export default function Hero() {
  const mode = useModeStore(s => s.mode);
  const copy = heroCopy(mode);
  const [showMore, setShowMore] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const titlesDeveloper = [
    "Full Stack Developer",
    "Frontend Specialist", 
    "React Expert",
    "UI/UX Enthusiast"
  ];

  const titlesDevOps = [
    "DevOps Engineer",
    "Cloud Infrastructure Specialist",
    "Automation Expert",
    "Continuous Integration Specialist"
  ];

  // Typing animation effect
  useEffect(() => {
    const titles = mode === "developer" ? titlesDeveloper : titlesDevOps;
    const currentTitle = titles[currentIndex];
    let index = 0;

    const timer = setInterval(() => {
      if (index <= currentTitle.length) {
        setTypedText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, mode]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const statsDeveloper = [
    { label: "Projects", value: "50+" },
    { label: "Experience", value: "3+ Years" },
    { label: "Happy Clients", value: "25+" },
    { label: "Success Rate", value: "98%" }
  ];

  const statsDevOps = [
    { label: "Servers Managed", value: "50+" },
    { label: "Automation", value: "80%" },
    { label: "Uptime", value: "99.9%" },
    { label: "Deployments", value: "1000+" }
  ];

  const stats = mode === "developer" ? statsDeveloper : statsDevOps;

  return (
    <Section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Mode-Specific Gradients */}
      <div className="absolute inset-0 -z-10">
        {mode === "developer" ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -right-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-purple-400/20 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-400/10 blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900/20" />
            <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-green-500/30 to-lime-400/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -right-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-500/20 to-green-400/20 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-emerald-500/10 to-cyan-400/10 blur-3xl" />
          </>
        )}
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-20 lg:pt-0">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mt-2"
            >
              {mode === "developer" ? <Code2 className="h-4 w-4 text-blue-400" /> : <Cog className="h-4 w-4 text-green-400" />}
              <span className="text-sm font-medium text-white/90">
                {mode === "developer" ? "Full Stack Developer" : "DevOps Engineer"}
              </span>
              <div className={`h-2 w-2 rounded-full animate-pulse ${mode === "developer" ? "bg-blue-400" : "bg-green-400"}`} />
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className={`block bg-clip-text text-transparent ${
                  mode === "developer" 
                    ? "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
                    : "bg-gradient-to-r from-green-400 via-lime-500 to-cyan-400"
                }`}>
                  Satyam Maurya
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/80 h-12"
              >
                <span className={mode === "developer" ? "text-blue-400" : "text-green-400"}>I'm a </span>
                <span className="text-white">{typedText}</span>
                <span className={`animate-pulse ${mode === "developer" ? "text-blue-400" : "text-green-400"}`}>|</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              {mode === "developer" 
                ? "I specialize in building modern, responsive, and interactive web applications with a focus on performance, accessibility, and user experience."
                : "I design and maintain scalable cloud infrastructure, focusing on automation, container orchestration, and CI/CD pipelines that ensure reliable deployments."
              }
            </motion.p>

            {/* Expandable Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-2xl"
            >
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-white/60 leading-relaxed">
                    {mode === "developer"
                      ? "My expertise spans across React, Next.js, TypeScript, and modern CSS frameworks. I focus on creating seamless user experiences with clean, maintainable code."
                      : "I work with Docker, Kubernetes, AWS, and various automation tools to streamline development workflows and ensure high availability of applications in production environments."
                    }
                  </p>
                  
                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2">
                    {mode === "developer" 
                      ? ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                            {skill}
                          </span>
                        ))
                      : ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                            {skill}
                          </span>
                        ))
                    }
                  </div>
                </motion.div>
              )}
              
              <button
                onClick={() => setShowMore(!showMore)}
                className={`mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group ${
                  mode === "developer" ? "text-blue-400 hover:text-blue-300" : "text-green-400 hover:text-green-300"
                }`}
              >
                {showMore ? "Show Less" : "Learn More About Me"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 ${showMore ? "rotate-180" : ""}`} />
              </button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform ${
                  mode === "developer"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    : "bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white"
                }`}
              >
                <span>{mode === "developer" ? "View My Work" : " DevOps Projects"}</span>
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>{mode === "developer" ? "Let's Talk" : "Get In Touch"}</span>
              </a>

              <a
                href={mode === "developer" ? "/resume.pdf" : "/resume-devops.pdf"}
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30"
              >
                <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
                <span className="hidden sm:inline">Resume</span>
                <span className="sm:hidden">CV</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4  mb-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 ${mode === "developer" ? "text-white" : "text-green-400"}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            
          </div>

          {/* Right Content - 3D Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px]">
              {/* Mode-Specific 3D Component */}
              {mode === "developer" ? <Hero3DDeveloper /> : <Hero3DDevOps />}
              
              {/* Interactive Badge */}
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                  <Sparkles className={`h-4 w-4 animate-pulse ${mode === "developer" ? "text-blue-300" : "text-green-300"}`} />
                  <span className="text-xs font-medium text-white/80">
                    {mode === "developer" ? "Interactive 3D" : "DevOps 3D Loop"}
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-4 lg:-left-8 animate-bounce">
                <div className={`p-4 backdrop-blur-sm rounded-xl border border-white/20 ${
                  mode === "developer"
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-r from-green-500/20 to-cyan-500/20"
                }`}>
                  {mode === "developer" ? (
                    <Code2 className="h-6 w-6 text-blue-400" />
                  ) : (
                    <Server className="h-6 w-6 text-green-400" />
                  )}
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-4 lg:-right-8 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className={`p-4 backdrop-blur-sm rounded-xl border border-white/20 ${
                  mode === "developer" 
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                    : "bg-gradient-to-r from-cyan-500/20 to-green-500/20"
                }`}>
                  {mode === "developer" ? (
                    <Star className="h-6 w-6 text-purple-400" />
                  ) : (
                    <Cloud className="h-6 w-6 text-cyan-400" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToProjects}
            className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
            aria-label="Scroll to projects"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="p-2 border-2 border-white/20 rounded-full group-hover:border-white/40 transition-colors duration-300">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
