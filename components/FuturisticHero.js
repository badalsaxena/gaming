"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FuturisticHero() {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);
    
    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/a1.jpg"
          alt="Gaming Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      {/* Parallax Background Container */}
      <div className="parallax-container absolute inset-0 z-10">
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Enhanced grid overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 64, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 64, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Additional neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-neon-red/10 via-transparent to-transparent"></div>
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-red/10 via-transparent to-neon-red/10 z-10"></div>
        
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
      <div className="relative z-30 flex flex-col h-full container mx-auto px-4 sm:px-6">
        {/* Top navigation placeholder */}
        <div className="h-16 sm:h-20 md:h-24"></div>
        
        {/* Hero content - vertically centered */}
        <div className="flex flex-col items-center justify-center flex-grow text-center py-4 sm:py-6 md:py-8 max-w-6xl mx-auto">
          
          {/* Main Logo with Animation Effects */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mb-6 sm:mb-8 mt-0 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-8 flex items-center justify-center"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/images/loggo.png" 
                alt="XLR8 Gaming" 
                width={800} 
                height={350}
                className="h-32 sm:h-40 md:h-52 lg:h-64 xl:h-72 w-auto object-contain max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[800px]"
                priority
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'
                }}
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-red/20 via-transparent to-neon-red/20 blur-xl -z-10 scale-110"></div>
            </motion.div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-rajdhani font-medium max-w-md sm:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0 -mt-0 sm:-mt-1 md:-mt-2 lg:-mt-3 xl:-mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            Enter the ultimate gaming arena where legends are born and champions rise.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Join the revolution of competitive gaming.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-8 sm:mb-12 w-full max-w-md sm:max-w-none px-4 sm:px-0 -mt-0 sm:-mt-1 md:-mt-2 lg:-mt-3 xl:-mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="/register">
              <motion.button
                className="bg-neon-red hover:bg-accent-red text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-rajdhani font-bold tracking-wider w-full sm:w-auto transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER NOW
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-white/50 hover:border-neon-red text-white hover:text-neon-red text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-rajdhani font-bold tracking-wider transition-all duration-300 group w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>WATCH TRAILER</span>
                <span className="text-xl sm:text-2xl group-hover:animate-pulse">▶</span>
              </span>
            </motion.button>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-center px-4 sm:px-0 -mt-0 sm:-mt-1 md:-mt-2 lg:-mt-3 xl:-mt-4"
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
                className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 min-w-[100px] sm:min-w-[120px] flex-1 max-w-[120px] sm:max-w-[140px]"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-audiowide font-bold text-neon-red mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base font-rajdhani text-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}