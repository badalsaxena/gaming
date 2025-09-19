"use client";
import { motion } from "framer-motion";
import React from "react";
import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/audiowide/400.css";
import { SectionTitle, AnimatedSection, StaggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn, AnimatedButton } from "./AnimationUtils.tsx";

export default function AboutTournament() {
  const features = [
    {
      title: "Intense Competition",
      description: "Challenge the best players from around the world in high-stakes tournaments with substantial prize pools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "State-of-the-Art Platform",
      description: "Experience smooth gameplay, low latency, and cutting-edge matchmaking technology for the ultimate gaming experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Live Streaming",
      description: "All matches are professionally streamed with expert commentary, analysis, and replay highlights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Global Rankings",
      description: "Climb the leaderboards and earn your place among the elite players in our worldwide ranking system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <AnimatedSection id="tournament" className="bg-dark-bg py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle title="About The Tournament" />
          <motion.p 
            className="text-center text-white/80 max-w-3xl text-lg font-rajdhani"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            XLR8 Gaming hosts premier competitive gaming tournaments across multiple platforms and titles. 
            With thousands of players competing for glory and prizes, we offer the most intense and rewarding 
            gaming experience in the industry.
          </motion.p>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/50 p-6 rounded-lg border border-neon-red/20 hover:border-neon-red/80 transition-all duration-300"
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.3)" }}
            >
              <motion.div 
                className="mb-5 text-neon-red"
                variants={scaleIn}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-audiowide mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70 font-rajdhani">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatedButton text="VIEW GAME RULES" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}