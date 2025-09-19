"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFilter, FaSearch, FaGamepad, FaCalendarAlt, FaTrophy, FaUsers } from 'react-icons/fa';

export default function Tournaments() {
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [gameFilter, setGameFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock tournaments data
  const allTournaments = [
    {
      id: 1,
      name: "Valorant Masters Delhi",
      game: "Valorant",
      image: "/images/game1.svg",
      date: "2025-09-25",
      time: "18:00 IST",
      entryFee: 500,
      prizePool: "₹50,000",
      totalSlots: 16,
      filledSlots: 12,
      format: "5v5",
      type: "team"
    },
    {
      id: 2,
      name: "PUBG Mobile Cup",
      game: "PUBG Mobile",
      image: "/images/game2.svg",
      date: "2025-09-27",
      time: "20:00 IST",
      entryFee: 300,
      prizePool: "₹25,000",
      totalSlots: 100,
      filledSlots: 87,
      format: "Squad",
      type: "team"
    },
    {
      id: 3,
      name: "Fortnite Solo Showdown",
      game: "Fortnite",
      image: "/images/game3.svg",
      date: "2025-09-30",
      time: "19:00 IST",
      entryFee: 200,
      prizePool: "₹15,000",
      totalSlots: 50,
      filledSlots: 28,
      format: "Solo",
      type: "solo"
    },
    {
      id: 4,
      name: "CS:GO Pro League",
      game: "CS:GO",
      image: "/images/game1.svg",
      date: "2025-10-05",
      time: "17:00 IST",
      entryFee: 600,
      prizePool: "₹75,000",
      totalSlots: 8,
      filledSlots: 5,
      format: "5v5",
      type: "team"
    },
    {
      id: 5,
      name: "Call of Duty Mobile Clash",
      game: "Call of Duty Mobile",
      image: "/images/game2.svg",
      date: "2025-10-10",
      time: "21:00 IST",
      entryFee: 250,
      prizePool: "₹20,000",
      totalSlots: 32,
      filledSlots: 15,
      format: "5v5",
      type: "team"
    },
    {
      id: 6,
      name: "Free Fire Max Solo Cup",
      game: "Free Fire Max",
      image: "/images/game3.svg",
      date: "2025-10-12",
      time: "16:00 IST",
      entryFee: 100,
      prizePool: "₹10,000",
      totalSlots: 48,
      filledSlots: 22,
      format: "Solo",
      type: "solo"
    }
  ];

  // Games list for filter
  const games = ['Valorant', 'PUBG Mobile', 'Fortnite', 'CS:GO', 'Call of Duty Mobile', 'Free Fire Max'];

  // Filter tournaments
  const filteredTournaments = allTournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tournament.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = gameFilter === 'all' || tournament.game === gameFilter;
    const matchesType = typeFilter === 'all' || tournament.type === typeFilter;
    
    return matchesSearch && matchesGame && matchesType;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <UserDashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-audiowide mb-2">Tournaments</h1>
            <p className="text-gray-400">Browse and join upcoming gaming tournaments</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tournaments..."
                className="bg-black/50 border border-gray-800 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:border-neon-red/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <button 
              className={`p-2 rounded-lg border ${showFilters ? 'border-neon-red/50 bg-neon-red/10' : 'border-gray-800 bg-black/50'}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter className={showFilters ? 'text-neon-red' : 'text-gray-400'} />
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div 
            variants={itemVariants}
            className="bg-black/50 border border-gray-800 rounded-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Game</label>
                <select 
                  className="bg-black/50 border border-gray-800 rounded-lg p-2 w-full focus:outline-none focus:border-neon-red/50"
                  value={gameFilter}
                  onChange={(e) => setGameFilter(e.target.value)}
                >
                  <option value="all">All Games</option>
                  {games.map((game, index) => (
                    <option key={index} value={game}>{game}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Type</label>
                <select 
                  className="bg-black/50 border border-gray-800 rounded-lg p-2 w-full focus:outline-none focus:border-neon-red/50"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="solo">Solo</option>
                  <option value="team">Team</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button 
                  className="bg-neon-red hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-bold transition-colors w-full"
                  onClick={() => {
                    setGameFilter('all');
                    setTypeFilter('all');
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tournaments Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <div 
              key={tournament.id}
              className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-red/50 transition-all hover:shadow-glow flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={tournament.image}
                  alt={tournament.game}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-3 right-3 bg-neon-red px-2 py-1 rounded text-xs font-bold">
                  {tournament.prizePool}
                </div>
                <div className="absolute bottom-3 left-3 flex flex-col">
                  <h3 className="font-audiowide text-lg text-white">{tournament.name}</h3>
                  <p className="text-gray-300 text-sm">{tournament.game}</p>
                </div>
              </div>
              
              <div className="p-4 flex-grow">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-neon-red mr-2 text-sm" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaGamepad className="text-neon-red mr-2 text-sm" />
                    <span className="text-sm">{tournament.format}</span>
                  </div>
                  <div className="flex items-center">
                    <FaTrophy className="text-neon-red mr-2 text-sm" />
                    <span className="text-sm">₹{tournament.entryFee} Entry</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-neon-red mr-2 text-sm" />
                    <span className="text-sm">{tournament.filledSlots}/{tournament.totalSlots} Teams</span>
                  </div>
                </div>
                
                {/* Progress bar for slots */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                  <div 
                    className="bg-neon-red h-2 rounded-full" 
                    style={{ width: `${(tournament.filledSlots / tournament.totalSlots) * 100}%` }}
                  ></div>
                </div>
                
                <Link href={`/dashboard/tournaments/${tournament.id}`}>
                  <button className="bg-neon-red hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-bold transition-colors w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        
        {filteredTournaments.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <FaTrophy className="text-5xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-audiowide mb-2">No tournaments found</h3>
            <p className="text-gray-400">Try adjusting your filters or check back later for new tournaments.</p>
          </motion.div>
        )}
      </motion.div>
    </UserDashboardLayout>
  );
}