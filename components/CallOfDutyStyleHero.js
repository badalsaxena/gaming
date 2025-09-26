"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimationUtils.tsx";
import Image from "next/image";
import Link from "next/link";

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
            src="/images/loggo.png"
            alt="XLR8 Gaming"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
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
            <Link href="/register">
              <motion.button
                className="neon-button text-lg px-8 py-4 rounded-lg font-rajdhani font-bold tracking-wider"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">REGISTER NOW</span>
              </motion.button>
            </Link>
            
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