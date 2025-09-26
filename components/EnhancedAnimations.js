"use client";
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Custom hook for scroll-based animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    setElementTop(element.offsetTop);
    setClientHeight(window.innerHeight);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled / (elementTop + element.offsetHeight - clientHeight);
      
      if (rate > threshold) {
        element.classList.add('animate-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return ref;
};

// Parallax container component
export const ParallaxContainer = ({ children, className = "", speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
};

// Reveal animation component
export const RevealAnimation = ({ children, direction = "up", delay = 0, className = "" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for multiple elements
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

// Floating animation component
export const FloatingElement = ({ children, className = "", amplitude = 10, duration = 3 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Glitch text component
export const GlitchText = ({ children, className = "", dataText = "" }) => {
  return (
    <span className={`glitch ${className}`} data-text={dataText || children}>
      {children}
    </span>
  );
};

// Animated button with hover effects
export const AnimatedButton = ({ children, className = "", variant = "primary", onClick, href, ...props }) => {
  const baseClasses = "relative overflow-hidden font-rajdhani font-bold tracking-wider transition-all duration-300";
  
  const variants = {
    primary: "neon-button",
    secondary: "glass border-2 border-white/30 text-white hover:border-neon-red hover:text-neon-red",
    ghost: "bg-transparent border-2 border-neon-red text-neon-red hover:bg-neon-red hover:text-white"
  };

  const buttonElement = (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href}>
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};

// Magnetic hover effect
export const MagneticWrapper = ({ children, className = "", strength = 0.3 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
};

// Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-red to-neon-red-bright z-50"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%"
      }}
    />
  );
};

// Text reveal animation
export const TextReveal = ({ children, className = "", delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};