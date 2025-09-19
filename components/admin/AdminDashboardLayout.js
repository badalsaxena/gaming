"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Icons
import { 
  FaUsers, 
  FaTrophy, 
  FaMoneyBillWave, 
  FaCheckCircle, 
  FaNewspaper, 
  FaChartLine, 
  FaHeadset,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome
} from 'react-icons/fa';

export default function AdminDashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, href: '/admin' },
    { name: 'User Management', icon: <FaUsers />, href: '/admin/users' },
    { name: 'Tournament Management', icon: <FaTrophy />, href: '/admin/tournaments' },
    { name: 'Payments & Finance', icon: <FaMoneyBillWave />, href: '/admin/payments' },
    { name: 'Match & Results', icon: <FaCheckCircle />, href: '/admin/matches' },
    { name: 'Content Management', icon: <FaNewspaper />, href: '/admin/content' },
    { name: 'Analytics', icon: <FaChartLine />, href: '/admin/analytics' },
    { name: 'Support Tools', icon: <FaHeadset />, href: '/admin/support' },
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
            src="/images/xlr8-gaming-logo-small.svg" 
            alt="XLR8 Gaming" 
            width={40} 
            height={40} 
          />
          <span className="font-audiowide text-xl">Admin</span>
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
              src="/images/xlr8-gaming-logo-small.svg" 
              alt="XLR8 Gaming" 
              width={40} 
              height={40} 
            />
            <span className="ml-3 font-audiowide text-xl">Admin Panel</span>
          </div>

          {/* Admin Info */}
          <div className="p-5 border-b border-gray-800 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="font-bold">AD</span>
            </div>
            <div className="ml-3">
              <p className="font-bold">Admin</p>
              <p className="text-xs text-gray-400">Super Admin</p>
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
                          ? "bg-blue-600 text-white"
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
                <Link href="/logout">
                  <div className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                    <span className="mr-3"><FaSignOutAlt /></span>
                    <span>Logout</span>
                  </div>
                </Link>
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