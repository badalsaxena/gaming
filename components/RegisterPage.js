"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px var(--neon-red-glow)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  },
  tap: { scale: 0.95 }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// The registration form with animations
const RegisterForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    registerType: 'user' // Default to user registration
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (!formState.username) {
      newErrors.username = "Username is required";
    } else if (formState.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    
    // Email validation
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    // Password validation
    if (!formState.password) {
      newErrors.password = "Password is required";
    } else if (formState.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    // Confirm password validation
    if (!formState.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formState.confirmPassword !== formState.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    // Terms and conditions
    if (!formState.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms and Conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Save user to local storage for the demo
      const newUser = {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        role: formState.registerType // Set the role based on registration type
      };
      
      // Simulate API call
      setTimeout(() => {
        // Store user in local storage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        setIsLoading(false);
        setIsSuccess(true);
        
        // Redirect after success animation
        setTimeout(() => {
          // Navigate to login page
          window.location.href = '/login';
        }, 1500);
      }, 2000);
    } else {
      // Shake animation for invalid form
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.div 
      className="relative z-10 w-full max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 
        className="text-4xl sm:text-5xl font-audiowide text-white text-center mb-8"
        variants={titleVariants}
      >
        <span className="text-neon-red">JOIN</span> THE ELITE
      </motion.h1>
      
      {/* Card container */}
      <motion.div 
        className={`auth-card bg-black/60 backdrop-blur-md border border-neon-red/30 rounded-lg p-8 shadow-xl ${isSuccess ? 'shadow-green-500/50' : 'shadow-neon-red/20'}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        variants={itemVariants}
      >
        {/* Success animation overlay */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              className="absolute inset-0 bg-green-500/20 backdrop-blur-sm rounded-lg z-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-black/80 rounded-full p-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.2, 1], 
                  opacity: 1,
                  boxShadow: ["0 0 0px rgba(0, 255, 0, 0)", "0 0 30px rgba(0, 255, 0, 0.8)", "0 0 10px rgba(0, 255, 0, 0.5)"]
                }}
                transition={{ duration: 0.8, times: [0, 0.6, 1] }}
              >
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className={shake ? 'animate-shake' : ''}
          variants={itemVariants}
        >
          {/* Username field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 font-rajdhani text-sm mb-2" htmlFor="username">
              USERNAME
            </label>
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.username ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
                placeholder="Your gaming handle"
              />
              <AnimatePresence>
                {errors.username && (
                  <motion.p 
                    className="text-red-500 text-xs font-rajdhani mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.username}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Email field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 font-rajdhani text-sm mb-2" htmlFor="email">
              EMAIL
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
                placeholder="your-email@example.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p 
                    className="text-red-500 text-xs font-rajdhani mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Password field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 font-rajdhani text-sm mb-2" htmlFor="password">
              PASSWORD
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.password ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
                placeholder="••••••••"
              />
              <AnimatePresence>
                {errors.password && (
                  <motion.p 
                    className="text-red-500 text-xs font-rajdhani mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.password}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Confirm Password field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 font-rajdhani text-sm mb-2" htmlFor="confirmPassword">
              CONFIRM PASSWORD
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formState.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-black/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
                placeholder="••••••••"
              />
              <AnimatePresence>
                {errors.confirmPassword && (
                  <motion.p 
                    className="text-red-500 text-xs font-rajdhani mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Register Type Selection */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 font-rajdhani text-sm mb-2">
              REGISTER AS
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`cursor-pointer rounded-md p-3 flex items-center justify-center transition-all ${
                  formState.registerType === 'user' 
                  ? 'bg-neon-red text-white' 
                  : 'bg-black/50 border border-neon-red/30 text-white/70 hover:bg-black/70'
                }`}
                onClick={() => setFormState({...formState, registerType: 'user'})}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="font-rajdhani font-semibold">USER</span>
                </div>
              </div>
              <div 
                className={`cursor-pointer rounded-md p-3 flex items-center justify-center transition-all ${
                  formState.registerType === 'admin' 
                  ? 'bg-neon-red text-white' 
                  : 'bg-black/50 border border-neon-red/30 text-white/70 hover:bg-black/70'
                }`}
                onClick={() => setFormState({...formState, registerType: 'admin'})}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  <span className="font-rajdhani font-semibold">ADMIN</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Terms and Conditions checkbox */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formState.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 border-neon-red/30 rounded bg-black/50 focus:ring-neon-red"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="text-white/70 font-rajdhani">
                  I agree to the <Link href="#" className="text-neon-red hover:text-white">Terms and Conditions</Link>
                </label>
                <AnimatePresence>
                  {errors.agreeToTerms && (
                    <motion.p 
                      className="text-red-500 text-xs font-rajdhani mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.agreeToTerms}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          
          {/* Submit button */}
          <motion.div className="mb-6" variants={buttonVariants}>
            <motion.button
              type="submit"
              className="w-full bg-neon-red text-white py-3 rounded font-audiowide tracking-wider shadow-glow relative overflow-hidden group"
              disabled={isLoading}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </span>
              
              {/* Button glow effect */}
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-neon-red/0 via-white/20 to-neon-red/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></span>
            </motion.button>
          </motion.div>
          
          {/* Login link */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-white/70 font-rajdhani text-sm">
              Already have an account?{' '}
              <Link 
                href="/login" 
                className="text-neon-red hover:text-white transition-colors font-rajdhani"
              >
                Login
              </Link>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

// Background components are reused from LoginPage
// Background grid animation component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--dark-red)_0%,_black_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,0,0,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,0,0,0.05)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};

// Particles effect component
const ParticlesEffect = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.5 + 0.3
    }));
    
    setParticles(newParticles);
    
    // Animation loop for particles
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100,
          opacity: (Math.sin(Date.now() / 1000 * particle.speed) + 1) / 2 * 0.5 + 0.2
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-neon-red/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px var(--neon-red-glow)`
          }}
        />
      ))}
    </div>
  );
};

// Main Register Page component
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <GridBackground />
      <ParticlesEffect />
      <div className="auth-bg-image"></div>
      
      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/">
          <Image 
            src="/images/logo1.jpg" 
            alt="XLR8 Gaming" 
            width={120} 
            height={30}
            className="h-8 w-auto"
          />
        </Link>
      </motion.div>
      
      {/* Register form container */}
      <RegisterForm />
    </div>
  );
}