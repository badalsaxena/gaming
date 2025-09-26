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
      timestamp: '2025-09-12T09:00:00',
      read: true,
      action: 'Continue',
      actionLink: '/dashboard'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'New Achievement Unlocked',
      message: 'You have unlocked the "First Victory" achievement for winning your first tournament match!',
      timestamp: '2025-09-10T18:45:00',
      read: false,
      action: 'View Achievements',
      actionLink: '/dashboard/profile'
    },
    {
      id: 6,
      type: 'tournament',
      title: 'Tournament Registration Open',
      message: 'Registration is now open for the BGMI Mobile Masters Championship. Early bird discount available!',
      timestamp: '2025-09-08T12:00:00',
      read: true,
      action: 'Register Now',
      actionLink: '/dashboard/tournaments'
    },
    {
      id: 7,
      type: 'team',
      title: 'Team Match Result',
      message: 'Your team "Phoenix Squad" won the match against "Thunder Wolves" in the Call of Duty tournament!',
      timestamp: '2025-09-07T20:30:00',
      read: true,
      action: 'View Results',
      actionLink: '/dashboard/tournaments'
    },
    {
      id: 8,
      type: 'payment',
      title: 'Withdrawal Processed',
      message: 'Your withdrawal request of ₹5,000 has been processed and will be credited to your bank account within 24 hours.',
      timestamp: '2025-09-05T11:15:00',
      read: true,
      action: 'View Transaction',
      actionLink: '/dashboard/wallet'
    },
    {
      id: 9,
      type: 'system',
      title: 'Maintenance Notice',
      message: 'Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM IST. All services will be temporarily unavailable.',
      timestamp: '2025-09-03T16:00:00',
      read: false,
      action: 'Learn More',
      actionLink: '/support'
    },
    {
      id: 10,
      type: 'achievement',
      title: 'Ranking Up',
      message: 'Congratulations! You have been promoted to Silver League based on your recent performance.',
      timestamp: '2025-09-01T14:20:00',
      read: true,
      action: 'View Profile',
      actionLink: '/dashboard/profile'
    }
  ];

  // Filter notifications
  const filteredNotifications = allNotifications.filter(notification => {
    const typeMatch = typeFilter === 'all' || notification.type === typeFilter;
    const readMatch = readFilter === 'all' || 
      (readFilter === 'read' && notification.read) || 
      (readFilter === 'unread' && !notification.read);
    return typeMatch && readMatch;
  });

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'tournament':
        return <FaTrophy className="text-yellow-500" />;
      case 'payment':
        return <FaWallet className="text-green-500" />;
      case 'team':
        return <FaUsers className="text-blue-500" />;
      case 'system':
        return <FaCog className="text-gray-500" />;
      case 'achievement':
        return <FaCheckCircle className="text-purple-500" />;
      default:
        return <FaBell className="text-neon-red" />;
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString();
  };

  // Get notification type color
  const getTypeColor = (type) => {
    switch (type) {
      case 'tournament':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'payment':
        return 'bg-green-500/20 text-green-500';
      case 'team':
        return 'bg-blue-500/20 text-blue-500';
      case 'system':
        return 'bg-gray-500/20 text-gray-500';
      case 'achievement':
        return 'bg-purple-500/20 text-purple-500';
      default:
        return 'bg-neon-red/20 text-neon-red';
    }
  };

  return (
    <UserDashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-audiowide font-bold text-white mb-2">
                  Notifications
                </h1>
                <p className="text-gray-400 font-rajdhani text-lg">
                  Stay updated with your gaming activities
                </p>
              </div>

              {/* Notification Actions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  <FaCheckCircle className="text-green-500" />
                  Mark All Read
                </button>
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  <FaTrash className="text-red-500" />
                  Clear All
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-neon-red" />
                  <span className="text-white font-rajdhani font-semibold">Filters:</span>
                </div>

                {/* Type Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-gray-400 font-rajdhani">Type:</label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-1 font-rajdhani focus:outline-none focus:border-neon-red"
                  >
                    <option value="all">All Types</option>
                    <option value="tournament">Tournament</option>
                    <option value="payment">Payment</option>
                    <option value="team">Team</option>
                    <option value="system">System</option>
                    <option value="achievement">Achievement</option>
                  </select>
                </div>

                {/* Read Status Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-gray-400 font-rajdhani">Status:</label>
                  <select
                    value={readFilter}
                    onChange={(e) => setReadFilter(e.target.value)}
                    className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-1 font-rajdhani focus:outline-none focus:border-neon-red"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                  </select>
                </div>

                {/* Results Count */}
                <div className="ml-auto text-gray-400 font-rajdhani">
                  {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <FaRegBell className="text-6xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-audiowide text-gray-400 mb-2">No Notifications Found</h3>
                <p className="text-gray-500 font-rajdhani">
                  No notifications match your current filter criteria.
                </p>
              </motion.div>
            ) : (
              filteredNotifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`bg-gray-800/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-gray-800/70 transition-all duration-300 ${
                    !notification.read ? 'border-neon-red/50 bg-neon-red/5' : 'border-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Notification Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center">
                      {getNotificationIcon(notification.type)}
                    </div>

                    {/* Notification Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-white font-audiowide font-semibold">
                            {notification.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-rajdhani font-semibold rounded-full ${getTypeColor(notification.type)}`}>
                            {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-neon-red rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-400 font-rajdhani text-sm whitespace-nowrap">
                          {formatTimestamp(notification.timestamp)}
                        </span>
                      </div>

                      <p className="text-gray-300 font-rajdhani mb-3 leading-relaxed">
                        {notification.message}
                      </p>

                      {/* Notification Actions */}
                      <div className="flex items-center justify-between">
                        <button className="text-neon-red hover:text-white font-rajdhani font-semibold transition-colors duration-300">
                          {notification.action}
                        </button>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <button className="text-gray-400 hover:text-white text-sm font-rajdhani transition-colors duration-300">
                              Mark as Read
                            </button>
                          )}
                          <button className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Load More Button (if needed) */}
          {filteredNotifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8"
            >
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300">
                Load More Notifications
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </UserDashboardLayout>
  );
}