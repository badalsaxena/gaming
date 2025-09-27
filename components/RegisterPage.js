"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

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
  const { login } = useAuth();

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
      newErrors.username = 'Username is required';
    } else if (formState.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    // Email validation
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formState.password) {
      newErrors.password = 'Password is required';
    } else if (formState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Confirm password validation
    if (!formState.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms validation
    if (!formState.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock registration logic
      const userData = {
        id: Date.now(),
        username: formState.username,
        email: formState.email,
        role: formState.registerType === 'admin' ? 'admin' : 'user'
      };
      
      // Use AuthContext login method
      login(userData);
      
      setIsSuccess(true);
      
      // Redirect to HOME PAGE after success (like theesports.club)
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
      
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="relative z-10 w-full max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 border-4 border-green-500 rounded-full flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ✓
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error display */}
        <AnimatePresence>
          {errors.general && (
            <motion.div 
              className="bg-red-500/20 border border-red-500/50 rounded-md p-3 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-red-400 text-sm font-rajdhani">{errors.general}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className={shake ? 'animate-shake' : ''}>
          {/* Username Input */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 text-sm font-rajdhani mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className={`w-full bg-black/50 border ${errors.username ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
              disabled={isLoading}
            />
            <AnimatePresence>
              {errors.username && (
                <motion.p 
                  className="text-red-400 text-sm mt-1 font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.username}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email Input */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 text-sm font-rajdhani mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
              disabled={isLoading}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p 
                  className="text-red-400 text-sm mt-1 font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Password Input */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 text-sm font-rajdhani mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full bg-black/50 border ${errors.password ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
              disabled={isLoading}
            />
            <AnimatePresence>
              {errors.password && (
                <motion.p 
                  className="text-red-400 text-sm mt-1 font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Confirm Password Input */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-white/80 text-sm font-rajdhani mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full bg-black/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-neon-red/30'} text-white py-3 px-4 rounded font-rajdhani focus:outline-none focus:ring-2 focus:ring-neon-red/50 transition-all`}
              disabled={isLoading}
            />
            <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p 
                  className="text-red-400 text-sm mt-1 font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Terms and Conditions Checkbox */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formState.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border-neon-red/30 rounded bg-black/50 focus:ring-neon-red"
                disabled={isLoading}
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-white/70 text-sm font-rajdhani">
                I agree to the{' '}
                <Link href="/terms" className="text-neon-red hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-neon-red hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <AnimatePresence>
              {errors.agreeToTerms && (
                <motion.p 
                  className="text-red-400 text-sm mt-1 font-rajdhani"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.agreeToTerms}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-neon-red text-white py-3 rounded font-audiowide tracking-wider shadow-glow relative overflow-hidden group mb-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center"
                >
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </motion.div>
              ) : (
                <motion.span
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  CREATE ACCOUNT
                </motion.span>
              )}
            </AnimatePresence>
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-neon-red/0 via-white/20 to-neon-red/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></span>
          </motion.button>

          {/* Registration type switcher - MOVED HERE AFTER CREATE ACCOUNT BUTTON */}
          <motion.div 
            className="w-full"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-2 bg-black/40 rounded-lg p-2">
              <motion.button
                type="button"
                onClick={() => setFormState({...formState, registerType: 'user'})}
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-rajdhani font-semibold transition-all duration-300 ease-in-out relative overflow-hidden ${
                  formState.registerType === 'user' 
                    ? 'bg-neon-red text-white shadow-lg shadow-neon-red/30 border border-neon-red' 
                    : 'bg-black/60 border border-neon-red/30 text-white/70 hover:bg-black/80 hover:text-white hover:border-neon-red/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">User Account</span>
                {formState.registerType === 'user' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-red/20 via-neon-red/10 to-neon-red/20"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
              
              <motion.button
                type="button"
                onClick={() => setFormState({...formState, registerType: 'admin'})}
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-rajdhani font-semibold transition-all duration-300 ease-in-out relative overflow-hidden ${
                  formState.registerType === 'admin' 
                    ? 'bg-neon-red text-white shadow-lg shadow-neon-red/30 border border-neon-red' 
                    : 'bg-black/60 border border-neon-red/30 text-white/70 hover:bg-black/80 hover:text-white hover:border-neon-red/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Admin Account</span>
                {formState.registerType === 'admin' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-red/20 via-neon-red/10 to-neon-red/20"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
            </div>
          </motion.div>
        </form>

        {/* Footer Links */}
        <motion.div className="mt-6 text-center" variants={itemVariants}>
          <p className="text-white/60 text-sm font-rajdhani">
            Already have an account?{' '}
            <Link href="/login" className="text-neon-red hover:text-white transition-colors">
              Sign in here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Background grid animation component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--dark-red)_0%,_black_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,0,0,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,0,0,0.05)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
    </div>
  );
};

// Floating particles effect
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <GridBackground />
      <ParticlesEffect />
      <div className="auth-bg-image"></div>
      
      {/* Title moved outside container */}
      <motion.div 
        className="text-center mb-8 z-10"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="text-4xl md:text-5xl font-audiowide text-white mb-2">
          JOIN THE <span className="text-neon-red">BATTLE</span>
        </h1>
        <p className="text-white/60 font-rajdhani text-lg">Create your gaming account</p>
      </motion.div>
      
      {/* Register form container */}
      <RegisterForm />
    </div>
  );
}