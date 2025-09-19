"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrophy, FaClock, FaCheckCircle, FaTimesCircle, FaGamepad, FaUsers, FaCalendarAlt, FaEye } from 'react-icons/fa';

export default function MyTournaments() {
  // Tab state
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock tournaments data
  const myTournaments = {
    upcoming: [
      {
        id: 1,
        name: "Valorant Masters Delhi",
        game: "Valorant",
        image: "/images/game1.svg",
        date: "2025-09-25",
        time: "18:00 IST",
        teamName: "Team XLR8",
        teammates: ["Player1", "Player2", "Player3", "Player4"],
        entryFee: 500,
        status: "registered",
        nextMatch: "2025-09-25 18:00 IST"
      },
      {
        id: 2,
        name: "PUBG Mobile Cup",
        game: "PUBG Mobile",
        image: "/images/game2.svg",
        date: "2025-09-27",
        time: "20:00 IST",
        teamName: "Team XLR8",
        teammates: ["Player1", "Player2", "Player3"],
        entryFee: 300,
        status: "registered",
        nextMatch: "2025-09-27 20:00 IST"
      }
    ],
    ongoing: [
      {
        id: 3,
        name: "CS:GO Championship",
        game: "CS:GO",
        image: "/images/game1.svg",
        date: "2025-09-15",
        time: "17:00 IST",
        teamName: "Team XLR8",
        teammates: ["Player1", "Player2", "Player3", "Player4"],
        entryFee: 600,
        status: "quarterfinals",
        nextMatch: "2025-09-19 15:30 IST",
        opponent: "Team Strikers",
        wins: 2,
        losses: 0
      }
    ],
    completed: [
      {
        id: 4,
        name: "Fortnite Solo Cup",
        game: "Fortnite",
        image: "/images/game3.svg",
        date: "2025-09-10",
        time: "19:00 IST",
        entryFee: 200,
        status: "completed",
        position: 3,
        prize: "₹2,000",
        stats: {
          kills: 15,
          wins: 1,
          matches: 4
        }
      },
      {
        id: 5,
        name: "Free Fire Duo Battle",
        game: "Free Fire",
        image: "/images/game2.svg",
        date: "2025-09-05",
        time: "16:00 IST",
        teamName: "BadalSniper Duo",
        teammates: ["Player1"],
        entryFee: 150,
        status: "completed",
        position: 7,
        prize: "₹0",
        stats: {
          kills: 8,
          wins: 0,
          matches: 3
        }
      }
    ]
  };

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

  // Function to get status badge style
  const getStatusBadge = (status) => {
    switch(status) {
      case 'registered':
        return <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs">Registered</span>;
      case 'quarterfinals':
      case 'semifinals':
      case 'finals':
        return <span className="px-2 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs capitalize">{status}</span>;
      case 'completed':
        return <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>;
      default:
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-500 rounded-full text-xs">{status}</span>;
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
            <h1 className="text-2xl font-audiowide mb-2">My Tournaments</h1>
            <p className="text-gray-400">View and manage your tournament registrations</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="border-b border-gray-800">
          <div className="flex space-x-2">
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'upcoming' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
              {activeTab === 'upcoming' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
            
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'ongoing' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('ongoing')}
            >
              Ongoing
              {activeTab === 'ongoing' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
            
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'completed' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
              {activeTab === 'completed' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Tournament Lists */}
        {activeTab === 'upcoming' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {myTournaments.upcoming.length === 0 ? (
              <motion.div variants={itemVariants} className="text-center py-12">
                <FaTrophy className="text-5xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-audiowide mb-2">No upcoming tournaments</h3>
                <p className="text-gray-400 mb-4">You haven't registered for any upcoming tournaments.</p>
                <Link href="/dashboard/tournaments">
                  <button className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors">
                    Browse Tournaments
                  </button>
                </Link>
              </motion.div>
            ) : (
              myTournaments.upcoming.map((tournament) => (
                <motion.div
                  key={tournament.id}
                  variants={itemVariants}
                  className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 relative h-40 md:h-auto">
                      <Image
                        src={tournament.image}
                        alt={tournament.game}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        {getStatusBadge(tournament.status)}
                      </div>
                    </div>
                    
                    <div className="p-4 md:w-3/4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="font-audiowide text-lg mb-1">{tournament.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{tournament.game}</p>
                        </div>
                        <div className="flex items-center mb-4 md:mb-0">
                          <FaClock className="text-neon-red mr-2" />
                          <span className="text-sm">{tournament.nextMatch}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Team</p>
                          <p className="font-medium">{tournament.teamName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Teammates</p>
                          <p className="font-medium">{tournament.teammates.join(', ')}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Entry Fee</p>
                          <p className="font-medium">₹{tournament.entryFee}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/dashboard/tournaments/${tournament.id}`}>
                          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <FaEye className="mr-2" /> View Details
                          </button>
                        </Link>
                        <button className="bg-red-900/50 hover:bg-red-900 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                          <FaTimesCircle className="mr-2" /> Cancel Registration
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {activeTab === 'ongoing' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {myTournaments.ongoing.length === 0 ? (
              <motion.div variants={itemVariants} className="text-center py-12">
                <FaGamepad className="text-5xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-audiowide mb-2">No ongoing tournaments</h3>
                <p className="text-gray-400">You're not participating in any ongoing tournaments.</p>
              </motion.div>
            ) : (
              myTournaments.ongoing.map((tournament) => (
                <motion.div
                  key={tournament.id}
                  variants={itemVariants}
                  className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 relative h-40 md:h-auto">
                      <Image
                        src={tournament.image}
                        alt={tournament.game}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        {getStatusBadge(tournament.status)}
                      </div>
                    </div>
                    
                    <div className="p-4 md:w-3/4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="font-audiowide text-lg mb-1">{tournament.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{tournament.game}</p>
                        </div>
                        <div className="flex items-center mb-4 md:mb-0">
                          <FaClock className="text-neon-red mr-2" />
                          <span className="text-sm">{tournament.nextMatch}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Team</p>
                          <p className="font-medium">{tournament.teamName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Next Opponent</p>
                          <p className="font-medium">{tournament.opponent}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Record</p>
                          <p className="font-medium">
                            <span className="text-green-500">{tournament.wins}W</span> - <span className="text-red-500">{tournament.losses}L</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                        <p className="text-sm">
                          <span className="font-bold text-purple-400">Next Match:</span> Your match against {tournament.opponent} is scheduled for {tournament.nextMatch}. Make sure to check in 30 minutes before the match.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/dashboard/tournaments/${tournament.id}`}>
                          <button className="bg-neon-red hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-bold transition-colors flex items-center">
                            <FaEye className="mr-2" /> View Tournament Details
                          </button>
                        </Link>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                          <FaCheckCircle className="mr-2" /> Check In
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {activeTab === 'completed' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {myTournaments.completed.length === 0 ? (
              <motion.div variants={itemVariants} className="text-center py-12">
                <FaMedal className="text-5xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-audiowide mb-2">No completed tournaments</h3>
                <p className="text-gray-400">You haven't participated in any tournaments yet.</p>
              </motion.div>
            ) : (
              myTournaments.completed.map((tournament) => (
                <motion.div
                  key={tournament.id}
                  variants={itemVariants}
                  className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 relative h-40 md:h-auto">
                      <Image
                        src={tournament.image}
                        alt={tournament.game}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        {getStatusBadge(tournament.status)}
                      </div>
                    </div>
                    
                    <div className="p-4 md:w-3/4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="font-audiowide text-lg mb-1">{tournament.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{tournament.game}</p>
                        </div>
                        <div className="flex items-center mb-4 md:mb-0">
                          <FaCalendarAlt className="text-neon-red mr-2" />
                          <span className="text-sm">{tournament.date}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Position</p>
                          <p className="font-medium">
                            {tournament.position === 1 && <span className="text-yellow-500">#1 (Champion)</span>}
                            {tournament.position === 2 && <span className="text-gray-300">#2 (Runner Up)</span>}
                            {tournament.position === 3 && <span className="text-amber-700">#3 (3rd Place)</span>}
                            {tournament.position > 3 && <span>#{tournament.position}</span>}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Prize</p>
                          <p className="font-medium">{tournament.prize}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Performance</p>
                          <p className="font-medium">
                            {tournament.stats.kills} kills • {tournament.stats.wins} wins
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/dashboard/tournaments/${tournament.id}`}>
                          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <FaEye className="mr-2" /> View Results
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </motion.div>
    </UserDashboardLayout>
  );
}