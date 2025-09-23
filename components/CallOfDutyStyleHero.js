"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimationUtils.tsx";
import Image from "next/image";

export default function CallOfDutyStyleHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Parallax Background Container */}
      <div className="parallax-container absolute inset-0 z-0">
        {/* Background Image with parallax effect */}
        <motion.div 
          className="parallax-layer absolute inset-0"
          style={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/images/anuj.jpg"
            alt="XLR8 Gaming Team"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            priority
            quality={90}
            sizes="100vw"
            className="will-change-transform"
          />
        </motion.div>
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 via-transparent to-neon-red/5 z-10"></div>
        
        {/* Futuristic grid overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20 z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,64,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,64,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-red rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col h-full container mx-auto px-4">
        {/* Top navigation placeholder */}
        <div className="h-20 md:h-24"></div>
        
        {/* Hero content - vertically centered */}
        <div className="flex flex-col items-center justify-center flex-grow text-center pt-10 sm:pt-4 md:pt-0">
          
          {/* Main Title with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 
              className={`glitch cyberpunk-text font-audiowide text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-4 ${glitchActive ? 'glitch-hover' : ''}`}
              data-text="XLR8"
            >
              XLR8
            </h1>
            <motion.h2 
              className="font-rajdhani text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              GAMING
            </motion.h2>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/80 font-rajdhani font-light max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Enter the ultimate gaming arena where legends are born and champions rise. 
            <br className="hidden md:block" />
            Join the revolution of competitive gaming.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              className="neon-button text-lg px-8 py-4 rounded-lg font-rajdhani font-bold tracking-wider"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">REGISTER NOW</span>
            </motion.button>
            
            <motion.button
              className="glass border-2 border-white/30 text-white px-8 py-4 rounded-lg font-rajdhani font-bold tracking-wider hover:border-neon-red hover:text-neon-red transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>WATCH TRAILER</span>
                <span className="text-2xl group-hover:animate-pulse">▶</span>
              </span>
            </motion.button>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {[
              { label: "Active Players", value: "50K+" },
              { label: "Prize Pool", value: "$100K+" },
              { label: "Tournaments", value: "24/7" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-red rounded-lg p-4 min-w-[120px]"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-audiowide font-bold text-neon-red mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-rajdhani text-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="font-rajdhani text-sm tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-red rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
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