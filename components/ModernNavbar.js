"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ModernNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Detect active section
      const sections = ["home", "featured-games", "about-tournament", "upcoming-events", "how-to-join", "latest-news", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "TOURNAMENTS", href: "#featured-games", id: "featured-games" },
    { name: "SCHEDULE", href: "#upcoming-events", id: "upcoming-events" },
    { name: "NEWS", href: "#latest-news", id: "latest-news" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];
  
  return (
    <>
      {/* Main navbar */}
      <header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-strong py-2 border-b border-neon-red/30' 
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/images/loggo.png" 
                  alt="XLR8 Gaming" 
                  width={250} 
                  height={80} 
                  className="h-16 sm:h-14 md:h-16 lg:h-18 w-auto object-contain max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] brightness-110 contrast-110"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <Link 
                    href={item.href}
                    className={`nav-link relative px-4 py-2 rounded-lg text-sm font-rajdhani font-semibold tracking-wider transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-neon-red bg-neon-red/10 shadow-glow'
                        : 'text-white hover:text-neon-red'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
            
            {/* CTA button */}
            <div className="hidden lg:block">
              <Link 
                href="/login" 
                className="neon-button relative overflow-hidden rounded-lg"
              >
                <span className="relative z-10">LOGIN</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative text-white focus:outline-none z-50 p-3 rounded-lg bg-black/30 border border-neon-red/30 hover:bg-neon-red/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-neon-red shadow-sm transform transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-neon-red shadow-sm transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-neon-red shadow-sm transform transition-all duration-300 ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-red/10 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,64,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="relative flex flex-col items-center h-full p-8 pt-24">
            <div className="w-full max-w-sm space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="group">
                  <Link 
                    href={item.href}
                    className={`block text-xl font-rajdhani font-semibold tracking-wider transition-all duration-300 px-6 py-4 rounded-lg border border-transparent hover:border-neon-red/30 text-center ${
                      activeSection === item.id
                        ? 'text-neon-red bg-neon-red/10 shadow-glow border-neon-red/50'
                        : 'text-white hover:text-neon-red hover:bg-neon-red/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              <div className="mt-6">
                <Link 
                  href="/login" 
                  className="block bg-neon-red/10 text-neon-red border border-neon-red/50 hover:bg-neon-red/20 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}