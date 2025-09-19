"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./AnimationUtils.tsx";
import Image from "next/image";
import { useFadeInAnimation, useZoomInAnimation } from "./hooks/useRepeatingAnimation";

export default function LatestNews() {
  const titleAnimation = useZoomInAnimation({ threshold: 0.2 });
  const buttonAnimation = useFadeInAnimation({ threshold: 0.2 });
  
  const news = [
    {
      title: "Season 5 Registrations Now Open",
      date: "SEPT 16, 2025",
      category: "ANNOUNCEMENT",
      image: "/images/news1.svg",
      excerpt: "Register now for Season 5 tournaments with increased prize pools and new game categories."
    },
    {
      title: "Team Phantom Wins Shadow Strike Championship",
      date: "SEPT 10, 2025",
      category: "RESULTS",
      image: "/images/news2.svg",
      excerpt: "After an intense final round, Team Phantom emerged victorious claiming the $20,000 prize."
    },
    {
      title: "New Tournament Rules and Regulations",
      date: "SEPT 05, 2025",
      category: "UPDATE",
      image: "/images/news3.svg",
      excerpt: "Important updates to tournament rules to ensure fair play and competitive integrity."
    },
    {
      title: "Cyber Legends Qualifiers Schedule",
      date: "AUGUST 28, 2025",
      category: "SCHEDULE",
      image: "/images/news4.svg",
      excerpt: "Check the complete schedule for the upcoming Cyber Legends qualifier rounds."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-dark-bg py-24 relative">
      {/* Diagonal design element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-dark-bg transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-16">
          {/* Use motion div with ref for the title */}
          <motion.div 
            ref={titleAnimation.ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleAnimation.animate}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="LATEST NEWS" />
          </motion.div>
          
          <motion.button
            ref={buttonAnimation.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={buttonAnimation.animate}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center text-white/80 hover:text-neon-red transition-colors font-rajdhani group"
            whileHover={{ x: 5 }}
          >
            VIEW ALL NEWS
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} news={item} index={index} />
          ))}
        </div>
        
        {/* Mobile view all button */}
        <motion.div
          ref={buttonAnimation.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={buttonAnimation.animate}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center md:hidden"
        >
          <button className="flex items-center text-white/80 hover:text-neon-red transition-colors font-rajdhani group">
            VIEW ALL NEWS
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const NewsCard = ({ news, index }) => {
  const cardAnimation = useFadeInAnimation({ threshold: 0.1 });
  
  return (
    <motion.article 
      ref={cardAnimation.ref}
      className="bg-black/50 border border-neon-red/10 rounded-lg overflow-hidden h-full flex flex-col group"
      initial={{ opacity: 0, y: 30 }}
      animate={cardAnimation.animate}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Category tag */}
        <div className="absolute top-4 right-4 bg-neon-red py-1 px-2 text-xs font-rajdhani text-white">
          {news.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-white/50 text-xs font-rajdhani mb-2">
          {news.date}
        </div>
        
        <h3 className="text-lg font-audiowide text-white mb-3 leading-tight">
          {news.title}
        </h3>
        
        <p className="text-white/70 font-rajdhani text-sm mb-4 flex-grow">
          {news.excerpt}
        </p>
        
        <motion.button
          className="inline-flex items-center text-neon-red hover:text-white transition-colors text-sm font-rajdhani mt-auto group/btn"
          whileHover={{ x: 5 }}
        >
          READ MORE
          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.article>
  );
};