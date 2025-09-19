"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBell, FaTrophy, FaUsers, FaCalendarAlt, FaWallet, FaExclamationCircle, FaCheckCircle, FaCog, FaTrash, FaRegBell, FaFilter, FaChevronDown } from 'react-icons/fa';

export default function NotificationsPage() {
  // States
  const [filterOpen, setFilterOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState('all');
  const [readFilter, setReadFilter] = useState('all');

  // Mock notifications data
  const allNotifications = [
    {
      id: 1,
      type: 'tournament',
      title: 'Tournament Starting Soon',
      message: 'Your Valorant Masters Delhi tournament starts in 2 hours. Make sure to check in 30 minutes before the match.',
      timestamp: '2025-09-25T16:00:00',
      read: false,
      action: 'View Tournament',
      actionLink: '/dashboard/tournaments/1'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Prize Money Received',
      message: 'Congratulations! ₹2,000 prize money from Fortnite Solo Cup has been credited to your wallet.',
      timestamp: '2025-09-15T10:30:00',
      read: true,
      action: 'View Wallet',
      actionLink: '/dashboard/wallet'
    },
    {
      id: 3,
      type: 'team',
      title: 'Team Invitation',
      message: 'Player123 has invited you to join their team "Elite Gamers" for the upcoming CS:GO Championship.',
      timestamp: '2025-09-14T14:15:00',
      read: false,
      action: 'View Invitation',
      actionLink: '/dashboard/teams'
    },
    {
      id: 4,
      type: 'system',
      title: 'Account Verification',
      message: 'Your account has been successfully verified. You now have access to all tournaments.',
      timestamp: '2025-09-10T09:45:00',
      read: true,
      action: 'View Profile',
      actionLink: '/dashboard/profile'
    },
    {
      id: 5,
      type: 'tournament',
      title: 'Tournament Registration Successful',
      message: 'You have successfully registered for PUBG Mobile Cup. The tournament starts on 27th September, 2025.',
      timestamp: '2025-09-05T18:20:00',
      read: true,
      action: 'View Tournament',
      actionLink: '/dashboard/tournaments/2'
    },
    {
      id: 6,
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment of ₹500 for tournament registration has been processed successfully.',
      timestamp: '2025-09-05T18:15:00',
      read: true,
      action: 'View Receipt',
      actionLink: '/dashboard/wallet'
    },
    {
      id: 7,
      type: 'system',
      title: 'Platform Maintenance',
      message: 'XLR8 Gaming platform will undergo maintenance on 30th September from 2:00 AM to 5:00 AM IST.',
      timestamp: '2025-09-01T12:00:00',
      read: false,
      action: null,
      actionLink: null
    },
    {
      id: 8,
      type: 'tournament',
      title: 'Match Schedule Updated',
      message: 'The schedule for your upcoming CS:GO Championship match has been updated. Please check the tournament details.',
      timestamp: '2025-08-28T16:30:00',
      read: true,
      action: 'View Schedule',
      actionLink: '/dashboard/tournaments/3'
    }
  ];

  // Filter notifications
  const filteredNotifications = allNotifications.filter(notification => {
    // Filter by type
    const matchesType = typeFilter === 'all' || notification.type === typeFilter;
    
    // Filter by read status
    const matchesReadStatus = 
      readFilter === 'all' || 
      (readFilter === 'read' && notification.read) || 
      (readFilter === 'unread' && !notification.read);
    
    return matchesType && matchesReadStatus;
  });

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

  // Get notification icon by type
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'tournament':
        return <FaTrophy className="text-blue-500" />;
      case 'payment':
        return <FaWallet className="text-green-500" />;
      case 'team':
        return <FaUsers className="text-purple-500" />;
      case 'system':
        return <FaCog className="text-yellow-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  // Format timestamp to relative time
  const formatRelativeTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) {
      return 'Just now';
    } else if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    // In a real app, this would update the backend
    alert('All notifications marked as read');
  };

  // Mark single notification as read
  const markAsRead = (id) => {
    // In a real app, this would update the backend
    alert(`Notification ${id} marked as read`);
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    // In a real app, this would update the backend
    alert('All notifications cleared');
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
            <h1 className="text-2xl font-audiowide mb-2">Notifications</h1>
            <p className="text-gray-400">Stay updated with tournament alerts, team invites, and system messages</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button 
              onClick={markAllAsRead}
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center"
            >
              <FaCheckCircle className="mr-2" /> Mark All Read
            </button>
            <button 
              onClick={clearAllNotifications}
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center"
            >
              <FaTrash className="mr-2" /> Clear All
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow flex items-center bg-black/50 border border-gray-800 rounded-lg py-2 px-4">
            <FaRegBell className="text-gray-400 mr-3" />
            <div>
              <span className="text-sm text-gray-400">You have </span>
              <span className="font-medium">{allNotifications.filter(n => !n.read).length} unread </span>
              <span className="text-sm text-gray-400">notifications</span>
            </div>
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
                  <h4 className="text-sm font-medium mb-2">Notification Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="typeFilter"
                        checked={typeFilter === 'all'}
                        onChange={() => setTypeFilter('all')}
                        className="mr-2"
                      />
                      <span>All Types</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="typeFilter"
                        checked={typeFilter === 'tournament'}
                        onChange={() => setTypeFilter('tournament')}
                        className="mr-2"
                      />
                      <span>Tournament</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="typeFilter"
                        checked={typeFilter === 'payment'}
                        onChange={() => setTypeFilter('payment')}
                        className="mr-2"
                      />
                      <span>Payment</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="typeFilter"
                        checked={typeFilter === 'team'}
                        onChange={() => setTypeFilter('team')}
                        className="mr-2"
                      />
                      <span>Team</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="typeFilter"
                        checked={typeFilter === 'system'}
                        onChange={() => setTypeFilter('system')}
                        className="mr-2"
                      />
                      <span>System</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 p-4">
                  <h4 className="text-sm font-medium mb-2">Status</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="readFilter"
                        checked={readFilter === 'all'}
                        onChange={() => setReadFilter('all')}
                        className="mr-2"
                      />
                      <span>All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="readFilter"
                        checked={readFilter === 'read'}
                        onChange={() => setReadFilter('read')}
                        className="mr-2"
                      />
                      <span>Read</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="readFilter"
                        checked={readFilter === 'unread'}
                        onChange={() => setReadFilter('unread')}
                        className="mr-2"
                      />
                      <span>Unread</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Notifications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {filteredNotifications.length === 0 ? (
            <motion.div variants={itemVariants} className="text-center py-12 bg-black/50 border border-gray-800 rounded-lg">
              <FaBell className="text-5xl text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-audiowide mb-2">No notifications</h3>
              <p className="text-gray-400">You don't have any notifications at the moment</p>
            </motion.div>
          ) : (
            filteredNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                variants={itemVariants}
                className={`${
                  notification.read ? 'bg-black/50' : 'bg-black/80 border-l-4 border-l-neon-red'
                } border border-gray-800 rounded-lg p-4 transition-colors hover:bg-gray-900/30`}
              >
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-gray-800 p-2 rounded-lg">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{notification.title}</h3>
                        <p className="text-gray-400 mt-1">{notification.message}</p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 md:mt-0 md:ml-4 md:text-right whitespace-nowrap">
                        {formatRelativeTime(notification.timestamp)}
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {notification.action && (
                        <a href={notification.actionLink} className="bg-neon-red hover:bg-red-700 text-white py-1 px-3 rounded text-xs font-medium transition-colors">
                          {notification.action}
                        </a>
                      )}
                      
                      {!notification.read && (
                        <button 
                          onClick={() => markAsRead(notification.id)}
                          className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-xs transition-colors"
                        >
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Notification Settings */}
        <motion.div variants={itemVariants} className="bg-black/50 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-audiowide mb-4">Notification Settings</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div>
                <h4 className="font-medium">Tournament Notifications</h4>
                <p className="text-sm text-gray-400">Upcoming matches, results, and registrations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div>
                <h4 className="font-medium">Payment Notifications</h4>
                <p className="text-sm text-gray-400">Deposits, withdrawals, and prize money</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div>
                <h4 className="font-medium">Team Notifications</h4>
                <p className="text-sm text-gray-400">Team invites and updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div>
                <h4 className="font-medium">System Notifications</h4>
                <p className="text-sm text-gray-400">Platform updates and maintenance alerts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-400">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-gray-400">Receive notifications on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-red"></div>
              </label>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg text-sm transition-colors">
              Save Preferences
            </button>
          </div>
        </motion.div>
      </motion.div>
    </UserDashboardLayout>
  );
}