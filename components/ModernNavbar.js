"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ModernNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: "HOME", href: "#" },
    { name: "TOURNAMENTS", href: "#featured-games" },
    { name: "ABOUT", href: "#about-tournament" },
    { name: "SCHEDULE", href: "#upcoming-events" },
    { name: "HOW TO JOIN", href: "#how-to-join" },
    { name: "NEWS", href: "#latest-news" },
    { name: "CONTACT", href: "#contact" },
  ];
  
  return (
    <>
      {/* Main navbar */}
      <motion.header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-gradient-to-b from-black/90 to-transparent py-4'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-50">
              <Image 
                src="/images/xlr8-gaming-logo-small.svg" 
                alt="XLR8 Gaming" 
                width={160} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link 
                    href={item.href}
                    className="text-white hover:text-neon-red transition-colors text-sm font-audiowide tracking-wider"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* CTA button */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="#how-to-join" 
                className="bg-neon-red hover:bg-red-700 transition-colors text-white py-2 px-6 rounded text-sm font-rajdhani font-bold"
              >
                REGISTER
              </Link>
            </motion.div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none z-50"
                aria-label="Toggle menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link 
                    href={item.href}
                    className="text-white hover:text-neon-red transition-colors text-xl font-audiowide tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mt-8"
              >
                <Link 
                  href="#how-to-join" 
                  className="bg-neon-red hover:bg-red-700 transition-colors text-white py-3 px-8 rounded text-base font-rajdhani font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  REGISTER NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}