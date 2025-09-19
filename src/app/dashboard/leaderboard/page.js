"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaTrophy, FaMedal, FaSearch, FaFilter, FaChevronDown, FaGamepad, FaFire, FaChartLine, FaUsers } from 'react-icons/fa';

export default function LeaderboardPage() {
  // States
  const [gameFilter, setGameFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('monthly');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState('players');

  // Mock leaderboard data
  const leaderboardData = {
    players: [
      {
        id: 1,
        rank: 1,
        username: "ProSniper",
        avatar: "/images/Real.jpg",
        country: "India",
        points: 9850,
        winRate: 72,
        earnings: 12500,
        games: ["Valorant", "CS:GO"]
      },
      {
        id: 2,
        rank: 2,
        username: "XLR8_Ninja",
        avatar: "/images/anuj.jpg",
        country: "India",
        points: 9340,
        winRate: 68,
        earnings: 10200,
        games: ["Fortnite", "PUBG Mobile"]
      },
      {
        id: 3,
        rank: 3,
        username: "EliteGamer99",
        avatar: "/images/Real.jpg",
        country: "India",
        points: 8920,
        winRate: 65,
        earnings: 9800,
        games: ["CS:GO", "Valorant"]
      },
      {
        id: 4,
        rank: 4,
        username: "HeadshotKing",
        avatar: "/images/anuj.jpg",
        country: "India",
        points: 8750,
        winRate: 63,
        earnings: 8500,
        games: ["CS:GO", "Call of Duty"]
      },
      {
        id: 5,
        rank: 5,
        username: "BattleRoyale_Master",
        avatar: "/images/Real.jpg",
        country: "India",
        points: 8600,
        winRate: 61,
        earnings: 7900,
        games: ["PUBG Mobile", "Free Fire"]
      },
      {
        id: 6,
        rank: 6,
        username: "GamingGuru",
        avatar: "/images/anuj.jpg",
        country: "India",
        points: 8450,
        winRate: 60,
        earnings: 7500,
        games: ["Valorant", "Fortnite"]
      },
      {
        id: 7,
        rank: 7,
        username: "TacticalPlayer",
        avatar: "/images/Real.jpg",
        country: "India",
        points: 8200,
        winRate: 58,
        earnings: 7200,
        games: ["CS:GO", "Rainbow Six Siege"]
      },
      {
        id: 8,
        rank: 8,
        username: "FragMachine",
        avatar: "/images/anuj.jpg",
        country: "India",
        points: 8050,
        winRate: 57,
        earnings: 6800,
        games: ["Valorant", "Apex Legends"]
      },
      {
        id: 9,
        rank: 9,
        username: "QuickScope",
        avatar: "/images/Real.jpg",
        country: "India",
        points: 7920,
        winRate: 56,
        earnings: 6500,
        games: ["CS:GO", "Call of Duty"]
      },
      {
        id: 10,
        rank: 10,
        username: "VictoryStreak",
        avatar: "/images/anuj.jpg",
        country: "India",
        points: 7800,
        winRate: 55,
        earnings: 6200,
        games: ["PUBG Mobile", "Free Fire"]
      }
    ],
    teams: [
      {
        id: 1,
        rank: 1,
        name: "XLR8 Esports",
        logo: "/images/xlr8-gaming-logo-small.svg",
        country: "India",
        points: 18650,
        winRate: 75,
        earnings: 52000,
        games: ["Valorant", "CS:GO"]
      },
      {
        id: 2,
        rank: 2,
        name: "Team Elite",
        logo: "/images/team-logos/team1.svg",
        country: "India",
        points: 17800,
        winRate: 72,
        earnings: 48000,
        games: ["CS:GO", "PUBG Mobile"]
      },
      {
        id: 3,
        rank: 3,
        name: "Phoenix Force",
        logo: "/images/team-logos/team2.svg",
        country: "India",
        points: 16900,
        winRate: 68,
        earnings: 45000,
        games: ["Valorant", "Fortnite"]
      },
      {
        id: 4,
        rank: 4,
        name: "Tactical Squad",
        logo: "/images/team-logos/team3.svg",
        country: "India",
        points: 16200,
        winRate: 65,
        earnings: 42000,
        games: ["CS:GO", "Rainbow Six Siege"]
      },
      {
        id: 5,
        rank: 5,
        name: "Strike Force",
        logo: "/images/team-logos/team4.svg",
        country: "India",
        points: 15800,
        winRate: 63,
        earnings: 38000,
        games: ["Valorant", "CS:GO"]
      },
      {
        id: 6,
        rank: 6,
        name: "Victory Warriors",
        logo: "/images/team-logos/team5.svg",
        country: "India",
        points: 15200,
        winRate: 61,
        earnings: 35000,
        games: ["PUBG Mobile", "Free Fire"]
      },
      {
        id: 7,
        rank: 7,
        name: "Apex Predators",
        logo: "/images/team-logos/team6.svg",
        country: "India",
        points: 14900,
        winRate: 59,
        earnings: 32000,
        games: ["Apex Legends", "Call of Duty"]
      },
      {
        id: 8,
        rank: 8,
        name: "Gaming Titans",
        logo: "/images/team-logos/team7.svg",
        country: "India",
        points: 14500,
        winRate: 57,
        earnings: 29000,
        games: ["Valorant", "CS:GO"]
      },
      {
        id: 9,
        rank: 9,
        name: "Domination Squad",
        logo: "/images/team-logos/team8.svg",
        country: "India",
        points: 14100,
        winRate: 55,
        earnings: 26000,
        games: ["PUBG Mobile", "Free Fire"]
      },
      {
        id: 10,
        rank: 10,
        name: "Lethal Gaming",
        logo: "/images/team-logos/team9.svg",
        country: "India",
        points: 13800,
        winRate: 53,
        earnings: 24000,
        games: ["CS:GO", "Valorant"]
      }
    ],
    tournaments: {
      "CS:GO": [
        {
          id: 1,
          rank: 1,
          username: "ProSniper",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 4250,
          matches: 24,
          kills: 352,
          headshots: "68%"
        },
        {
          id: 2,
          rank: 2,
          username: "HeadshotKing",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 4120,
          matches: 22,
          kills: 328,
          headshots: "72%"
        },
        {
          id: 3,
          rank: 3,
          username: "TacticalPlayer",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 3980,
          matches: 21,
          kills: 312,
          headshots: "65%"
        },
        {
          id: 4,
          rank: 4,
          username: "FragMachine",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 3850,
          matches: 20,
          kills: 298,
          headshots: "63%"
        },
        {
          id: 5,
          rank: 5,
          username: "EliteGamer99",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 3720,
          matches: 19,
          kills: 286,
          headshots: "61%"
        }
      ],
      "Valorant": [
        {
          id: 1,
          rank: 1,
          username: "XLR8_Ninja",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 4150,
          matches: 23,
          kills: 342,
          headshots: "64%"
        },
        {
          id: 2,
          rank: 2,
          username: "ProSniper",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 4050,
          matches: 22,
          kills: 335,
          headshots: "67%"
        },
        {
          id: 3,
          rank: 3,
          username: "GamingGuru",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 3920,
          matches: 21,
          kills: 321,
          headshots: "62%"
        },
        {
          id: 4,
          rank: 4,
          username: "EliteGamer99",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 3810,
          matches: 20,
          kills: 308,
          headshots: "60%"
        },
        {
          id: 5,
          rank: 5,
          username: "QuickScope",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 3680,
          matches: 19,
          kills: 294,
          headshots: "59%"
        }
      ],
      "PUBG Mobile": [
        {
          id: 1,
          rank: 1,
          username: "BattleRoyale_Master",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 4320,
          matches: 25,
          kills: 362,
          wins: 8
        },
        {
          id: 2,
          rank: 2,
          username: "XLR8_Ninja",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 4180,
          matches: 24,
          kills: 348,
          wins: 7
        },
        {
          id: 3,
          rank: 3,
          username: "VictoryStreak",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 4050,
          matches: 23,
          kills: 335,
          wins: 6
        },
        {
          id: 4,
          rank: 4,
          username: "TacticalPlayer",
          avatar: "/images/anuj.jpg",
          country: "India",
          points: 3890,
          matches: 22,
          kills: 312,
          wins: 5
        },
        {
          id: 5,
          rank: 5,
          username: "GamingGuru",
          avatar: "/images/Real.jpg",
          country: "India",
          points: 3760,
          matches: 21,
          kills: 298,
          wins: 5
        }
      ]
    }
  };

  // User stats in the leaderboard
  const userStats = {
    rank: 34,
    username: "YourUsername",
    avatar: "/images/anuj.jpg",
    country: "India",
    points: 5420,
    winRate: 48,
    earnings: 3500,
    games: ["Valorant", "CS:GO"]
  };

  // Filter data based on search and filters
  const getFilteredData = () => {
    if (selectedLeaderboard === 'players') {
      return leaderboardData.players.filter(player => 
        player.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (gameFilter === 'all' || player.games.includes(gameFilter))
      );
    } else if (selectedLeaderboard === 'teams') {
      return leaderboardData.teams.filter(team => 
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (gameFilter === 'all' || team.games.includes(gameFilter))
      );
    } else if (selectedLeaderboard === 'games' && gameFilter !== 'all') {
      return leaderboardData.tournaments[gameFilter] || [];
    }
    
    return [];
  };

  const filteredData = getFilteredData();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  // Get medal icon for top ranks
  const getMedalIcon = (rank) => {
    switch(rank) {
      case 1:
        return <FaTrophy className="text-yellow-500" />;
      case 2:
        return <FaMedal className="text-gray-400" />;
      case 3:
        return <FaMedal className="text-amber-700" />;
      default:
        return null;
    }
  };

  // Function to render appropriate leaderboard based on selection
  const renderLeaderboard = () => {
    if (selectedLeaderboard === 'players') {
      return (
        <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="bg-gray-900/70 border-b border-gray-800">
                  <th className="p-4 text-left text-sm font-medium text-gray-400 w-[80px]">Rank</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-400">Player</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Points</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Win Rate</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Earnings</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Games</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((player) => (
                  <tr 
                    key={player.id} 
                    className={`border-b border-gray-800 ${player.username === userStats.username ? 'bg-neon-red/10' : 'hover:bg-gray-900/30'}`}
                  >
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        {getMedalIcon(player.rank)}
                        <span className={`ml-1 ${player.rank <= 3 ? 'font-bold' : ''}`}>#{player.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 mr-3">
                          <Image
                            src={player.avatar}
                            alt={player.username}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{player.username}</p>
                          <p className="text-xs text-gray-500">{player.country}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{player.points.toLocaleString()}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{player.winRate}%</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">₹{player.earnings.toLocaleString()}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {player.games.map((game, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-800 rounded-full text-xs"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Your Position */}
          <div className="bg-gray-900/70 p-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <span className="font-bold">#{userStats.rank}</span>
                </div>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={userStats.avatar}
                      alt={userStats.username}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{userStats.username} <span className="text-sm text-gray-400">(You)</span></p>
                    <p className="text-xs text-gray-500">{userStats.country}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Points</p>
                  <p className="font-medium">{userStats.points.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Win Rate</p>
                  <p className="font-medium">{userStats.winRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Earnings</p>
                  <p className="font-medium">₹{userStats.earnings.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedLeaderboard === 'teams') {
      return (
        <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="bg-gray-900/70 border-b border-gray-800">
                  <th className="p-4 text-left text-sm font-medium text-gray-400 w-[80px]">Rank</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-400">Team</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Points</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Win Rate</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Earnings</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Games</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((team) => (
                  <tr 
                    key={team.id} 
                    className={`border-b border-gray-800 ${team.name === "XLR8 Esports" ? 'bg-neon-red/10' : 'hover:bg-gray-900/30'}`}
                  >
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        {getMedalIcon(team.rank)}
                        <span className={`ml-1 ${team.rank <= 3 ? 'font-bold' : ''}`}>#{team.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 mr-3">
                          <Image
                            src={team.logo}
                            alt={team.name}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{team.name}</p>
                          <p className="text-xs text-gray-500">{team.country}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{team.points.toLocaleString()}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{team.winRate}%</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">₹{team.earnings.toLocaleString()}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {team.games.map((game, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-800 rounded-full text-xs"
                          >
                            {game}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (selectedLeaderboard === 'games') {
      if (gameFilter === 'all') {
        return (
          <div className="text-center py-12 bg-black/50 border border-gray-800 rounded-lg">
            <FaGamepad className="text-5xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Select a Game</h3>
            <p className="text-gray-400 mb-6">Please select a specific game to view its leaderboard</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => setGameFilter('Valorant')}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Valorant
              </button>
              <button 
                onClick={() => setGameFilter('CS:GO')}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
              >
                CS:GO
              </button>
              <button 
                onClick={() => setGameFilter('PUBG Mobile')}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
              >
                PUBG Mobile
              </button>
            </div>
          </div>
        );
      }
      
      return (
        <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="bg-gray-900/70 border-b border-gray-800">
                  <th className="p-4 text-left text-sm font-medium text-gray-400 w-[80px]">Rank</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-400">Player</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Points</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Matches</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">Kills</th>
                  <th className="p-4 text-center text-sm font-medium text-gray-400">
                    {gameFilter === 'PUBG Mobile' ? 'Wins' : 'Headshots'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((player) => (
                  <tr 
                    key={player.id} 
                    className={`border-b border-gray-800 ${player.username === userStats.username ? 'bg-neon-red/10' : 'hover:bg-gray-900/30'}`}
                  >
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        {getMedalIcon(player.rank)}
                        <span className={`ml-1 ${player.rank <= 3 ? 'font-bold' : ''}`}>#{player.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 mr-3">
                          <Image
                            src={player.avatar}
                            alt={player.username}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{player.username}</p>
                          <p className="text-xs text-gray-500">{player.country}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{player.points.toLocaleString()}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{player.matches}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">{player.kills}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-medium">
                        {gameFilter === 'PUBG Mobile' ? player.wins : player.headshots}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
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
            <h1 className="text-2xl font-audiowide mb-2">Leaderboard</h1>
            <p className="text-gray-400">Track the top players, teams, and your ranking</p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 flex items-center">
            <div className="mr-4 bg-blue-500/20 p-3 rounded-lg">
              <FaChartLine className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Your Rank</p>
              <p className="text-2xl font-bold">#{userStats.rank}</p>
            </div>
          </div>
          
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 flex items-center">
            <div className="mr-4 bg-purple-500/20 p-3 rounded-lg">
              <FaTrophy className="text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Your Points</p>
              <p className="text-2xl font-bold">{userStats.points.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 flex items-center">
            <div className="mr-4 bg-red-500/20 p-3 rounded-lg">
              <FaFire className="text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Win Rate</p>
              <p className="text-2xl font-bold">{userStats.winRate}%</p>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard Type Selector */}
        <motion.div variants={itemVariants} className="flex border-b border-gray-800 pb-1">
          <button
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
              selectedLeaderboard === 'players' 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setSelectedLeaderboard('players')}
          >
            Players
            {selectedLeaderboard === 'players' && (
              <motion.div
                layoutId="leaderboardTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
              />
            )}
          </button>
          
          <button
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
              selectedLeaderboard === 'teams' 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setSelectedLeaderboard('teams')}
          >
            Teams
            {selectedLeaderboard === 'teams' && (
              <motion.div
                layoutId="leaderboardTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
              />
            )}
          </button>
          
          <button
            className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
              selectedLeaderboard === 'games' 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setSelectedLeaderboard('games')}
          >
            Game Specific
            {selectedLeaderboard === 'games' && (
              <motion.div
                layoutId="leaderboardTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
              />
            )}
          </button>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder={`Search ${selectedLeaderboard === 'players' ? 'players' : selectedLeaderboard === 'teams' ? 'teams' : 'players'}...`}
              className="w-full bg-black/50 border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={selectedLeaderboard === 'games'}
            />
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center bg-black/50 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none hover:bg-gray-900 w-full md:w-auto justify-between"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <div className="flex items-center">
                <FaFilter className="mr-2 text-gray-400" />
                <span>Filters</span>
              </div>
              <FaChevronDown className={`ml-2 text-gray-400 transition-transform ${filterOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <h4 className="text-sm font-medium mb-2">Game</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gameFilter"
                        checked={gameFilter === 'all'}
                        onChange={() => setGameFilter('all')}
                        className="mr-2"
                      />
                      <span>All Games</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gameFilter"
                        checked={gameFilter === 'CS:GO'}
                        onChange={() => setGameFilter('CS:GO')}
                        className="mr-2"
                      />
                      <span>CS:GO</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gameFilter"
                        checked={gameFilter === 'Valorant'}
                        onChange={() => setGameFilter('Valorant')}
                        className="mr-2"
                      />
                      <span>Valorant</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gameFilter"
                        checked={gameFilter === 'PUBG Mobile'}
                        onChange={() => setGameFilter('PUBG Mobile')}
                        className="mr-2"
                      />
                      <span>PUBG Mobile</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 p-4">
                  <h4 className="text-sm font-medium mb-2">Time Period</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="timeFilter"
                        checked={timeFilter === 'all-time'}
                        onChange={() => setTimeFilter('all-time')}
                        className="mr-2"
                      />
                      <span>All Time</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="timeFilter"
                        checked={timeFilter === 'monthly'}
                        onChange={() => setTimeFilter('monthly')}
                        className="mr-2"
                      />
                      <span>This Month</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="timeFilter"
                        checked={timeFilter === 'weekly'}
                        onChange={() => setTimeFilter('weekly')}
                        className="mr-2"
                      />
                      <span>This Week</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          {renderLeaderboard()}
        </motion.div>
      </motion.div>
    </UserDashboardLayout>
  );
}