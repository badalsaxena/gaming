
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import ModernNavbar from '../../components/ModernNavbar';
import FuturisticHero from '../../components/FuturisticHero';
import FeaturedGames from '../../components/FeaturedGames';
import AboutTournament from '../../components/AboutTournament';
import UpcomingEvents from '../../components/UpcomingEvents';
import HowToJoin from '../../components/HowToJoin';
import LatestNews from '../../components/LatestNews';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import { useScrollAnimation } from '../../components/AnimationUtils.tsx';
import { ScrollProgress } from '../../components/EnhancedAnimations';
import { motion } from 'framer-motion';

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Implement smooth scrolling
  useEffect(() => {
    // Add smooth scroll behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor link clicks for smooth scrolling with offset for fixed header
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = 80; // Approximate navbar height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <main className="relative bg-black text-white">
      <ScrollProgress />
      <ModernNavbar />
      <div id="home">
        <FuturisticHero />
      </div>
      <div id="featured-games">
        <FeaturedGames />
      </div>
      <div id="about-tournament">
        <AboutTournament />
      </div>
      <div id="upcoming-events">
        <UpcomingEvents />
      </div>
      <div id="how-to-join">
        <HowToJoin />
      </div>
      <div id="latest-news">
        <LatestNews />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      
      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-neon-red/80 hover:bg-neon-red text-white w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-glow"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </main>
  );
}
