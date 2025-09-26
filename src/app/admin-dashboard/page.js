"use client";

import React from 'react';
import AdminDashboardLayout from '../../../components/admin-dashboard/AdminDashboardLayout';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaMoneyBillWave, FaGamepad, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function AdminDashboardPage() {
  const [admin, setAdmin] = useState({ username: 'Admin', email: 'admin@example.com' });

  useEffect(() => {
    // Get admin data from localStorage or API
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
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
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
              <p className="text-gray-400 mt-1">Here&apos;s what&apos;s happening with your gaming platform today</p>
            </div>
            <div>
              <span className="px-4 py-2 bg-neon-red/20 text-neon-red rounded-md border border-neon-red/30 font-rajdhani">
                Admin Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-700 rounded-lg">
                  {stat.icon}
                </div>
                <span className={`text-sm font-rajdhani ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-audiowide mb-1">{stat.value}</h3>
              <p className="text-gray-400 font-rajdhani">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-audiowide mb-4 flex items-center">
              <FaChartLine className="mr-2 text-neon-red" />
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-rajdhani">New user registration</span>
                <span className="text-sm text-gray-400">2 mins ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-rajdhani">Tournament completed: BGMI Masters</span>
                <span className="text-sm text-gray-400">15 mins ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-rajdhani">Payment processed: ₹5,000</span>
                <span className="text-sm text-gray-400">1 hour ago</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-audiowide mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-neon-red hover:bg-neon-red/80 text-white p-3 rounded-lg font-rajdhani transition-colors">
                Add Tournament
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-rajdhani transition-colors">
                Manage Users
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-rajdhani transition-colors">
                View Reports
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-rajdhani transition-colors">
                Settings
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AdminDashboardLayout>
  );
}