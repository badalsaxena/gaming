"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/700.css";
import AssassinSVG from "./AssassinSVG";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-black via-purple-900 to-[#0ff] text-white overflow-hidden">
      {/* Animated Assassin Character */}
      <motion.div
        initial={{ scale: 0.95, filter: "brightness(0.8)" }}
        animate={{ scale: 1, filter: "brightness(1) drop-shadow(0 0 32px #0ff)" }}
        transition={{ duration: 1.2, yoyo: Infinity, repeatType: "reverse" }}
        className="z-10"
      >
        <AssassinSVG />
      </motion.div>
      {/* Title & Subtitle */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 text-5xl md:text-7xl font-orbitron font-bold tracking-widest text-neon-green drop-shadow-lg text-center"
        style={{ fontFamily: 'Orbitron, Rajdhani, sans-serif' }}
      >
        XLR8 Gaming
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl font-rajdhani text-white/90 max-w-2xl text-center"
        style={{ fontFamily: 'Rajdhani, Orbitron, sans-serif' }}
      >
        The Ultimate Online Gaming Tournament Platform. Compete. Conquer. Become Legend.
      </motion.p>
      {/* Glowing background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-neon-green opacity-20 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
}
