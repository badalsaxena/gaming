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

// The login form with animations
const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    rememberMe: false,
    loginType: 'user' // Default to user login
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
      
      // Mock login logic
      const userData = {
        id: 1,
        email: formState.email,
        username: formState.email.split('@')[0],
        role: formState.loginType === 'admin' ? 'admin' : 'user'
      };
      
      // Store user data
      localStorage.setItem('currentUser', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      
      setIsSuccess(true);
      
      // Redirect after success
      setTimeout(() => {
        if (formState.loginType === 'admin') {
          window.location.href = '/admin-dashboard';
        } else {
          window.location.href = '/dashboard';
        }
      }, 2000);
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
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
        
        {/* Login type switcher */}
        <motion.div 
          className="flex mb-6 bg-black/30 rounded-lg p-1"
          variants={itemVariants}
        >
          <button
            type="button"
            onClick={() => setFormState({...formState, loginType: 'user'})}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-rajdhani font-semibold transition-all ${
              formState.loginType === 'user' 
                ? 'bg-neon-red text-white' 
                : 'bg-black/50 border border-neon-red/30 text-white/70 hover:bg-black/70'
            }`}
          >
            User Login
          </button>
          <button
            type="button"
            onClick={() => setFormState({...formState, loginType: 'admin'})}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-rajdhani font-semibold transition-all ${
              formState.loginType === 'admin' 
                ? 'bg-neon-red text-white' 
                : 'bg-black/50 border border-neon-red/30 text-white/70 hover:bg-black/70'
            }`}
          >
            Admin Login
          </button>
        </motion.div>

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
          {/* Email Input */}
          <motion.div className="mb-6" variants={itemVariants}>
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
          <motion.div className="mb-6" variants={itemVariants}>
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

          {/* Remember Me Checkbox */}
          <motion.div className="flex items-center mb-6" variants={itemVariants}>
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formState.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 border-neon-red/30 rounded bg-black/50 focus:ring-neon-red"
              disabled={isLoading}
            />
            <label htmlFor="rememberMe" className="ml-2 text-white/70 text-sm font-rajdhani">
              Remember me
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-neon-red text-white py-3 rounded font-audiowide tracking-wider shadow-glow relative overflow-hidden group"
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
                  Logging in...
                </motion.div>
              ) : (
                <motion.span
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  LOGIN
                </motion.span>
              )}
            </AnimatePresence>
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-neon-red/0 via-white/20 to-neon-red/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></span>
          </motion.button>
        </form>

        {/* Footer Links */}
        <motion.div className="mt-6 text-center" variants={itemVariants}>
          <p className="text-white/60 text-sm font-rajdhani">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-neon-red hover:text-white transition-colors">
              Sign up here
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

// Main Login Page component
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <GridBackground />
      <ParticlesEffect />
      <div className="auth-bg-image"></div>
      
      {/* Login form container */}
      <LoginForm />
    </div>
  );
}