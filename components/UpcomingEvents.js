"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { SectionTitle, AnimatedSection, StaggerContainer, fadeInUp, fadeInLeft, fadeInRight, AnimatedButton } from "./AnimationUtils.js";

export default function UpcomingEvents() {
  const events = [
    {
      title: "World Championship Qualifier",
      date: "October 10-12, 2025",
      prize: "$50,000",
      image: "/images/event1.jpg",
      description: "The final qualifying round for the XLR8 Gaming World Championship. Top 16 players advance.",
    },
    {
      title: "Team Battle Royale",
      date: "November 5-7, 2025",
      prize: "$75,000",
      image: "/images/event2.jpg",
      description: "Form a squad of 4 players and compete against teams from around the world.",
    },
    {
      title: "Regional Masters Series",
      date: "December 15-20, 2025",
      prize: "$100,000",
      image: "/images/event3.jpg",
      description: "Regional tournaments across North America, Europe, Asia, and South America.",
    },
    {
      title: "World Championship Finals",
      date: "January 10-15, 2026",
      prize: "$500,000",
      image: "/images/event4.jpg",
      description: "The ultimate XLR8 Gaming event. The best players compete for the world title and glory.",
    }
  ];

  return (
    <AnimatedSection id="events" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle title="Upcoming Events" />
          <motion.p 
            className="text-center text-white/80 max-w-3xl text-lg font-rajdhani"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Mark your calendar for these epic tournaments. Each event features intense competition,
            professional live streaming, and substantial prize pools for winners.
          </motion.p>
        </div>
        
        <StaggerContainer className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-dark-bg rounded-lg overflow-hidden"
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(255, 0, 0, 0.3)" }}
            >
              <div className="md:w-1/3 relative h-60 md:h-auto bg-gray-800 flex items-center justify-center">
                {/* Placeholder for missing images */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-red/30 to-black/80 flex items-center justify-center">
                  <span className="text-6xl text-white/30 font-audiowide">{index + 1}</span>
                </div>
                <div className="absolute top-0 right-0 bg-neon-red text-white px-4 py-2 font-audiowide z-10">
                  {event.prize}
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-audiowide text-white mb-2 md:mb-0">{event.title}</h3>
                  <span className="bg-black/50 text-neon-red px-3 py-1 rounded font-rajdhani">
                    {event.date}
                  </span>
                </div>
                <p className="text-white/70 font-rajdhani mb-6">{event.description}</p>
                <div className="flex justify-between items-center">
                  <AnimatedButton text="REGISTER NOW" className="text-sm" />
                  <span className="text-white/50 font-rajdhani text-sm">Registration closes 48 hours before event</span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatedButton text="VIEW ALL EVENTS" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}