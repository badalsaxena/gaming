// SVG-based assassin character component 
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/audiowide/400.css";

// SVG-based assassin character component with red theme
export default function AssassinSVG() {
  return (
    <motion.div
      initial={{ scale: 0.95, filter: "brightness(0.8)" }}
      animate={{ scale: 1, filter: "brightness(1) drop-shadow(0 0 32px #ff0000)" }}
      transition={{ duration: 1.2, yoyo: Infinity, repeatType: "reverse" }}
      className="w-64 h-80 relative"
    >
      <svg 
        viewBox="0 0 240 320" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Background glow */}
        <defs>
          <radialGradient id="assassinGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Glowing background */}
        <ellipse cx="120" cy="160" rx="110" ry="140" fill="url(#assassinGlow)" />
        
        {/* Assassin body silhouette */}
        <motion.path
          d="M120 30 
             C150 30, 170 60, 170 100
             C170 140, 160 180, 150 210
             L140 260
             L120 270
             L100 260
             L90 210
             C80 180, 70 140, 70 100
             C70 60, 90 30, 120 30Z"
          fill="#000"
          stroke="#ff0000"
          strokeWidth="1"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Hood */}
        <path 
          d="M120 40
             C140 40, 155 60, 155 85
             C155 110, 140 130, 120 140
             C100 130, 85 110, 85 85
             C85 60, 100 40, 120 40Z"
          fill="#111"
          stroke="#ff0000"
          strokeWidth="0.5"
        />
        
        {/* Face shadow */}
        <path 
          d="M120 70
             C130 70, 140 80, 140 95
             C140 110, 130 120, 120 120
             C110 120, 100 110, 100 95
             C100 80, 110 70, 120 70Z"
          fill="#000"
        />
        
        {/* Eyes */}
        <motion.circle 
          cx="110" 
          cy="95" 
          r="3" 
          fill="#ff0000"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle 
          cx="130" 
          cy="95" 
          r="3" 
          fill="#ff0000"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
        />
        
        {/* Chest armor */}
        <path 
          d="M100 140
             L140 140
             L135 200
             L120 210
             L105 200
             L100 140Z"
          fill="#111"
          stroke="#ff0000"
          strokeWidth="0.5"
        />
        
        {/* Belt */}
        <rect x="105" y="200" width="30" height="5" fill="#333" />
        
        {/* Legs */}
        <path 
          d="M105 205
             L105 260
             L115 260
             L115 205Z"
          fill="#111"
        />
        <path 
          d="M125 205
             L125 260
             L135 260
             L135 205Z"
          fill="#111"
        />
        
        {/* Arms */}
        <path 
          d="M140 140
             L160 180
             L155 185
             L135 150Z"
          fill="#111"
        />
        <path 
          d="M100 140
             L80 180
             L85 185
             L105 150Z"
          fill="#111"
        />
        
        {/* Blade glint */}
        <motion.path
          d="M160 180 L180 160 L175 190 Z"
          fill="#111"
          stroke="#ff0000"
          strokeWidth="1"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, yoyo: Infinity }}
        />
        
        {/* Decorative elements */}
        <motion.circle 
          cx="120" 
          cy="160" 
          r="5" 
          fill="#ff0000" 
          opacity="0.8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Highlight lines */}
        <motion.line 
          x1="115" 
          y1="150" 
          x2="125" 
          y2="150" 
          stroke="#ff0000" 
          strokeWidth="0.5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line 
          x1="115" 
          y1="170" 
          x2="125" 
          y2="170" 
          stroke="#ff0000" 
          strokeWidth="0.5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}