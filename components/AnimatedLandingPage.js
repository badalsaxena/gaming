"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  useFadeInAnimation,
  useSlideInLeftAnimation,
  useSlideInRightAnimation,
  useZoomInAnimation,
  useRotateAnimation
} from './hooks/useRepeatingAnimation';

// Navigation component with smooth scrolling
const RepeatingAnimationNavbar = () => {
  const logoAnimation = useZoomInAnimation();
  const linkAnimation = useSlideInRightAnimation();
  
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "FEATURES", href: "#features" },
    { name: "GAMES", href: "#games" },
    { name: "SHOWCASE", href: "#showcase" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.header 
      className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            ref={logoAnimation.ref}
            initial={logoAnimation.animationControls.initial}
            animate={logoAnimation.animationControls.animate}
            exit={logoAnimation.animationControls.exit}
            transition={{ duration: 0.6 }}
          >
            <Link href="#home" className="z-50">
              <Image 
                src="/images/logo1.jpg" 
                alt="XLR8 Gaming" 
                width={160} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                ref={linkAnimation.ref}
                initial={{ opacity: 0, x: 50 }}
                animate={linkAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link 
                  href={item.href}
                  className="text-white hover:text-neon-red transition-colors text-sm font-audiowide tracking-wider relative group nav-glitch-effect"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neon-red group-hover:w-full transition-all duration-300 ease-in-out shadow-glow"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Call to action button */}
          <motion.div
            ref={linkAnimation.ref}
            initial={{ opacity: 0 }}
            animate={linkAnimation.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block"
          >
            <Link 
              href="#contact" 
              className="bg-neon-red text-white py-2 px-6 rounded text-sm font-rajdhani font-bold"
            >
              JOIN NOW
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Hero section with fade-in and slide-up animations
const HeroSection = () => {
  const titleAnimation = useSlideInLeftAnimation();
  const descAnimation = useFadeInAnimation();
  const buttonAnimation = useZoomInAnimation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black pt-20">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/anuj.jpg"
            alt="Gaming Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            quality={90}
            className="opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1 
              ref={titleAnimation.ref}
              className="text-5xl md:text-7xl font-audiowide text-white leading-tight"
              initial={titleAnimation.animationControls.initial}
              animate={titleAnimation.animationControls.animate}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              BEYOND <span className="text-neon-red">LIMITS</span> GAMING
            </motion.h1>
            
            <motion.p 
              ref={descAnimation.ref}
              className="text-xl text-white/80 font-rajdhani max-w-lg"
              initial={descAnimation.animationControls.initial}
              animate={descAnimation.animationControls.animate}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience gaming at the highest level with the most intense tournaments, cutting-edge technology, and a community of elite gamers.
            </motion.p>
            
            <motion.div 
              ref={buttonAnimation.ref}
              className="flex flex-wrap gap-4"
              initial={buttonAnimation.animationControls.initial}
              animate={buttonAnimation.animationControls.animate}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="#features" className="bg-neon-red hover:bg-red-700 text-white font-rajdhani font-bold py-3 px-8 rounded transition-colors shadow-glow">
                EXPLORE
              </Link>
              <Link href="#games" className="border-2 border-white/70 text-white font-rajdhani font-bold py-3 px-8 rounded hover:bg-white/10 transition-colors">
                VIEW GAMES
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
          >
            <Image 
              src="/images/logo1.jpg" 
              alt="XLR8 Gaming Logo" 
              width={600} 
              height={400}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

// Features section with alternating animations
const FeaturesSection = () => {
  const titleAnimation = useZoomInAnimation();
  const featureAnimations = [
    useFadeInAnimation({ threshold: 0.2 }),
    useSlideInLeftAnimation({ threshold: 0.2 }),
    useSlideInRightAnimation({ threshold: 0.2 }),
    useZoomInAnimation({ threshold: 0.2 })
  ];
  
  const features = [
    {
      title: "IMMERSIVE TOURNAMENTS",
      description: "Participate in expertly organized tournaments with state-of-the-art streaming and production quality.",
      icon: "🏆"
    },
    {
      title: "GLOBAL COMMUNITY",
      description: "Connect with players from around the world and build your reputation in the international gaming scene.",
      icon: "🌐"
    },
    {
      title: "CUTTING-EDGE TECH",
      description: "Experience gaming on the latest hardware with minimal latency and maximum performance.",
      icon: "⚡"
    },
    {
      title: "EPIC REWARDS",
      description: "Win substantial prize pools, exclusive merchandise, and sponsorship opportunities.",
      icon: "💰"
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-black/90">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={titleAnimation.ref}
          className="text-4xl md:text-5xl font-audiowide text-white mb-16 text-center"
          initial={titleAnimation.animationControls.initial}
          animate={titleAnimation.animationControls.animate}
          transition={{ duration: 0.6 }}
        >
          ELITE <span className="text-neon-red">FEATURES</span>
          <motion.div 
            className="h-1 bg-neon-red mt-4 mx-auto w-24"
            initial={{ width: 0 }}
            animate={titleAnimation.isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={featureAnimations[index].ref}
              className="bg-black/40 backdrop-blur-sm border border-neon-red/30 p-6 rounded-lg hover:border-neon-red transition-colors"
              initial={featureAnimations[index].animationControls.initial}
              animate={featureAnimations[index].animationControls.animate}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-audiowide text-neon-red mb-3">{feature.title}</h3>
              <p className="text-white/80 font-rajdhani">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Games showcase with staggered animations
const GamesShowcase = () => {
  const titleAnimation = useZoomInAnimation();
  const games = [
    {
      title: "CALL OF DUTY",
      image: "/images/game1.svg",
      description: "Compete in intense tactical warfare across various game modes.",
      platforms: ["PC", "PlayStation", "Xbox"]
    },
    {
      title: "LEAGUE OF LEGENDS",
      image: "/images/game2.svg",
      description: "Strategic team-based gameplay in the world's premier MOBA.",
      platforms: ["PC"]
    },
    {
      title: "VALORANT",
      image: "/images/game3.svg",
      description: "Precision shooting combined with unique character abilities.",
      platforms: ["PC"]
    }
  ];
  
  return (
    <section id="games" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          ref={titleAnimation.ref}
          className="text-4xl md:text-5xl font-audiowide text-white mb-16 text-center"
          initial={titleAnimation.animationControls.initial}
          animate={titleAnimation.animationControls.animate}
          transition={{ duration: 0.6 }}
        >
          FEATURED <span className="text-neon-red">GAMES</span>
          <motion.div 
            className="h-1 bg-neon-red mt-4 mx-auto w-24"
            initial={{ width: 0 }}
            animate={titleAnimation.isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => {
            const gameAnimation = useZoomInAnimation({ threshold: 0.1 });
            
            return (
              <motion.div
                key={index}
                ref={gameAnimation.ref}
                className="bg-black/60 backdrop-blur-sm border border-neon-red/30 rounded-lg overflow-hidden group"
                initial={gameAnimation.animationControls.initial}
                animate={gameAnimation.animationControls.animate}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 right-0 text-xl font-audiowide text-white p-4">
                    {game.title}
                  </h3>
                </div>
                
                <div className="p-4">
                  <p className="text-white/80 font-rajdhani mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform, i) => (
                      <span key={i} className="bg-neon-red/20 text-white text-xs px-2 py-1 rounded font-rajdhani">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Showcase section with counter animations
const ShowcaseSection = () => {
  const titleAnimation = useZoomInAnimation({ threshold: 0.3 });
  const statsAnimation = useFadeInAnimation({ threshold: 0.3 });
  const imageAnimation = useSlideInRightAnimation({ threshold: 0.3 });
  
  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={titleAnimation.ref}
          className="text-4xl md:text-5xl font-audiowide text-white mb-16 text-center"
          initial={titleAnimation.animationControls.initial}
          animate={titleAnimation.animationControls.animate}
          transition={{ duration: 0.6 }}
        >
          OUR <span className="text-neon-red">ACHIEVEMENTS</span>
          <motion.div 
            className="h-1 bg-neon-red mt-4 mx-auto w-24"
            initial={{ width: 0 }}
            animate={titleAnimation.isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={statsAnimation.ref}
            className="grid grid-cols-2 gap-6"
            initial={statsAnimation.animationControls.initial}
            animate={statsAnimation.animationControls.animate}
            transition={{ duration: 0.8 }}
          >
            {[
              { value: "120+", label: "TOURNAMENTS" },
              { value: "15K+", label: "PLAYERS" },
              { value: "$1.2M", label: "PRIZE MONEY" },
              { value: "24/7", label: "SUPPORT" }
            ].map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-neon-red/30 p-6 rounded-lg text-center">
                <motion.h3 
                  className="text-3xl md:text-4xl font-audiowide text-neon-red mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsAnimation.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-white/80 font-rajdhani text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            ref={imageAnimation.ref}
            className="relative h-[400px] overflow-hidden rounded-lg border border-neon-red/30"
            initial={imageAnimation.animationControls.initial}
            animate={imageAnimation.animationControls.animate}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/Real.jpg"
              alt="Gaming Tournament"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-audiowide text-white mb-2">WORLD FINALS 2025</h3>
              <p className="text-white/80 font-rajdhani">Our flagship tournament with teams from 32 countries competing for the ultimate championship.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact section with form animations
const ContactSection = () => {
  const titleAnimation = useZoomInAnimation();
  const formAnimation = useFadeInAnimation();
  const infoAnimation = useSlideInRightAnimation();
  
  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          ref={titleAnimation.ref}
          className="text-4xl md:text-5xl font-audiowide text-white mb-16 text-center"
          initial={titleAnimation.animationControls.initial}
          animate={titleAnimation.animationControls.animate}
          transition={{ duration: 0.6 }}
        >
          JOIN <span className="text-neon-red">US</span>
          <motion.div 
            className="h-1 bg-neon-red mt-4 mx-auto w-24"
            initial={{ width: 0 }}
            animate={titleAnimation.isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={formAnimation.ref}
            initial={formAnimation.animationControls.initial}
            animate={formAnimation.animationControls.animate}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-audiowide text-white mb-4">REGISTER FOR UPCOMING EVENTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none w-full"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none w-full"
              />
            </div>
            <input 
              type="text" 
              placeholder="Gamer Tag" 
              className="bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none w-full"
            />
            <select className="bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none w-full">
              <option value="">Select Your Game</option>
              <option value="cod">Call of Duty</option>
              <option value="lol">League of Legends</option>
              <option value="valorant">Valorant</option>
            </select>
            <textarea 
              placeholder="Message (Optional)" 
              rows={4}
              className="bg-black/50 border border-neon-red/30 text-white py-3 px-4 rounded font-rajdhani focus:border-neon-red focus:outline-none w-full resize-none"
            />
            <motion.button
              className="bg-neon-red hover:bg-red-700 text-white font-rajdhani font-bold py-3 px-8 rounded transition-colors shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              SUBMIT REGISTRATION
            </motion.button>
          </motion.div>
          
          <motion.div
            ref={infoAnimation.ref}
            initial={infoAnimation.animationControls.initial}
            animate={infoAnimation.animationControls.animate}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-audiowide text-white mb-4">CONTACT INFORMATION</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-neon-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold">Email</h4>
                  <p className="text-white/80 font-rajdhani">support@xlr8gaming.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-neon-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold">Phone</h4>
                  <p className="text-white/80 font-rajdhani">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-neon-red rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold">Location</h4>
                  <p className="text-white/80 font-rajdhani">123 Gamer Street<br />Los Angeles, CA 90001</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-white font-rajdhani font-bold mb-3">FOLLOW US</h4>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'youtube'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-black/50 border border-neon-red/30 p-2 rounded-full hover:border-neon-red transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 15px var(--neon-red-glow)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer with animation
const Footer = () => {
  const footerAnimation = useFadeInAnimation();
  
  return (
    <footer className="py-12 bg-black border-t border-neon-red/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={footerAnimation.ref}
          initial={footerAnimation.animationControls.initial}
          animate={footerAnimation.animationControls.animate}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <Image 
              src="/images/logo1.jpg" 
              alt="XLR8 Gaming" 
              width={120} 
              height={30} 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="text-white/70 font-rajdhani text-center md:text-left mb-6 md:mb-0">
            <p>© 2025 XLR8 Gaming. All rights reserved.</p>
            <p className="text-sm mt-1">Designed with Next.js and Framer Motion</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="#home" className="text-white/70 hover:text-neon-red transition-colors font-rajdhani text-sm">
              Privacy Policy
            </Link>
            <Link href="#home" className="text-white/70 hover:text-neon-red transition-colors font-rajdhani text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Main landing page component with all sections
export default function AnimatedLandingPage() {
  return (
    <>
      <RepeatingAnimationNavbar />
      <HeroSection />
      <FeaturesSection />
      <GamesShowcase />
      <ShowcaseSection />
      <ContactSection />
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
    </>
  );
}