"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TournamentCards() {
  const tournaments = [
    {
      title: "BATTLE ROYALE CHAMPIONSHIP",
      season: "Season 2024",
      prizePool: "$50,000",
      registrationDate: "Dec 15, 2024",
      participants: "256 Players",
      status: "Open",
      icon: "🏆",
      gradient: "from-neon-red/20 to-red-900/20"
    },
    {
      title: "TACTICAL WARFARE LEAGUE",
      season: "Season 2024",
      prizePool: "$75,000",
      registrationDate: "Jan 10, 2025",
      participants: "128 Teams",
      status: "Soon",
      icon: "⚔️",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "ARENA MASTERS CUP",
      season: "Season 2024",
      prizePool: "$30,000",
      registrationDate: "Dec 20, 2024",
      participants: "64 Players",
      status: "Open",
      icon: "🎯",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-darker-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,64,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,64,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-audiowide text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ACTIVE <span className="text-neon-red">TOURNAMENTS</span>
          </motion.h2>
          <motion.p 
            className="font-rajdhani text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join the ultimate competitive gaming experience and compete for massive prize pools
          </motion.p>
        </motion.div>

        {/* Tournament Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="tournament-card group relative p-6 rounded-xl overflow-hidden"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5 
              }}
              style={{ transformStyle: 'preserve-3d' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tournament.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-rajdhani font-bold tracking-wider ${
                  tournament.status === 'Open' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                }`}>
                  {tournament.status}
                </span>
              </div>

              {/* Tournament Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {tournament.icon}
              </div>

              {/* Tournament Title */}
              <h3 className="font-audiowide text-xl font-bold text-white mb-6 text-center group-hover:text-neon-red transition-colors duration-300">
                {tournament.title}
              </h3>

              {/* Tournament Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-rajdhani text-white/70 text-sm tracking-wider">SEASON</span>
                  <span className="font-rajdhani font-semibold text-white">{tournament.season}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-rajdhani text-white/70 text-sm tracking-wider">PRIZE POOL</span>
                  <span className="font-audiowide font-bold text-neon-red text-lg">{tournament.prizePool}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-rajdhani text-white/70 text-sm tracking-wider">REGISTRATION</span>
                  <span className="font-rajdhani font-semibold text-white">{tournament.registrationDate}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="font-rajdhani text-white/70 text-sm tracking-wider">PARTICIPANTS</span>
                  <span className="font-rajdhani font-semibold text-white">{tournament.participants}</span>
                </div>
              </div>

              {/* Action Button */}
              {tournament.status === 'Open' ? (
                <Link href="/register">
                  <motion.button
                    className="w-full mt-6 neon-button py-3 px-6 rounded-lg font-rajdhani font-bold tracking-wider"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">REGISTER NOW</span>
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  className="w-full mt-6 neon-button py-3 px-6 rounded-lg font-rajdhani font-bold tracking-wider opacity-50 cursor-not-allowed"
                  disabled
                >
                  <span className="relative z-10">COMING SOON</span>
                </motion.button>
              )}

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-red rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="glass-strong px-8 py-4 rounded-lg border-2 border-neon-red/50 text-neon-red font-rajdhani font-bold tracking-wider hover:bg-neon-red hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL TOURNAMENTS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}