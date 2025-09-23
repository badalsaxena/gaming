"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, AnimatedSection, StaggerContainer, fadeInUp, scaleIn, AnimatedInput, AnimatedTextarea, AnimatedButton } from "./AnimationUtils.tsx";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-gradient-to-b from-black to-dark-bg py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle title="Join the Battle" />
          <motion.p
            className="text-center text-white/80 max-w-3xl text-lg font-rajdhani"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Subscribe to our newsletter to get exclusive tournament updates, early access to registration, and special offers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            className="bg-black/50 p-6 lg:p-8 rounded-lg border border-neon-red/20 shadow-glow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl lg:text-2xl font-audiowide mb-6 text-white">Contact Us</h3>
            
            <form className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <AnimatedInput 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div>
                  <AnimatedInput 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <AnimatedInput 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div>
                <AnimatedTextarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  rows={5}
                />
              </div>
              
              <div className="text-center sm:text-right">
                <AnimatedButton text="SEND MESSAGE" className="px-6 lg:px-10 w-full sm:w-auto" />
              </div>
            </form>
          </motion.div>
          
          {/* Right Column - Newsletter & Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Newsletter Subscription */}
            <motion.div 
              className="bg-black/50 p-6 lg:p-8 rounded-lg border border-neon-red/20 shadow-glow"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-audiowide mb-6 text-white">Newsletter</h3>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-grow">
                  <AnimatedInput 
                    type="email" 
                    name="newsletter_email" 
                    placeholder="Your Email Address" 
                    required 
                  />
                </div>
                <AnimatedButton text="SUBSCRIBE" className="w-full sm:w-auto px-6" />
              </div>
              
              <p className="text-white/60 text-sm mt-4 font-rajdhani">
                By subscribing, you agree to receive gaming-related information and marketing communications.
              </p>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-black/50 p-6 lg:p-8 rounded-lg border border-neon-red/20 shadow-glow"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl lg:text-2xl font-audiowide mb-6 text-white">Find Us</h3>
              
              <StaggerContainer className="space-y-4 lg:space-y-5">
                <motion.div 
                  className="flex items-start space-x-3 lg:space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center flex-shrink-0 border border-neon-red/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-audiowide text-base lg:text-lg">Location</h4>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base">Cyber Gaming Tower, 123 E-Sports Avenue</p>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base">Los Angeles, CA 90001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 lg:space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center flex-shrink-0 border border-neon-red/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-audiowide text-base lg:text-lg">Email</h4>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base break-all">info@xlr8gaming.com</p>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base break-all">support@xlr8gaming.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 lg:space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center flex-shrink-0 border border-neon-red/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-audiowide text-base lg:text-lg">Phone</h4>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base">+1 (555) 123-4567</p>
                    <p className="text-white/70 font-rajdhani text-sm lg:text-base">+1 (555) 765-4321</p>
                  </div>
                </motion.div>
                
                {/* Social Media Icons */}
                <motion.div 
                  className="flex flex-wrap justify-center sm:justify-start gap-3 lg:gap-4 mt-4 lg:mt-6 pt-4 border-t border-neon-red/20"
                  variants={fadeInUp}
                >
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center border border-neon-red/30 hover:bg-neon-red/20 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center border border-neon-red/30 hover:bg-neon-red/20 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center border border-neon-red/30 hover:bg-neon-red/20 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center border border-neon-red/30 hover:bg-neon-red/20 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.5 5.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM5.25 9.75v10.5h4.5V9.75h-4.5zm6.75-1.5h4.5v12h-4.5V8.25zm4.5-1.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neon-red/10 flex items-center justify-center border border-neon-red/30 hover:bg-neon-red/20 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5 text-neon-red" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </motion.div>
              </StaggerContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}