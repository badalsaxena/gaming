"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaWallet, FaCoins, FaExchangeAlt, FaArrowUp, FaArrowDown, FaMoneyBillWave, FaDownload, FaPlus, FaHistory, FaFilter, FaSearch, FaChevronDown } from 'react-icons/fa';

export default function WalletPage() {
  // States
  const [activeTab, setActiveTab] = useState('overview');
  const [filterOpen, setFilterOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock wallet data
  const walletData = {
    balance: 3250,
    earnings: 5400,
    spent: 2150,
    pendingPayouts: 450
  };

  // Mock transactions data
  const allTransactions = [
    {
      id: 1,
      date: "2025-09-15",
      time: "14:30",
      type: "deposit",
      amount: 1000,
      status: "completed",
      description: "Wallet Deposit via UPI",
      paymentMethod: "UPI"
    },
    {
      id: 2,
      date: "2025-09-12",
      time: "10:15",
      type: "prize",
      amount: 2500,
      status: "completed",
      description: "Tournament Prize - CS:GO Championship",
      tournament: "CS:GO Championship"
    },
    {
      id: 3,
      date: "2025-09-10",
      time: "16:45",
      type: "registration",
      amount: -500,
      status: "completed",
      description: "Tournament Registration - Valorant Masters Delhi",
      tournament: "Valorant Masters Delhi"
    },
    {
      id: 4,
      date: "2025-09-05",
      time: "09:20",
      type: "withdrawal",
      amount: -1200,
      status: "completed",
      description: "Wallet Withdrawal to Bank Account",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 5,
      date: "2025-09-01",
      time: "13:10",
      type: "prize",
      amount: 1500,
      status: "completed",
      description: "Tournament Prize - Fortnite Solo Cup",
      tournament: "Fortnite Solo Cup"
    },
    {
      id: 6,
      date: "2025-08-28",
      time: "20:05",
      type: "registration",
      amount: -300,
      status: "completed",
      description: "Tournament Registration - PUBG Mobile Cup",
      tournament: "PUBG Mobile Cup"
    },
    {
      id: 7,
      date: "2025-08-25",
      time: "11:30",
      type: "deposit",
      amount: 500,
      status: "completed",
      description: "Wallet Deposit via Credit Card",
      paymentMethod: "Credit Card"
    },
    {
      id: 8,
      date: "2025-08-20",
      time: "17:15",
      type: "prize",
      amount: 1000,
      status: "processing",
      description: "Tournament Prize - Free Fire Duo Battle",
      tournament: "Free Fire Duo Battle"
    }
  ];

  // Filter transactions
  const filteredTransactions = allTransactions.filter(transaction => {
    // Filter by search term
    const matchesSearch = 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (transaction.tournament && transaction.tournament.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by transaction type
    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
    
    // Filter by date (simplified for demo)
    let matchesDate = true;
    const txDate = new Date(transaction.date);
    const today = new Date();
    
    if (dateFilter === 'today') {
      const todayStr = today.toISOString().split('T')[0];
      matchesDate = transaction.date === todayStr;
    } else if (dateFilter === 'week') {
      const weekAgo = new Date();
      weekAgo.setDate(today.getDate() - 7);
      matchesDate = txDate >= weekAgo;
    } else if (dateFilter === 'month') {
      const monthAgo = new Date();
      monthAgo.setMonth(today.getMonth() - 1);
      matchesDate = txDate >= monthAgo;
    }
    
    return matchesSearch && matchesType && matchesDate;
  });

  // Get transaction icon by type
  const getTransactionIcon = (type) => {
    switch(type) {
      case 'deposit':
        return <FaArrowUp className="text-green-500" />;
      case 'withdrawal':
        return <FaArrowDown className="text-red-500" />;
      case 'prize':
        return <FaTrophy className="text-yellow-500" />;
      case 'registration':
        return <FaGamepad className="text-blue-500" />;
      default:
        return <FaExchangeAlt className="text-gray-500" />;
    }
  };

  // Get transaction status badge
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>;
      case 'processing':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Processing</span>;
      case 'failed':
        return <span className="px-2 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">Failed</span>;
      default:
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-500 rounded-full text-xs">{status}</span>;
    }
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

  // Function to render appropriate content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Wallet Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div 
                variants={itemVariants} 
                className="bg-gradient-to-br from-neon-red/20 to-neon-red/5 border border-neon-red/30 rounded-xl p-4 flex flex-col h-full"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-neon-red/20 p-2 rounded-lg mr-3">
                    <FaWallet className="text-neon-red" />
                  </div>
                  <span className="text-sm text-gray-400">Current Balance</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-1">₹{walletData.balance}</h3>
                  <p className="text-xs text-gray-500">Available for tournaments & withdrawals</p>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-neon-red hover:bg-red-700 text-white py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center">
                    <FaPlus className="mr-2" /> Add Funds
                  </button>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-black/50 border border-gray-800 rounded-xl p-4"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                    <FaCoins className="text-green-500" />
                  </div>
                  <span className="text-sm text-gray-400">Total Earnings</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">₹{walletData.earnings}</h3>
                <p className="text-xs text-gray-500">Lifetime earnings from tournaments</p>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-black/50 border border-gray-800 rounded-xl p-4"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-red-500/20 p-2 rounded-lg mr-3">
                    <FaExchangeAlt className="text-red-500" />
                  </div>
                  <span className="text-sm text-gray-400">Total Spent</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">₹{walletData.spent}</h3>
                <p className="text-xs text-gray-500">Registration fees & other expenses</p>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-black/50 border border-gray-800 rounded-xl p-4"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                    <FaMoneyBillWave className="text-yellow-500" />
                  </div>
                  <span className="text-sm text-gray-400">Pending Payouts</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">₹{walletData.pendingPayouts}</h3>
                <p className="text-xs text-gray-500">Processing prize payments</p>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-black/50 hover:bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center transition-colors">
                <FaPlus className="mr-2 text-green-500" />
                <span>Add Funds</span>
              </button>
              <button className="bg-black/50 hover:bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center transition-colors">
                <FaDownload className="mr-2 text-blue-500" />
                <span>Withdraw Funds</span>
              </button>
              <button className="bg-black/50 hover:bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center transition-colors">
                <FaHistory className="mr-2 text-purple-500" />
                <span>Transaction History</span>
              </button>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-audiowide">Recent Transactions</h3>
                <button 
                  className="text-neon-red text-sm hover:underline"
                  onClick={() => setActiveTab('transactions')}
                >
                  View All
                </button>
              </div>
              
              <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Description</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400">Amount</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400 hidden md:table-cell">Date</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400 hidden md:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTransactions.slice(0, 5).map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-800">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {getTransactionIcon(transaction.type)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-xs text-gray-500">{transaction.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <span className={transaction.amount >= 0 ? "text-green-500" : "text-red-500"}>
                            {transaction.amount >= 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                          </span>
                        </td>
                        <td className="p-4 text-right hidden md:table-cell">
                          <span className="text-sm text-gray-400">{transaction.date}</span>
                        </td>
                        <td className="p-4 text-right hidden md:table-cell">
                          {getStatusBadge(transaction.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        );
      
      case 'transactions':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full bg-black/50 border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-red"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <button 
                  className="flex items-center bg-black/50 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none hover:bg-gray-900"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <FaFilter className="mr-2 text-gray-400" />
                  <span>Filters</span>
                  <FaChevronDown className={`ml-2 text-gray-400 transition-transform ${filterOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10">
                    <div className="p-4">
                      <h4 className="text-sm font-medium mb-2">Date</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="dateFilter"
                            checked={dateFilter === 'all'}
                            onChange={() => setDateFilter('all')}
                            className="mr-2"
                          />
                          <span>All Time</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="dateFilter"
                            checked={dateFilter === 'today'}
                            onChange={() => setDateFilter('today')}
                            className="mr-2"
                          />
                          <span>Today</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="dateFilter"
                            checked={dateFilter === 'week'}
                            onChange={() => setDateFilter('week')}
                            className="mr-2"
                          />
                          <span>Last 7 Days</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="dateFilter"
                            checked={dateFilter === 'month'}
                            onChange={() => setDateFilter('month')}
                            className="mr-2"
                          />
                          <span>Last 30 Days</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-800 p-4">
                      <h4 className="text-sm font-medium mb-2">Transaction Type</h4>
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
                            checked={typeFilter === 'deposit'}
                            onChange={() => setTypeFilter('deposit')}
                            className="mr-2"
                          />
                          <span>Deposits</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="typeFilter"
                            checked={typeFilter === 'withdrawal'}
                            onChange={() => setTypeFilter('withdrawal')}
                            className="mr-2"
                          />
                          <span>Withdrawals</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="typeFilter"
                            checked={typeFilter === 'prize'}
                            onChange={() => setTypeFilter('prize')}
                            className="mr-2"
                          />
                          <span>Prize Money</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="typeFilter"
                            checked={typeFilter === 'registration'}
                            onChange={() => setTypeFilter('registration')}
                            className="mr-2"
                          />
                          <span>Tournament Registrations</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Transactions Table */}
            <motion.div 
              variants={itemVariants}
              className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden"
            >
              {filteredTransactions.length === 0 ? (
                <div className="p-8 text-center">
                  <FaSearch className="text-4xl text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No transactions found</h3>
                  <p className="text-gray-400">Try adjusting your search or filters</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Description</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400">Amount</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400 hidden md:table-cell">Date & Time</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400 hidden md:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-800 hover:bg-gray-900/30">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {getTransactionIcon(transaction.type)}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <span className={transaction.amount >= 0 ? "text-green-500" : "text-red-500"}>
                            {transaction.amount >= 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                          </span>
                        </td>
                        <td className="p-4 text-right hidden md:table-cell">
                          <span className="text-sm text-gray-400">{transaction.date}</span>
                          <p className="text-xs text-gray-500">{transaction.time}</p>
                        </td>
                        <td className="p-4 text-right hidden md:table-cell">
                          {getStatusBadge(transaction.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </motion.div>
          </motion.div>
        );
      
      case 'payment-methods':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Payment Methods</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                        <FaCreditCard className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Visa ending in 4242</h4>
                        <p className="text-sm text-gray-400">Expires 09/26</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Edit</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Remove</button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-green-500/20 p-2 rounded-lg mr-4">
                        <FaMoneyBillWave className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">UPI - user@okhdfcbank</h4>
                        <p className="text-sm text-gray-400">Instant payments</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Edit</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Remove</button>
                    </div>
                  </div>
                </div>
                
                <button className="w-full border border-dashed border-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-900/50 transition-colors">
                  <FaPlus className="mr-2 text-gray-400" />
                  <span>Add New Payment Method</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Withdrawal Methods</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                        <FaUniversity className="text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">HDFC Bank Account</h4>
                        <p className="text-sm text-gray-400">AC ending in 6789</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Edit</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">Remove</button>
                    </div>
                  </div>
                </div>
                
                <button className="w-full border border-dashed border-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-900/50 transition-colors">
                  <FaPlus className="mr-2 text-gray-400" />
                  <span>Add New Withdrawal Method</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        );
      
      default:
        return null;
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
            <h1 className="text-2xl font-audiowide mb-2">Wallet</h1>
            <p className="text-gray-400">Manage your funds, transactions, and payment methods</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors flex items-center">
              <FaPlus className="mr-2" /> Add Funds
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="border-b border-gray-800">
          <div className="flex space-x-2">
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'overview' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
              {activeTab === 'overview' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
            
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'transactions' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
              {activeTab === 'transactions' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
            
            <button
              className={`pb-3 px-4 font-medium text-sm transition-colors relative ${
                activeTab === 'payment-methods' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('payment-methods')}
            >
              Payment Methods
              {activeTab === 'payment-methods' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-red"
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {renderTabContent()}
      </motion.div>
    </UserDashboardLayout>
  );
}

const FaTrophy = (props) => {
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>;
};

const FaMedal = (props) => {
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>;
};

const FaUniversity = (props) => {
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg>;
};

const FaCreditCard = (props) => {
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg>;
};