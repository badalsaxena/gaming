"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimationUtils.js";
import Image from "next/image";

export default function CallOfDutyStyleHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Full-screen image background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute min-w-full min-h-full object-cover">
          <Image
            src="/images/anuj.jpg"
            alt="XLR8 Gaming Team"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full container mx-auto px-4">
        {/* Top navigation placeholder */}
        <div className="h-24"></div>
        
        {/* Main hero content - vertically centered */}
        <div className="flex flex-col items-center md:items-start justify-center flex-grow text-center md:text-left">
          {/* Logo reveal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mb-6"
          >
            <Image 
              src="/images/xlr8-gaming-logo.svg" 
              alt="XLR8 Gaming" 
              width={600} 
              height={200}
              className="max-w-full h-auto"
              priority
            />
          </motion.div>
          
          {/* Tagline with staggered text animation */}
          <motion.div 
            className="overflow-hidden max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-rajdhani text-white mb-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              DOMINATE THE BATTLEFIELD. CLAIM YOUR GLORY.
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-8 font-rajdhani"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Experience the most intense gaming tournaments ever created. Join elite players from around the world in the ultimate test of skill and strategy.
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <AnimatedButton 
              text="REGISTER NOW" 
              className="text-lg px-10 py-4 bg-neon-red hover:bg-red-700 transition-colors"
            />
            <motion.button
              className="text-lg px-10 py-4 border-2 border-white/70 text-white font-rajdhani font-bold rounded hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              WATCH TRAILER
            </motion.button>
          </motion.div>
        </div>
        
        {/* Bottom feature highlight */}
        <motion.div 
          className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* Feature 1 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-4 rounded">
            <h3 className="text-neon-red font-audiowide text-lg mb-2">SEASON 5</h3>
            <p className="text-white/90 font-rajdhani">$100,000 Prize Pool</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-4 rounded">
            <h3 className="text-neon-red font-audiowide text-lg mb-2">TOURNAMENTS</h3>
            <p className="text-white/90 font-rajdhani">10 Games, 3 Platforms</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-4 rounded">
            <h3 className="text-neon-red font-audiowide text-lg mb-2">REGISTRATION</h3>
            <p className="text-white/90 font-rajdhani">Ends September 30, 2025</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}