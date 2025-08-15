"use client";
import { useState, useEffect } from "react";
import { useModeStore } from "@/lib/modeStore";
import { 
  Code2, 
  Cog, 
  SplitSquareHorizontal, 
  ArrowRight, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Download,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

export default function Navbar() {
  const { mode, setMode, toggle } = useModeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/components/aboutus", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "backdrop-blur-xl bg-black/40 shadow-lg border-b border-white/20" 
        : "backdrop-blur-xl bg-black/30 border-b border-white/10"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="group inline-flex items-center gap-3 text-white z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-2 group-hover:scale-110 transition-transform duration-200">
              <Code2 className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm lg:text-base font-bold tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
                Satyam Maurya
              </span>
              <div className="text-xs text-white/60 mt-1">
                {mode === "developer" ? "Full Stack Developer" : "DevOps Engineer"}
              </div>
            </div>
            <span className="sm:hidden text-sm font-bold tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Satyam Maurya
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mode Toggle & Actions */}
          <div className="flex items-center gap-2">
            

            {/* Mode Buttons - Tablet and Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setMode("developer")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all duration-200 ${
                  mode === "developer" 
                    ? "bg-white text-black border-white shadow-lg" 
                    : "border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
                }`}
                title="Switch to Developer mode"
              >
                <SplitSquareHorizontal className="h-4 w-4" />
                <span className="hidden xl:inline">Developer</span>
                <span className="xl:hidden">Dev</span>
              </button>
              <button
                onClick={() => setMode("devops")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all duration-200 ${
                  mode === "devops" 
                    ? "bg-white text-black border-white shadow-lg" 
                    : "border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
                }`}
                title="Switch to DevOps mode"
              >
                <Cog className="h-4 w-4" />
                <span className="hidden xl:inline">DevOps</span>
                <span className="xl:hidden">Ops</span>
              </button>
            </div>

            {/* Mobile Mode Toggle */}
            <button
              onClick={toggle}
              className="md:hidden inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-200"
              title="Toggle between Developer and DevOps mode"
            >
              {mode === "developer" ? (
                <>
                  <SplitSquareHorizontal className="h-3 w-3" />
                  Dev
                </>
              ) : (
                <>
                  <Cog className="h-3 w-3" />
                  Ops
                </>
              )}
            </button>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="hidden lg:inline">Let's Talk</span>
              <span className="lg:hidden">Talk</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {/* Navigation Links */}
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="border-t border-white/10 pt-4 space-y-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center gap-3 w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-3 px-4 py-2">
                <span className="text-white/60 text-sm">Connect:</span>
                <a href="https://github.com" className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:contact@example.com" className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200">
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              {/* Download Resume */}
              <button className="flex items-center gap-3 w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                <Download className="h-5 w-5" />
                Download Resume
              </button>

              {/* CTA Button */}
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 font-semibold transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
