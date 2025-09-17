"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    {
      title: "TOURNAMENTS",
      links: [
        { name: "Current Season", href: "#" },
        { name: "Schedule", href: "#" },
        { name: "Rules & Regulations", href: "#" },
        { name: "Past Winners", href: "#" },
      ]
    },
    {
      title: "GAMES",
      links: [
        { name: "Shadow Strike", href: "#" },
        { name: "Cyber Legends", href: "#" },
        { name: "Royal Warfare", href: "#" },
        { name: "All Games", href: "#" },
      ]
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Discord Community", href: "#" },
        { name: "Technical Support", href: "#" },
      ]
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-black relative">
      {/* Diagonal line divider */}
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
        <div className="w-full h-16 bg-dark-bg transform -skew-y-2 origin-top-left"></div>
      </div>
      
      {/* Footer content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Logo and social */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image 
                src="/images/xlr8-gaming-logo-small.svg" 
                alt="XLR8 Gaming" 
                width={180} 
                height={45}
                className="mb-6"
              />
            </Link>
            
            <p className="text-white/60 text-sm font-rajdhani mb-6">
              The premier gaming tournament platform for competitive gamers around the world.
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'youtube', 'discord', 'twitch'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-red transition-colors"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="text-white">{/* Icon would go here */}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="lg:col-span-1">
              <h3 className="text-white font-audiowide text-lg mb-4">
                {column.title}
              </h3>
              
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * linkIndex + 0.3 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-neon-red transition-colors text-sm font-rajdhani"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-audiowide text-lg mb-2">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-white/60 text-sm font-rajdhani">
                Get the latest news and updates on tournaments, events, and exclusive offers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded flex-grow font-rajdhani focus:outline-none focus:border-neon-red"
              />
              <button className="bg-neon-red hover:bg-red-700 transition-colors text-white py-2 px-6 rounded font-rajdhani font-bold whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm font-rajdhani mb-4 md:mb-0">
            © 2025 XLR8 Gaming. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Code of Conduct', 'Legal'].map((item, index) => (
              <Link 
                key={index} 
                href="#"
                className="text-white/50 hover:text-white text-xs font-rajdhani"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}