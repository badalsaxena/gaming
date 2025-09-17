"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/audiowide/400.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Container for scroll-triggered animations
export const AnimatedSection: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

// Staggered children animation
export const StaggerContainer: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <motion.div
      className={`container mx-auto px-4 ${className || ''}`}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Animation variants for children
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Title component with animation
export const SectionTitle: React.FC<{title: string}> = ({ title }) => {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-audiowide text-white mb-10 text-center relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
      <motion.span
        className="absolute -bottom-2 left-0 right-0 h-1 bg-neon-red"
        initial={{ width: 0, left: "50%" }}
        whileInView={{ width: "100%", left: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </motion.h2>
  );
};

// Button component with animation
export const AnimatedButton: React.FC<{text: string, className?: string}> = ({ text, className }) => {
  return (
    <motion.button
      className={`bg-neon-red text-white font-rajdhani font-bold py-3 px-8 rounded btn-hover-effect ${className || ''}`}
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--neon-red-glow)" }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.button>
  );
};

// Form input with animation
export const AnimatedInput: React.FC<{
  type: string;
  placeholder: string;
  className?: string;
  name?: string;
  required?: boolean;
}> = ({ type, placeholder, className, name, required }) => {
  return (
    <motion.input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={`w-full bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none ${className || ''}`}
      whileFocus={{ borderColor: "var(--neon-red)", boxShadow: "0 0 8px var(--neon-red-glow)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
  );
};

// Text area with animation
export const AnimatedTextarea: React.FC<{
  placeholder: string;
  className?: string;
  name?: string;
  required?: boolean;
  rows?: number;
}> = ({ placeholder, className, name, required, rows = 4 }) => {
  return (
    <motion.textarea
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`w-full bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none resize-none ${className || ''}`}
      whileFocus={{ borderColor: "var(--neon-red)", boxShadow: "0 0 8px var(--neon-red-glow)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
  );
};

// Initialize scroll animation detection
export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once to check initial viewport elements
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};