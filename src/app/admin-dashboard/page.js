"use client";

import React from 'react';
import AdminDashboardLayout from '../../../components/admin-dashboard/AdminDashboardLayout';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaMoneyBillWave, FaGamepad, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [admin, setAdmin] = useState({ username: 'Admin', email: 'admin@example.com' });
  
  // Load admin information from localStorage on component mount
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.role === 'admin') {
        setAdmin(userData);
      }
    }
  }, []);

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

  // Mock stats data
  const statsData = [
    { label: 'Total Users', value: '3,592', icon: <FaUsers className="text-neon-red" size={24} />, change: '+12%' },
    { label: 'Active Tournaments', value: '24', icon: <FaTrophy className="text-yellow-500" size={24} />, change: '+5%' },
    { label: 'Revenue', value: '₹230,450', icon: <FaMoneyBillWave className="text-green-500" size={24} />, change: '+18%' },
    { label: 'Matches Today', value: '56', icon: <FaGamepad className="text-blue-500" size={24} />, change: '+8%' },
  ];

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
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-audiowide">Welcome back, {admin.username}</h1>
              <p className="text-gray-400 mt-1">Here's what's happening with your gaming platform today</p>
            </div>
            <div>
              <span className="px-4 py-2 bg-neon-red/20 text-neon-red rounded-md border border-neon-red/30 font-rajdhani">
                Admin Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 0, 68, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 font-rajdhani text-sm">{stat.label}</p>
                    <p className="text-2xl font-audiowide mt-1">{stat.value}</p>
                    <span className="text-green-500 text-sm flex items-center mt-2">
                      {stat.change}
                      <FaChartLine className="ml-1" />
                    </span>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div variants={itemVariants} className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-audiowide mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="border-b border-gray-800 pb-3 last:border-0">
                  <div className="flex justify-between">
                    <p className="font-rajdhani">New tournament registration: <span className="text-neon-red">PUBG Mobile Cup</span></p>
                    <span className="text-sm text-gray-500">2h ago</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">User: {['JohnDoe', 'SnipeKing', 'GhostPlayer', 'TitanXL'][index]} registered for the upcoming tournament</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-neon-red hover:text-white transition-colors text-sm font-rajdhani">
              View all activity →
            </button>
          </motion.div>

          {/* Alerts */}
          <motion.div variants={itemVariants} className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-audiowide mb-4">Alerts</h2>
            <div className="space-y-4">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="font-rajdhani font-bold text-red-400">Payment System Warning</p>
                <p className="text-gray-300 text-sm mt-1">Transaction processing has been slower than usual in the last hour.</p>
              </div>
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="font-rajdhani font-bold text-yellow-400">User Reports</p>
                <p className="text-gray-300 text-sm mt-1">5 new user reports about inappropriate chat behavior.</p>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <p className="font-rajdhani font-bold text-green-400">System Update</p>
                <p className="text-gray-300 text-sm mt-1">New matchmaking algorithm has been successfully deployed.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AdminDashboardLayout>
  );
}