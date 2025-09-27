"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../contexts/AuthContext";

export default function ModernNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  
  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Detect active section
      const sections = ["home", "featured-games", "about-tournament", "upcoming-events", "how-to-join", "latest-news", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);
  
  const navItems = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "TOURNAMENTS", href: "#featured-games", id: "featured-games" },
    { name: "SCHEDULE", href: "#upcoming-events", id: "upcoming-events" },
    { name: "NEWS", href: "#latest-news", id: "latest-news" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };
  
  // Don't render anything while loading auth state
  if (isLoading) {
    return null;
  }
  
  return (
    <>
      {/* Main navbar */}
      <header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-strong py-2 border-b border-neon-red/30' 
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="z-50 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/images/loggo.png" 
                  alt="XLR8 Gaming" 
                  width={250} 
                  height={80} 
                  className="h-16 sm:h-14 md:h-16 lg:h-18 w-auto object-contain max-w-[200px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] brightness-110 contrast-110"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <Link 
                    href={item.href}
                    className={`nav-link relative px-4 py-2 rounded-lg text-sm font-rajdhani font-semibold tracking-wider transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-neon-red bg-neon-red/10 shadow-glow'
                        : 'text-white hover:text-neon-red'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
            
            {/* Auth Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated ? (
                // Logged In State
                <div className="user-menu-container relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="neon-button relative overflow-hidden rounded-lg flex items-center space-x-2"
                  >
                    <span className="relative z-10">MY PROFILE</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-neon-red/30 rounded-lg shadow-xl overflow-hidden">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-neon-red/20">
                          <p className="text-sm text-white/60 font-rajdhani">Welcome back!</p>
                          <p className="text-sm text-neon-red font-rajdhani font-semibold">{user?.username || user?.email?.split('@')[0]}</p>
                        </div>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-white hover:text-neon-red hover:bg-neon-red/10 transition-all duration-200 font-rajdhani"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          className="block px-4 py-2 text-sm text-white hover:text-neon-red hover:bg-neon-red/10 transition-all duration-200 font-rajdhani"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Profile
                        </Link>
                        <Link
                          href="/dashboard/tournaments"
                          className="block px-4 py-2 text-sm text-white hover:text-neon-red hover:bg-neon-red/10 transition-all duration-200 font-rajdhani"
                          onClick={() => setShowUserMenu(false)}
                        >
                          My Tournaments
                        </Link>
                        {user?.role === 'admin' && (
                          <Link
                            href="/admin-dashboard"
                            className="block px-4 py-2 text-sm text-white hover:text-neon-red hover:bg-neon-red/10 transition-all duration-200 font-rajdhani"
                            onClick={() => setShowUserMenu(false)}
                          >
                            Admin Panel
                          </Link>
                        )}
                        <div className="border-t border-neon-red/20 mt-2">
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 font-rajdhani"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Not Logged In State
                <div className="flex items-center space-x-3">
                  <Link 
                    href="/login" 
                    className="text-white hover:text-neon-red transition-all duration-300 px-4 py-2 font-rajdhani font-semibold"
                  >
                    LOGIN
                  </Link>
                  <Link 
                    href="/register" 
                    className="neon-button relative overflow-hidden rounded-lg"
                  >
                    <span className="relative z-10">SIGN UP</span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative text-white focus:outline-none z-50 p-3 rounded-lg bg-black/30 border border-neon-red/30 hover:bg-neon-red/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-neon-red shadow-sm transform transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-neon-red shadow-sm transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-neon-red shadow-sm transform transition-all duration-300 ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-red/10 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,64,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="relative flex flex-col items-center h-full p-8 pt-24">
            <div className="w-full max-w-sm space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="group">
                  <Link 
                    href={item.href}
                    className={`block text-xl font-rajdhani font-semibold tracking-wider transition-all duration-300 px-6 py-4 rounded-lg border border-transparent hover:border-neon-red/30 text-center ${
                      activeSection === item.id
                        ? 'text-neon-red bg-neon-red/10 shadow-glow border-neon-red/50'
                        : 'text-white hover:text-neon-red hover:bg-neon-red/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              <div className="mt-6 space-y-3">
                {isAuthenticated ? (
                  <>
                    <Link 
                      href="/dashboard" 
                      className="block bg-neon-red/10 text-neon-red border border-neon-red/50 hover:bg-neon-red/20 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      MY PROFILE
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider text-center"
                    >
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="block bg-transparent text-white border border-neon-red/50 hover:bg-neon-red/10 hover:text-neon-red transition-all duration-300 text-lg px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      LOGIN
                    </Link>
                    <Link 
                      href="/register" 
                      className="block bg-neon-red/10 text-neon-red border border-neon-red/50 hover:bg-neon-red/20 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SIGN UP
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}