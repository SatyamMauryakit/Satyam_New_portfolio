"use client";
import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/satyammauryakit",
      icon: Github,
      color: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/thesatyammaurya",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      href: "mailto:sa9451736205@gmail.com",
      icon: Mail,
      color: "hover:text-emerald-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "/components/aboutus" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative py-16 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-3">
              Satyam <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Maurya</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-4">
              Passionate developer crafting digital experiences with modern technologies. 
              Always learning, always building, always innovating.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
              <Code className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-white/60 ${social.color} transition-all duration-300 group`}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col  items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex  justify-center items-center  gap-2 text-white/50 text-sm">
              <p>© {currentYear} Satyam Maurya. All rights reserved.</p>
              <span className="hidden md:block">•</span>
              <p className="flex items-center gap-1">
                Crafted with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Fun Stats (Optional) */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="group">
              <div className="text-lg font-bold text-emerald-400 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-white/50 text-xs">Projects Built</div>
            </div>
            <div className="group">
              <div className="text-lg font-bold text-blue-400 group-hover:scale-110 transition-transform">
                1+
              </div>
              <div className="text-white/50 text-xs">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-lg font-bold text-purple-400 group-hover:scale-110 transition-transform">
                ∞
              </div>
              <div className="text-white/50 text-xs">Cups of Coffee</div>
            </div>
            <div className="group">
              <div className="text-lg font-bold text-amber-400 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-white/50 text-xs">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Alternative to inline back to top) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
