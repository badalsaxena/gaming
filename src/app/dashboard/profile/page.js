"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaUser, FaEdit, FaSave, FaTimes, FaCamera } from 'react-icons/fa';

export default function ProfilePage() {
  // States
  const [user, setUser] = useState({ username: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    bio: "",
    location: "",
    phoneNumber: ""
  });

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      
      // Initialize form data
      setFormData({
        username: parsedUser.username || "",
        fullName: parsedUser.fullName || "",
        bio: parsedUser.bio || "",
        location: parsedUser.location || "",
        phoneNumber: parsedUser.phoneNumber || ""
      });
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Save profile changes
  const saveChanges = () => {
    // Update user object with form data
    const updatedUser = {
      ...user,
      username: formData.username,
      fullName: formData.fullName,
      bio: formData.bio,
      location: formData.location,
      phoneNumber: formData.phoneNumber
    };

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
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
            <h1 className="text-2xl font-audiowide mb-2">My Profile</h1>
            <p className="text-gray-400">View and edit your profile information</p>
          </div>
          <div className="mt-4 md:mt-0">
            {isEditing ? (
              <div className="flex space-x-3">
                <button 
                  onClick={saveChanges}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors flex items-center"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg text-sm transition-colors flex items-center"
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors flex items-center"
              >
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            )}
          </div>
        </motion.div>

        {/* Profile Content */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Picture & Basic Info */}
          <div className="space-y-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center">
              <div className="relative mx-auto w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full bg-neon-red flex items-center justify-center text-5xl">
                  {user.username ? user.username.substring(0, 2).toUpperCase() : 'GU'}
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                    <FaCamera className="text-white" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-audiowide">{user.username}</h2>
              <p className="text-gray-400">{user.email}</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="px-3 py-1 bg-neon-red/20 text-neon-red rounded-full text-xs">Pro Player</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs">Level 25</span>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Account Stats</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-medium">September 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Tournaments Played</p>
                  <p className="font-medium">8</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Tournaments Won</p>
                  <p className="font-medium">2</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Earnings</p>
                  <p className="font-medium">₹5,400</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Personal Information</h3>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Username</p>
                      <p className="font-medium">{formData.username || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Full Name</p>
                      <p className="font-medium">{formData.fullName || "Not specified"}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Bio</p>
                    <p className="font-medium">{formData.bio || "No bio added yet."}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">{formData.location || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone Number</p>
                      <p className="font-medium">{formData.phoneNumber || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Gaming Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Favorite Games</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Valorant</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">CS:GO</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">PUBG Mobile</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Game Accounts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Valorant</span>
                      <span className="text-sm text-gray-400">BadalSniper#9876</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Steam</span>
                      <span className="text-sm text-gray-400">BadalSniper_XLR8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Account Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-gray-400">Last changed 30 days ago</p>
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-400">Protect your account with 2FA</p>
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Connected Accounts</p>
                    <p className="text-sm text-gray-400">Manage your linked accounts</p>
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </UserDashboardLayout>
  );
}