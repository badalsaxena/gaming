"use client";

import AdminDashboardLayout from '../../../components/admin/AdminDashboardLayout';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaTrophy, 
  FaMoneyBillWave, 
  FaUserCheck,
  FaExclamationTriangle,
  FaChartLine 
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDashboard() {
  // Mock data for the admin dashboard
  const dashboardStats = {
    totalUsers: 5842,
    activeTournaments: 12,
    completedTournaments: 48,
    pendingPayouts: 18,
    totalRevenue: "₹2,45,000",
    revenueGrowth: "+12%",
    activeUsers: 1254,
    userGrowth: "+8%",
    pendingVerifications: 24
  };

  // Mock recent tournaments
  const recentTournaments = [
    {
      id: 1,
      name: "Valorant Masters Delhi",
      status: "ongoing",
      registrations: 64,
      prize: "₹50,000",
      startDate: "2025-09-15",
      endDate: "2025-09-22"
    },
    {
      id: 2,
      name: "PUBG Mobile India Series",
      status: "upcoming",
      registrations: 128,
      prize: "₹1,00,000",
      startDate: "2025-09-25",
      endDate: "2025-10-05"
    },
    {
      id: 3,
      name: "CS:GO Championship",
      status: "completed",
      registrations: 32,
      prize: "₹25,000",
      startDate: "2025-09-01",
      endDate: "2025-09-10"
    }
  ];

  // Mock recent users
  const recentUsers = [
    {
      id: 1,
      username: "AkshayGamer",
      joinDate: "2025-09-18",
      status: "active",
      tournaments: 5,
      kyc: "verified"
    },
    {
      id: 2,
      username: "RajeshSniper",
      joinDate: "2025-09-17",
      status: "active",
      tournaments: 2,
      kyc: "pending"
    },
    {
      id: 3,
      username: "GamerGirl99",
      joinDate: "2025-09-16",
      status: "active",
      tournaments: 3,
      kyc: "verified"
    }
  ];

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

  const getStatusColor = (status) => {
    switch(status) {
      case 'ongoing':
        return 'bg-blue-500/20 text-blue-500';
      case 'upcoming':
        return 'bg-purple-500/20 text-purple-500';
      case 'completed':
        return 'bg-green-500/20 text-green-500';
      case 'cancelled':
        return 'bg-red-500/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <AdminDashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Welcome Header */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-audiowide">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome back, Admin</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm">
                <FaExclamationTriangle className="inline mr-1" /> 
                {dashboardStats.pendingVerifications} pending verifications
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-black/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-2">
              <FaUsers className="text-blue-500 text-xl mr-2" />
              <h3 className="font-semibold">Total Users</h3>
            </div>
            <p className="text-2xl font-bold">{dashboardStats.totalUsers}</p>
            <p className="text-sm text-green-500">{dashboardStats.userGrowth} this month</p>
          </div>
          
          <div className="bg-black/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-2">
              <FaTrophy className="text-blue-500 text-xl mr-2" />
              <h3 className="font-semibold">Active Tournaments</h3>
            </div>
            <p className="text-2xl font-bold">{dashboardStats.activeTournaments}</p>
            <p className="text-sm text-gray-400">{dashboardStats.completedTournaments} completed</p>
          </div>
          
          <div className="bg-black/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-2">
              <FaMoneyBillWave className="text-blue-500 text-xl mr-2" />
              <h3 className="font-semibold">Total Revenue</h3>
            </div>
            <p className="text-2xl font-bold">{dashboardStats.totalRevenue}</p>
            <p className="text-sm text-green-500">{dashboardStats.revenueGrowth} this month</p>
          </div>
          
          <div className="bg-black/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-2">
              <FaUserCheck className="text-blue-500 text-xl mr-2" />
              <h3 className="font-semibold">Active Users</h3>
            </div>
            <p className="text-2xl font-bold">{dashboardStats.activeUsers}</p>
            <p className="text-sm text-gray-400">last 7 days</p>
          </div>
        </motion.div>

        {/* Recent Tournaments */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-audiowide">Recent Tournaments</h2>
            <Link href="/admin/tournaments" className="text-blue-500 hover:underline text-sm">
              View all
            </Link>
          </div>
          
          <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-800">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left p-4">Tournament</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Registrations</th>
                  <th className="text-left p-4">Prize Pool</th>
                  <th className="text-left p-4">Dates</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentTournaments.map((tournament) => (
                  <tr key={tournament.id} className="border-t border-gray-800">
                    <td className="p-4 font-medium">{tournament.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tournament.status)}`}>
                        {tournament.status}
                      </span>
                    </td>
                    <td className="p-4">{tournament.registrations}</td>
                    <td className="p-4">{tournament.prize}</td>
                    <td className="p-4 text-sm">{tournament.startDate} to {tournament.endDate}</td>
                    <td className="p-4">
                      <Link href={`/admin/tournaments/${tournament.id}`} className="text-blue-500 hover:underline text-sm">
                        Manage
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Users */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-audiowide">Recent Users</h2>
            <Link href="/admin/users" className="text-blue-500 hover:underline text-sm">
              View all
            </Link>
          </div>
          
          <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-800">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left p-4">Username</th>
                  <th className="text-left p-4">Join Date</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Tournaments</th>
                  <th className="text-left p-4">KYC Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id} className="border-t border-gray-800">
                    <td className="p-4 font-medium">{user.username}</td>
                    <td className="p-4">{user.joinDate}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">{user.tournaments}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.kyc === 'verified' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {user.kyc}
                      </span>
                    </td>
                    <td className="p-4">
                      <Link href={`/admin/users/${user.id}`} className="text-blue-500 hover:underline text-sm">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Analytics Chart Placeholder */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-audiowide">Revenue Analytics</h2>
            <Link href="/admin/analytics" className="text-blue-500 hover:underline text-sm">
              View detailed reports
            </Link>
          </div>
          
          <div className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 p-4">
            <div className="flex items-center justify-center h-64 border border-dashed border-gray-700 rounded-lg">
              <div className="text-center">
                <FaChartLine className="text-5xl text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Analytics chart would go here in a real application</p>
                <Link href="/admin/analytics" className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                  View Analytics
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AdminDashboardLayout>
  );
}