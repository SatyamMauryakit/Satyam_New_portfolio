"use client";

import { useState } from "react";
import { useModeStore } from "@/lib/modeStore";
import { 
  Code2, 
  Cog, 
  Server, 
  Cloud, 
  Layout, 
  Terminal, 
  Database, 
  GitBranch, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  Monitor,
  Cpu,
  Award,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  SplitSquareHorizontal,
  ArrowLeftRight
} from "lucide-react";

export default function AboutSection() {
  const { mode, setMode } = useModeStore();
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const personalInfo = {
    name: "Satyam Maurya",
    location: "India",
    experience: "1 Years",
    projects: "50+ Projects",
    email: "sa9451736205@gmail.com"
  };

  const developerContent = {
    title: "Full Stack Developer",
    subtitle: "Frontend Specialist",
    description: "I specialize in building modern, responsive, and interactive web applications. My passion lies in crafting clean UI/UX with React, Next.js, and Tailwind CSS, ensuring every interface feels intuitive and engaging. I focus on creating seamless user experiences with performant, scalable code.",
    mainSkills: [
      { name: "React.js", icon: <Layout className="h-5 w-5" />, level: 95, color: "bg-blue-500" },
      { name: "Next.js", icon: <Terminal className="h-5 w-5" />, level: 90, color: "bg-gray-700" },
      { name: "Tailwind CSS", icon: <Code2 className="h-5 w-5" />, level: 95, color: "bg-cyan-500" },
      { name: "JavaScript", icon: <Code2 className="h-5 w-5" />, level: 92, color: "bg-yellow-500" },
    ],
    additionalSkills: [
      { name: "TypeScript", icon: <Code2 className="h-5 w-5" />, level: 88, color: "bg-blue-600" },
      { name: "Node.js", icon: <Server className="h-5 w-5" />, level: 85, color: "bg-green-600" },
      { name: "MongoDB", icon: <Database className="h-5 w-5" />, level: 80, color: "bg-green-500" },
      { name: "Git", icon: <GitBranch className="h-5 w-5" />, level: 90, color: "bg-orange-500" },
      { name: "Responsive Design", icon: <Smartphone className="h-5 w-5" />, level: 95, color: "bg-purple-500" },
      { name: "Performance Optimization", icon: <Zap className="h-5 w-5" />, level: 85, color: "bg-yellow-600" },
      { name: "Web APIs", icon: <Globe className="h-5 w-5" />, level: 82, color: "bg-indigo-500" },
      { name: "Testing", icon: <Shield className="h-5 w-5" />, level: 78, color: "bg-red-500" },
    ],
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "Tech Innovators LLC",
        duration: "2023 - Present",
        description: "Leading UI development for scalable web applications using React and Next.js. Improved application performance by 40% and user engagement by 25%.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        role: "Frontend Developer",
        company: "Digital Solutions Inc.",
        duration: "2022 - 2023",
        description: "Built responsive websites and web applications. Collaborated with design teams to implement pixel-perfect UIs.",
        technologies: ["React", "JavaScript", "CSS3", "HTML5"]
      }
    ],
    achievements: [
      "Built 10+ responsive web applications",
      "Improved app performance by 40% on average",
      "Led hackathon team of 4 developers",
      "Contributed to 10+ open source projects"
    ]
  };

  const devopsContent = {
    title: "DevOps Engineer",
    subtitle: "Cloud Infrastructure Specialist", 
    description: "I design and maintain scalable infrastructure, CI/CD pipelines, and cloud deployments. My goal is to automate workflows, ensure system reliability, and deliver software faster and more efficiently. I specialize in containerization, orchestration, and cloud-native architectures.",
    mainSkills: [
      { name: "Docker", icon: <Server className="h-5 w-5" />, level: 92, color: "bg-blue-600" },
      { name: "Kubernetes", icon: <Cpu className="h-5 w-5" />, level: 88, color: "bg-blue-700" },
      { name: "AWS", icon: <Cloud className="h-5 w-5" />, level: 90, color: "bg-orange-500" },
      { name: "CI/CD", icon: <Cog className="h-5 w-5" />, level: 95, color: "bg-green-600" },
    ],
    additionalSkills: [
      { name: "Terraform", icon: <Code2 className="h-5 w-5" />, level: 85, color: "bg-purple-600" },
      { name: "Jenkins", icon: <Cog className="h-5 w-5" />, level: 80, color: "bg-blue-500" },
      { name: "Monitoring", icon: <Monitor className="h-5 w-5" />, level: 88, color: "bg-green-500" },
      { name: "Linux", icon: <Terminal className="h-5 w-5" />, level: 90, color: "bg-gray-700" },
      { name: "Ansible", icon: <Server className="h-5 w-5" />, level: 82, color: "bg-red-600" },
      { name: "Prometheus", icon: <Database className="h-5 w-5" />, level: 78, color: "bg-orange-600" },
      { name: "GitLab CI", icon: <GitBranch className="h-5 w-5" />, level: 85, color: "bg-orange-500" },
      { name: "Security", icon: <Shield className="h-5 w-5" />, level: 80, color: "bg-red-500" },
    ],
    experience: [
      {
        role: "Senior DevOps Engineer",
        company: "CloudOps Solutions",
        duration: "2023 - Present", 
        description: "Architecting cloud-native infrastructures and automated CI/CD pipelines. Reduced deployment time by 60% and improved system reliability to 99.9%.",
        technologies: ["AWS", "Kubernetes", "Docker", "Terraform"]
      },
      {
        role: "DevOps Engineer",
        company: "InfraTech Systems",
        duration: "2022 - 2023",
        description: "Managed containerized applications and implemented monitoring solutions. Automated manual processes saving 20+ hours per week.",
        technologies: ["Docker", "Jenkins", "Ansible", "Linux"]
      }
    ],
    achievements: [
      "Managed 50+ production servers",
      "Reduced deployment time by 60%",
      "Achieved 99.9% system uptime",
      "Automated 80% of manual processes"
    ]
  };

  const content = mode === "developer" ? developerContent : devopsContent;
  const skillsToShow = showAllSkills 
    ? [...content.mainSkills, ...content.additionalSkills]
    : content.mainSkills;

  const SkillCard = ({ skill, index }) => (
    <div
      key={index}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              {skill.icon}
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
            {skill.name}
          </span>
          {skill.level && (
            <div className="mt-2 w-full">
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full transition-all duration-500 group-hover:scale-x-105`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-white/60 mt-1">{skill.level}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Mode Toggle */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          
          {/* Role Toggle Buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
              <button
                onClick={() => setMode("developer")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  mode === "developer"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <SplitSquareHorizontal className="h-4 w-4" />
                Full Stack Developer
              </button>
              <button
                onClick={() => setMode("devops")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  mode === "devops"
                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Cog className="h-4 w-4" />
                DevOps Engineer
              </button>
            </div>
          </div>

          {/* Quick Switch Button for Mobile */}
          <div className="sm:hidden mb-6">
            <button
              onClick={() => setMode(mode === "developer" ? "devops" : "developer")}
              className="flex items-center gap-2 mx-auto px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Switch to {mode === "developer" ? "DevOps" : "Developer"}
            </button>
          </div>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {mode === "developer" 
              ? "Passionate developer with a love for creating exceptional digital experiences"
              : "Infrastructure specialist focused on automation and scalable cloud solutions"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Personal Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className={`w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                  mode === "developer" 
                    ? "bg-gradient-to-br from-blue-500 to-purple-600" 
                    : "bg-gradient-to-br from-green-500 to-blue-600"
                }`}>
                  {mode === "developer" ? <Code2 className="h-12 w-12" /> : <Cog className="h-12 w-12" />}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold">{personalInfo.name}</h3>
                <p className={`font-semibold transition-colors duration-300 ${
                  mode === "developer" ? "text-blue-400" : "text-green-400"
                }`}>
                  {content.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                  <span className="text-white/80">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className={`h-5 w-5 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                  <span className="text-white/80">{personalInfo.experience} Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className={`h-5 w-5 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                  <span className="text-white/80">{personalInfo.projects} Completed</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${mode === "developer" ? "text-blue-400" : "text-green-400"}`}>
                      {mode === "developer" ? "10+" : "5+"}
                    </div>
                    <div className="text-xs text-white/60">
                      {mode === "developer" ? "Web Apps" : "Servers"}
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${mode === "developer" ? "text-blue-400" : "text-green-400"}`}>
                      {mode === "developer" ? "40%" : "60%"}
                    </div>
                    <div className="text-xs text-white/60">
                      {mode === "developer" ? "Performance" : "Time Saved"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Focus Badge */}
              <div className="mt-6">
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 ${
                  mode === "developer" 
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-300" 
                    : "bg-green-500/10 border-green-500/30 text-green-300"
                }`}>
                  <div className="text-sm font-medium">Currently Focused On</div>
                  <div className="text-xs mt-1">
                    {mode === "developer" 
                      ? "React 19 & Next.js 15" 
                      : "Kubernetes & AWS EC2"
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 bg-white/5 p-2 rounded-xl">
              {[
                { id: "overview", label: "Overview" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "achievements", label: "Achievements" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
              {activeTab === "overview" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {mode === "developer" ? 
                      <Code2 className="h-8 w-8 text-blue-400" /> : 
                      <Cog className="h-8 w-8 text-green-400" />
                    }
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold">{content.title}</h3>
                      <p className={`font-semibold ${mode === "developer" ? "text-blue-400" : "text-green-400"}`}>
                        {content.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                    {content.description}
                  </p>

                  {/* Role-specific highlights */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className={`h-5 w-5 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                        Key Strength
                      </h5>
                      <p className="text-white/70 text-sm">
                        {mode === "developer" 
                          ? "Creating intuitive user interfaces with modern React patterns"
                          : "Automating infrastructure deployment and scaling solutions"
                        }
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className={`h-5 w-5 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                        Recent Achievement
                      </h5>
                      <p className="text-white/70 text-sm">
                        {mode === "developer" 
                          ? "Improved app performance by 40% using Next.js optimization"
                          : "Reduced deployment time by 60% with automated CI/CD pipelines"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className={`h-6 w-6 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                    Technical Skills
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {skillsToShow.map((skill, index) => (
                      <SkillCard key={index} skill={skill} index={index} />
                    ))}
                  </div>

                  {content.additionalSkills.length > 0 && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
                      >
                        {showAllSkills ? "Show Less" : `Show ${content.additionalSkills.length} More Skills`}
                        {showAllSkills ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-2">
                    <Calendar className={`h-6 w-6 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                    Work Experience
                  </h4>
                  
                  <div className="space-y-6">
                    {content.experience.map((job, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-blue-500/30 last:border-l-0">
                        <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                          mode === "developer" ? "bg-blue-500" : "bg-green-500"
                        }`}></div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                          <h5 className="text-lg font-bold text-white">{job.role}</h5>
                          <p className={`font-semibold mb-2 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`}>
                            {job.company}
                          </p>
                          <p className="text-sm text-white/60 mb-4">{job.duration}</p>
                          <p className="text-white/80 leading-relaxed mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  mode === "developer" 
                                    ? "bg-blue-500/20 text-blue-300" 
                                    : "bg-green-500/20 text-green-300"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "achievements" && (
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className={`h-6 w-6 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                    Key Achievements
                  </h4>
                  
                  <div className="grid gap-4">
                    {content.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          mode === "developer" ? "bg-blue-500/20" : "bg-green-500/20"
                        }`}>
                          <Award className={`h-4 w-4 ${mode === "developer" ? "text-blue-400" : "text-green-400"}`} />
                        </div>
                        <p className="text-white/80 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
