"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimationUtils.tsx";
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
        {/* Background Image - optimized for all screens */}
        <div className="absolute min-w-full min-h-full object-cover">
          <Image
            src="/images/anuj.jpg"
            alt="XLR8 Gaming Team"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full container mx-auto px-2">
        {/* Top navigation placeholder */}
        <div className="h-20 md:h-24"></div>
        
        {/* Main hero content - vertically centered */}
        <div className="flex flex-col items-start justify-center flex-grow text-left pt-10 sm:pt-4 md:pt-0">
          {/* Logo reveal animation - hidden on mobile, visible on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="hidden sm:block mb-4 md:mb-6 w-full px-4 md:px-0"
          >
            <Image 
              src="/images/xlr8-gaming-logo.svg" 
              alt="XLR8 Gaming" 
              width={600} 
              height={200}
              className="max-w-full w-[350px] md:w-[500px] lg:w-[600px] h-auto"
              priority
            />
          </motion.div>
          
          {/* Tagline with staggered text animation */}
          <motion.div 
            className="overflow-hidden max-w-xl mb-6 md:mb-8 px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-rajdhani text-white mb-3 md:mb-4 leading-tight"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              DOMINATE THE BATTLEFIELD. CLAIM YOUR GLORY.
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-white/80 mb-6 md:mb-8 font-rajdhani"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Experience the most intense gaming tournaments ever created. Join elite players from around the world in the ultimate test of skill and strategy.
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full px-4 md:px-0 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <AnimatedButton 
              text="REGISTER NOW" 
              className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 bg-neon-red hover:bg-red-700 transition-colors"
            />
            <motion.button
              className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 border-2 border-white/70 text-white font-rajdhani font-bold rounded hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              WATCH TRAILER
            </motion.button>
          </motion.div>
        </div>
        
        {/* Bottom feature highlight */}
        <motion.div 
          className="pb-6 sm:pb-8 md:pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-auto px-4 md:px-0 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* Feature 1 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-3 md:p-4 rounded">
            <h3 className="text-neon-red font-audiowide text-base md:text-lg mb-1 md:mb-2">SEASON 5</h3>
            <p className="text-white/90 font-rajdhani text-sm md:text-base">$100,000 Prize Pool</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-3 md:p-4 rounded">
            <h3 className="text-neon-red font-audiowide text-base md:text-lg mb-1 md:mb-2">TOURNAMENTS</h3>
            <p className="text-white/90 font-rajdhani text-sm md:text-base">10 Games, 3 Platforms</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-black/60 backdrop-blur-sm border border-neon-red/30 p-3 md:p-4 rounded sm:col-span-2 md:col-span-1">
            <h3 className="text-neon-red font-audiowide text-base md:text-lg mb-1 md:mb-2">REGISTRATION</h3>
            <p className="text-white/90 font-rajdhani text-sm md:text-base">Ends September 30, 2025</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: 1
        }}
        transition={{
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          },
          opacity: { duration: 0.5, delay: 2.2 }
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
          <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}