"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { SectionTitle, AnimatedSection, StaggerContainer, fadeInUp, fadeInLeft, fadeInRight, AnimatedButton } from "./AnimationUtils.tsx";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Call of Duty Championship",
      date: "October 10-12, 2025",
      prize: "$50,000",
      image: "/images/cod.jpg",
      description: "Ultimate tactical warfare competition. Master your aim and strategy in intense multiplayer combat.",
    },
    {
      title: "BGMI Battle Royale Tournament",
      date: "November 5-7, 2025",
      prize: "$75,000",
      image: "/images/bgmi.jpg",
      description: "Epic mobile battle royale showdown. Survive, strategize, and conquer in this high-stakes competition.",
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
              <div className="md:w-1/3 relative h-60 md:h-auto bg-gray-800 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
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
                  <AnimatedButton text="REGISTER NOW" className="text-sm" href="/register" />
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