"use client";

import UserDashboardLayout from '../../../../components/dashboard/UserDashboardLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuestion, FaHeadset, FaTicketAlt, FaSearch, FaChevronDown, FaChevronRight, FaFile, FaPlus, FaInfoCircle, FaPaperPlane, FaRegClock, FaRegCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function SupportPage() {
  // States
  const [activeTab, setActiveTab] = useState('faq');
  const [ticketCategory, setTicketCategory] = useState('');
  const [ticketPriority, setTicketPriority] = useState('medium');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Mock FAQ data
  const faqData = [
    {
      id: 1,
      category: "Tournaments",
      question: "How do I register for a tournament?",
      answer: "To register for a tournament, navigate to the Tournaments page from your dashboard, select the tournament you want to participate in, and click on the 'Register' button. Follow the instructions to complete your registration."
    },
    {
      id: 2,
      category: "Tournaments",
      question: "What happens if I can't attend a tournament I registered for?",
      answer: "If you can't attend a tournament you've registered for, you should cancel your registration at least 24 hours before the tournament starts to receive a refund. To cancel, go to 'My Tournaments' in your dashboard and click on 'Cancel Registration'."
    },
    {
      id: 3,
      category: "Payments",
      question: "How do I withdraw my tournament winnings?",
      answer: "To withdraw your tournament winnings, go to the Wallet section in your dashboard, click on 'Withdraw Funds', select your preferred withdrawal method, enter the amount, and confirm the withdrawal. Processing typically takes 1-3 business days."
    },
    {
      id: 4,
      category: "Payments",
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and popular digital wallets. You can view and manage your payment methods in the Wallet section of your dashboard."
    },
    {
      id: 5,
      category: "Account",
      question: "How do I change my username or profile picture?",
      answer: "To change your username or profile picture, go to your Profile settings in the dashboard. Click on the edit icon next to your username or profile picture to make changes. Note that username changes are limited to once every 30 days."
    },
    {
      id: 6,
      category: "Account",
      question: "How can I enable two-factor authentication?",
      answer: "To enable two-factor authentication, go to your Account Security settings, click on 'Two-Factor Authentication', and follow the setup instructions. We recommend using an authenticator app like Google Authenticator or Authy for added security."
    },
    {
      id: 7,
      category: "Technical",
      question: "What are the minimum system requirements for tournaments?",
      answer: "Minimum system requirements vary by game. Generally, you should have a stable internet connection with at least 10 Mbps download and 5 Mbps upload speeds. For PC games, requirements depend on the specific game. Check the tournament details page for game-specific requirements."
    },
    {
      id: 8,
      category: "Technical",
      question: "I'm experiencing lag during tournaments. What can I do?",
      answer: "If you're experiencing lag during tournaments, try the following: 1) Close unnecessary applications and browser tabs. 2) Connect to the internet via Ethernet cable instead of Wi-Fi. 3) Restart your router. 4) Make sure your game and system are updated to the latest version."
    }
  ];

  // Mock tickets data
  const ticketsData = [
    {
      id: 1,
      subject: "Cannot withdraw tournament winnings",
      category: "Payments",
      priority: "high",
      status: "open",
      created: "2025-09-20T10:30:00",
      updated: "2025-09-21T15:45:00",
      messages: [
        {
          id: 1,
          sender: "user",
          senderName: "You",
          content: "I won the CS:GO Championship tournament on September 15th and received ₹2,500 in my wallet. However, when I try to withdraw the funds to my bank account, I get an error message saying 'Withdrawal failed. Please try again later.' I've tried multiple times over the past few days but keep getting the same error.",
          timestamp: "2025-09-20T10:30:00"
        },
        {
          id: 2,
          sender: "support",
          senderName: "Anuj (Support Agent)",
          content: "Hello, thank you for contacting XLR8 Gaming Support. I apologize for the inconvenience you're experiencing with withdrawing your tournament winnings. I've checked your account and noticed that your bank account details need verification. Please go to the Wallet section, select 'Payment Methods', and verify your bank account by completing the verification process. Once verified, you should be able to withdraw your funds without any issues. If the problem persists, please let me know, and I'll escalate this to our payments team for further investigation.",
          timestamp: "2025-09-21T15:45:00"
        }
      ]
    },
    {
      id: 2,
      subject: "Tournament registration issue",
      category: "Tournaments",
      priority: "medium",
      status: "closed",
      created: "2025-09-10T14:20:00",
      updated: "2025-09-12T11:05:00",
      messages: [
        {
          id: 1,
          sender: "user",
          senderName: "You",
          content: "I'm trying to register for the upcoming Valorant Masters Delhi tournament, but after I complete the payment, I'm not being added to the participants list. The payment was deducted from my wallet, but I don't see my name in the registered players.",
          timestamp: "2025-09-10T14:20:00"
        },
        {
          id: 2,
          sender: "support",
          senderName: "Rahul (Support Agent)",
          content: "Hello, thank you for reaching out to us. I apologize for the inconvenience. I've checked our system and confirmed that your payment was received. The issue appears to be a synchronization delay between our payment system and tournament registration database. I've manually added you to the participants list for the Valorant Masters Delhi tournament. You should now see your name in the registered players. Your team name is 'Team XLR8' with the following teammates: Player1, Player2, and Player3. Please let me know if everything looks correct now.",
          timestamp: "2025-09-11T09:15:00"
        },
        {
          id: 3,
          sender: "user",
          senderName: "You",
          content: "Yes, I can now see my name in the participants list. Thank you for resolving this so quickly!",
          timestamp: "2025-09-11T10:30:00"
        },
        {
          id: 4,
          sender: "support",
          senderName: "Rahul (Support Agent)",
          content: "You're welcome! I'm glad the issue is resolved. We're also implementing a fix to prevent this synchronization issue from happening in the future. If you have any other questions or concerns, please don't hesitate to reach out. Good luck in the tournament!",
          timestamp: "2025-09-12T11:05:00"
        }
      ]
    }
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status badge
  const getStatusBadge = (status) => {
    switch(status) {
      case 'open':
        return <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Open</span>;
      case 'in-progress':
        return <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs">In Progress</span>;
      case 'waiting':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Awaiting Response</span>;
      case 'closed':
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-500 rounded-full text-xs">Closed</span>;
      default:
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-500 rounded-full text-xs">{status}</span>;
    }
  };

  // Handle submit new ticket
  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    alert('Ticket submitted successfully!');
    setTicketCategory('');
    setTicketPriority('medium');
    setTicketSubject('');
    setTicketDescription('');
    setActiveTab('my-tickets');
  };

  // Handle send new message in a ticket
  const handleSendMessage = (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    alert('Message sent successfully!');
    setNewMessage('');
  };

  // Function to render appropriate content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'faq':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Search */}
            <motion.div variants={itemVariants} className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full bg-black/50 border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-red"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            
            {/* FAQ Categories */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["All", "Tournaments", "Payments", "Account", "Technical"].map((category) => (
                <button
                  key={category}
                  className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                    searchTerm === (category === "All" ? "" : category.toLowerCase())
                      ? "bg-neon-red text-white"
                      : "bg-black/50 border border-gray-800 hover:bg-gray-900"
                  }`}
                  onClick={() => setSearchTerm(category === "All" ? "" : category.toLowerCase())}
                >
                  {category}
                </button>
              ))}
            </motion.div>
            
            {/* FAQ List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12 bg-black/50 border border-gray-800 rounded-lg">
                  <FaQuestion className="text-5xl text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No FAQs found</h3>
                  <p className="text-gray-400 mb-4">Try adjusting your search term or category</p>
                  <button 
                    onClick={() => setActiveTab('new-ticket')}
                    className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors"
                  >
                    Create Support Ticket
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-gray-800 rounded-full text-xs mr-3">{faq.category}</span>
                        <h3 className="font-medium">{faq.question}</h3>
                      </div>
                      <FaChevronDown 
                        className={`text-gray-400 transition-transform ${expandedFaq === faq.id ? 'transform rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {expandedFaq === faq.id && (
                      <div className="p-4 pt-0 border-t border-gray-800">
                        <p className="text-gray-400">{faq.answer}</p>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-500">Was this helpful?</div>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                              Yes
                            </button>
                            <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </motion.div>
            
            {/* Create Ticket Section */}
            <motion.div variants={itemVariants} className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-audiowide mb-2">Still need help?</h3>
                <p className="text-gray-400 mb-4">If you couldn't find the answer to your question, our support team is here to help you.</p>
                <button 
                  onClick={() => setActiveTab('new-ticket')}
                  className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors"
                >
                  Create Support Ticket
                </button>
              </div>
            </motion.div>
          </motion.div>
        );
      
      case 'new-ticket':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-audiowide mb-4">Create New Support Ticket</h3>
              
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select a category</option>
                      <option value="tournaments">Tournaments</option>
                      <option value="payments">Payments</option>
                      <option value="account">Account</option>
                      <option value="technical">Technical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Priority</label>
                    <select
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                      value={ticketPriority}
                      onChange={(e) => setTicketPriority(e.target.value)}
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red"
                    placeholder="Brief description of your issue"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red h-32"
                    placeholder="Please provide as much detail as possible about your issue"
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Attachments (Optional)</label>
                  <div className="border border-dashed border-gray-700 rounded-lg p-4 flex items-center justify-center">
                    <FaFile className="text-gray-500 mr-2" />
                    <span className="text-gray-400">Drop files here or click to upload</span>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 flex items-start">
                  <FaInfoCircle className="text-yellow-500 mt-1 mr-3" />
                  <p className="text-sm text-gray-300">
                    Our support team typically responds within 24 hours. For urgent tournament-related issues, please include your tournament ID and the time of your match.
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <button type="submit" className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors">
                    Submit Ticket
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        );
      
      case 'my-tickets':
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {selectedTicket ? (
              // Ticket Detail View
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center mb-2">
                  <button
                    className="bg-gray-800 hover:bg-gray-700 rounded-lg p-2 mr-2"
                    onClick={() => setSelectedTicket(null)}
                  >
                    <FaChevronRight className="transform rotate-180" />
                  </button>
                  <h3 className="text-lg font-medium">Ticket #{selectedTicket.id} - {selectedTicket.subject}</h3>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-800">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gray-400 w-24">Status:</span>
                        {getStatusBadge(selectedTicket.status)}
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 w-24">Category:</span>
                        <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{selectedTicket.category}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 w-24">Priority:</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          selectedTicket.priority === 'high' ? 'bg-red-500/20 text-red-500' :
                          selectedTicket.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                          'bg-green-500/20 text-green-500'
                        }`}>
                          {selectedTicket.priority.charAt(0).toUpperCase() + selectedTicket.priority.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 space-y-2 text-sm text-gray-400">
                      <div>Created: {formatDate(selectedTicket.created)}</div>
                      <div>Last updated: {formatDate(selectedTicket.updated)}</div>
                    </div>
                  </div>
                  
                  {/* Message Thread */}
                  <div className="space-y-4 mb-4">
                    {selectedTicket.messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`p-4 rounded-lg ${
                          message.sender === 'user' 
                            ? 'bg-gray-900/70 ml-4 md:ml-12' 
                            : 'bg-gray-900/40 mr-4 md:mr-12 border-l-4 border-neon-red'
                        }`}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{message.senderName}</span>
                          <span className="text-xs text-gray-500">{formatDate(message.timestamp)}</span>
                        </div>
                        <p className="text-gray-300">{message.content}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Reply Form */}
                  {selectedTicket.status !== 'closed' && (
                    <form onSubmit={handleSendMessage} className="mt-4">
                      <textarea
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-red h-24 mb-4"
                        placeholder="Type your reply here..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        required
                      ></textarea>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-10 h-5 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-red"></div>
                            <span className="ml-3 text-sm">Close ticket after reply</span>
                          </label>
                        </div>
                        <button type="submit" className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors flex items-center">
                          <FaPaperPlane className="mr-2" /> Send Reply
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            ) : (
              // Tickets List View
              <>
                <motion.div variants={itemVariants} className="flex justify-between items-center">
                  <h3 className="text-lg font-audiowide">My Support Tickets</h3>
                  <button 
                    onClick={() => setActiveTab('new-ticket')}
                    className="bg-neon-red hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-bold transition-colors flex items-center"
                  >
                    <FaPlus className="mr-2" /> New Ticket
                  </button>
                </motion.div>
                
                <motion.div variants={itemVariants} className="space-y-4">
                  {ticketsData.length === 0 ? (
                    <div className="text-center py-12 bg-black/50 border border-gray-800 rounded-lg">
                      <FaTicketAlt className="text-5xl text-gray-600 mx-auto mb-4" />
                      <h3 className="text-xl font-medium mb-2">No tickets found</h3>
                      <p className="text-gray-400 mb-4">You haven't created any support tickets yet</p>
                      <button 
                        onClick={() => setActiveTab('new-ticket')}
                        className="bg-neon-red hover:bg-red-700 text-white py-2 px-6 rounded-lg text-sm font-bold transition-colors"
                      >
                        Create Support Ticket
                      </button>
                    </div>
                  ) : (
                    ticketsData.map((ticket) => (
                      <div 
                        key={ticket.id} 
                        className="bg-black/50 border border-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-900/30 transition-colors"
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {ticket.status === 'open' ? (
                                <FaRegClock className="text-green-500" />
                              ) : ticket.status === 'in-progress' ? (
                                <FaHeadset className="text-blue-500" />
                              ) : ticket.status === 'waiting' ? (
                                <FaExclamationCircle className="text-yellow-500" />
                              ) : (
                                <FaRegCheckCircle className="text-gray-500" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{ticket.subject}</h4>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{ticket.category}</span>
                                {getStatusBadge(ticket.status)}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-sm text-gray-400">
                            <div>Created: {formatDate(ticket.created)}</div>
                            <div>Last updated: {formatDate(ticket.updated)}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              </>
            )}
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
            <h1 className="text-2xl font-audiowide mb-2">Support</h1>
            <p className="text-gray-400">Get help with your account, tournaments, and payments</p>
          </div>
        </motion.div>

        {/* Support Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            className={`bg-black/50 border ${activeTab === 'faq' ? 'border-neon-red' : 'border-gray-800'} rounded-lg p-4 cursor-pointer hover:bg-gray-900/30 transition-colors`}
            onClick={() => setActiveTab('faq')}
          >
            <div className="flex items-center">
              <div className={`mr-4 p-3 rounded-lg ${activeTab === 'faq' ? 'bg-neon-red/20' : 'bg-gray-800'}`}>
                <FaQuestion className={activeTab === 'faq' ? 'text-neon-red' : 'text-gray-400'} />
              </div>
              <div>
                <h3 className="font-medium">FAQs</h3>
                <p className="text-sm text-gray-400">Browse frequently asked questions</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`bg-black/50 border ${activeTab === 'new-ticket' ? 'border-neon-red' : 'border-gray-800'} rounded-lg p-4 cursor-pointer hover:bg-gray-900/30 transition-colors`}
            onClick={() => setActiveTab('new-ticket')}
          >
            <div className="flex items-center">
              <div className={`mr-4 p-3 rounded-lg ${activeTab === 'new-ticket' ? 'bg-neon-red/20' : 'bg-gray-800'}`}>
                <FaPlus className={activeTab === 'new-ticket' ? 'text-neon-red' : 'text-gray-400'} />
              </div>
              <div>
                <h3 className="font-medium">New Ticket</h3>
                <p className="text-sm text-gray-400">Create a new support request</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`bg-black/50 border ${activeTab === 'my-tickets' ? 'border-neon-red' : 'border-gray-800'} rounded-lg p-4 cursor-pointer hover:bg-gray-900/30 transition-colors`}
            onClick={() => setActiveTab('my-tickets')}
          >
            <div className="flex items-center">
              <div className={`mr-4 p-3 rounded-lg ${activeTab === 'my-tickets' ? 'bg-neon-red/20' : 'bg-gray-800'}`}>
                <FaTicketAlt className={activeTab === 'my-tickets' ? 'text-neon-red' : 'text-gray-400'} />
              </div>
              <div>
                <h3 className="font-medium">My Tickets</h3>
                <p className="text-sm text-gray-400">View your support requests</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        {renderTabContent()}
      </motion.div>
    </UserDashboardLayout>
  );
}