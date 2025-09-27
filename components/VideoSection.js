"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          video.play().catch(console.error);
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(console.error);
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,0,0,0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,0,0,0.03)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

      {/* Video container */}
      <motion.div 
        className="relative w-full max-w-6xl mx-auto px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-audiowide text-white mb-4">
            EXPERIENCE THE <span className="text-neon-red">ARENA</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-rajdhani">
            Witness the intensity of competitive gaming
          </p>
        </motion.div>

        {/* Video wrapper */}
        <motion.div 
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neon-red/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            onClick={togglePlayPause}
          >
            <source src="/images/vidd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video overlay controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Play/Pause button */}
          <motion.button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm border border-neon-red/50 rounded-full w-20 h-20 flex items-center justify-center text-white hover:bg-neon-red/20 transition-all duration-300 pointer-events-auto"
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView && !isPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>

          {/* Video info overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-audiowide mb-1">XLR8 ARENA</h3>
                <p className="text-sm text-white/80 font-rajdhani">Professional Gaming Experience</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-red rounded-full animate-pulse"></div>
                <span className="text-sm font-rajdhani">LIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 font-rajdhani text-lg">
            Join thousands of gamers in the ultimate competitive experience
          </p>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-red/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;