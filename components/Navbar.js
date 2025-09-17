"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Navigation links animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

// Logo animation variants
const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-purple-700/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-10 h-10 mr-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full blur-sm"></div>
            <div className="absolute inset-0.5 bg-black rounded-full flex items-center justify-center">
              <span className="text-cyan-400 font-orbitron text-lg font-bold">AA</span>
            </div>
          </div>
          <span className="text-white font-orbitron text-xl tracking-widest">
            ASSASSIN<span className="text-cyan-400">ARENA</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex items-center space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="#" 
            className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors relative group"
            variants={linkVariants}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#tournament" 
            className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors relative group"
            variants={linkVariants}
          >
            Tournament
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#events" 
            className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors relative group"
            variants={linkVariants}
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#how-to-join" 
            className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors relative group"
            variants={linkVariants}
          >
            Join
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.button
            variants={linkVariants}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-rajdhani font-bold py-2 px-6 rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            whileHover={{ 
              boxShadow: "0 0 15px 0 rgba(0, 255, 255, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP
          </motion.button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4 border-t border-purple-700/30">
          <a href="#" className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors">Home</a>
          <a href="#tournament" className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors">Tournament</a>
          <a href="#events" className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors">Events</a>
          <a href="#how-to-join" className="text-white font-rajdhani text-lg hover:text-cyan-400 transition-colors">Join</a>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-rajdhani font-bold py-2 px-6 rounded-full w-full">
            SIGN UP
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}