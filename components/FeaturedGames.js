"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./AnimationUtils.tsx";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedGames() {
  const games = [
    {
      title: "CALL OF DUTY",
      image: "/images/cod%20(2).jpg",
      platforms: ["PC", "XBOX", "PS5", "MOBILE"],
      prize: "$40,000",
      date: "OCT 15",
      description: "Compete in the ultimate tactical shooter. Test your skills in 5v5 team-based combat.",
    },
    {
      title: "FREE FIRE",
      image: "/images/ff.jpg", 
      platforms: ["MOBILE"],
      prize: "$25,000",
      date: "NOV 01",
      description: "The most competitive battle royale tournament with fast-paced action and survival gameplay.",
    },
    {
      title: "BGMI",
      image: "/images/bgmi.jpg",
      platforms: ["MOBILE"],
      prize: "$35,000",
      date: "OCT 22",
      description: "Be the last player standing in this high-stakes battle royale competition on mobile.",
    }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-red/10 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-neon-red/10 to-transparent z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle title="ACTIVE TOURNAMENTS" />
        </div>
        
        {/* Game cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        
        {/* View all tournaments button */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-transparent hover:bg-neon-red/20 transition-colors border-2 border-neon-red text-white py-3 px-8 rounded text-lg font-rajdhani font-bold tracking-wider group relative">
            VIEW ALL TOURNAMENTS
            <span className="absolute -right-2 -top-2 bg-neon-red text-xs py-1 px-2 rounded font-rajdhani">
              23
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const GameCard = ({ game, index }) => {
  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900/90 to-black border border-neon-red/30 rounded-xl overflow-hidden group h-full flex flex-col shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 40px -5px rgba(255, 0, 64, 0.4)",
        borderColor: "rgba(255, 0, 64, 0.6)"
      }}
    >
      {/* Game image */}
      <div className="relative h-52 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <Image
          src={game.image}
          alt={game.title}
          width={400}
          height={208}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          priority
          onError={(e) => {
            console.error('Image failed to load:', game.image);
            e.target.src = '/images/game1.svg'; // fallback
          }}
        />
        <div className="absolute top-4 right-4 bg-neon-red py-1 px-3 text-sm font-rajdhani font-bold text-white z-20 rounded">
          {game.date}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-audiowide text-white mb-2">{game.title}</h3>
        
        <p className="text-white/70 font-rajdhani mb-4 flex-grow">
          {game.description}
        </p>
        
        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game.platforms.map((platform, i) => (
            <span 
              key={i} 
              className="bg-white/10 text-white/80 text-xs py-1 px-2 rounded font-rajdhani"
            >
              {platform}
            </span>
          ))}
        </div>
        
        {/* Prize and register button */}
        <div className="flex justify-between items-center mt-auto">
          <div>
            <span className="block text-xs text-white/50 font-rajdhani">PRIZE POOL</span>
            <span className="text-neon-red font-audiowide">{game.prize}</span>
          </div>
          
          <Link href="/register">
            <button className="bg-neon-red hover:bg-red-700 transition-colors text-white py-2 px-4 rounded text-sm font-rajdhani font-bold">
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};