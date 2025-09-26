"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Icons
import { 
  FaUser, 
  FaTrophy, 
  FaWallet, 
  FaBell, 
  FaChartBar, 
  FaQuestionCircle, 
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function UserDashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ username: "Guest", email: "" });
  const pathname = usePathname();
  const router = useRouter();

  // Load user information from localStorage on component mount
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      // Redirect to login if user is not logged in
      router.push('/login');
    }
  }, [router]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('currentUser');
    // Redirect to login page
    router.push('/login');
  };

  const menuItems = [
    { name: 'Profile', icon: <FaUser />, href: '/dashboard' },
    { name: 'Tournaments', icon: <FaTrophy />, href: '/dashboard/tournaments' },
    { name: 'My Tournaments', icon: <FaTrophy />, href: '/dashboard/my-tournaments' },
    { name: 'Wallet', icon: <FaWallet />, href: '/dashboard/wallet' },
    { name: 'Notifications', icon: <FaBell />, href: '/dashboard/notifications' },
    { name: 'Leaderboard', icon: <FaChartBar />, href: '/dashboard/leaderboard' },
    { name: 'Support', icon: <FaQuestionCircle />, href: '/dashboard/support' },
  ];

  const isActiveLink = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Mobile Header */}
      <div className="md:hidden bg-black border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image 
            src="/images/logo1.jpg" 
            alt="XLR8 Gaming" 
            width={40} 
            height={40} 
          />
          <span className="font-audiowide text-xl">Dashboard</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-800 focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <motion.aside 
          className={`bg-black border-r border-gray-800 w-64 flex-shrink-0 fixed md:sticky top-0 h-screen md:h-auto z-40 transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          initial={false}
        >
          {/* Sidebar Header - Logo */}
          <div className="p-5 border-b border-gray-800 hidden md:flex items-center">
            <Image 
              src="/images/logo1.jpg" 
              alt="XLR8 Gaming" 
              width={40} 
              height={40} 
            />
            <span className="ml-3 font-audiowide text-xl">Dashboard</span>
          </div>

          {/* User Info */}
          <div className="p-5 border-b border-gray-800 flex items-center">
            <div className="w-10 h-10 rounded-full bg-neon-red flex items-center justify-center">
              <span className="font-bold">{user.username ? user.username.substring(0, 2).toUpperCase() : 'GU'}</span>
            </div>
            <div className="ml-3">
              <p className="font-bold">{user.username || 'Guest User'}</p>
              <p className="text-xs text-gray-400">{user.email || 'Sign in to access all features'}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActiveLink(item.href)
                          ? "bg-neon-red text-white"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          setSidebarOpen(false);
                        }
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-gray-800">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                >
                  <span className="mr-3"><FaSignOutAlt /></span>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden bg-gradient-to-b from-gray-900 to-black min-h-screen">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}