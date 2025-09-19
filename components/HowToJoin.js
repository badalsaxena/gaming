"use client";
import { motion } from "framer-motion";
import React from "react";
import { SectionTitle, AnimatedSection, StaggerContainer, fadeInUp, scaleIn, AnimatedButton } from "./AnimationUtils.tsx";

export default function HowToJoin() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up with your email and verify your account. Complete your player profile with gaming handles and preferred platforms."
    },
    {
      number: "02",
      title: "Choose Your Tournament",
      description: "Browse upcoming events, check eligibility requirements, and select tournaments that match your skill level and schedule."
    },
    {
      number: "03",
      title: "Register & Pay Entry Fee",
      description: "Complete your registration by paying the entry fee. All payments are secured and various payment methods are accepted."
    },
    {
      number: "04",
      title: "Prepare For Battle",
      description: "Receive tournament details, schedule, and rules. Join the Discord server to connect with staff and other participants."
    },
    {
      number: "05",
      title: "Compete & Win",
      description: "Show up on time for your matches, follow all rules, and play your best. Winners receive prizes via their registered payment methods."
    }
  ];

  return (
    <AnimatedSection id="how-to-join" className="bg-dark-bg py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle title="How To Join" />
          <motion.p 
            className="text-center text-white/80 max-w-3xl text-lg font-rajdhani"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Joining XLR8 Gaming tournaments is simple. Follow these steps to begin your journey 
            to becoming a champion in the most competitive gaming tournaments.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-red/0 via-neon-red to-neon-red/0 transform -translate-x-1/2 hidden md:block"></div>
          
          <StaggerContainer className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Step Number */}
                <motion.div 
                  className="flex-shrink-0 w-20 h-20 bg-black rounded-full flex items-center justify-center z-10 border-2 border-neon-red shadow-glow"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)" 
                  }}
                >
                  <span className="text-2xl font-audiowide text-neon-red">{step.number}</span>
                </motion.div>
                
                {/* Content */}
                <div className={`flex-1 bg-black/50 p-6 rounded-lg border border-neon-red/20 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-audiowide mb-3 text-white">{step.title}</h3>
                  <p className="text-white/70 font-rajdhani">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatedButton text="JOIN NOW" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}