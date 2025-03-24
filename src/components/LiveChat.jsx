import React from "react";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; // Import EmailJS

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 How can I help you today?", isUser: false, timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Function to send chat messages to your email
  const sendChatToEmail = async (message) => {
    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Check if we have valid credentials
      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS credentials not properly configured for LiveChat");
        return;
      }
      
      // Send the message to your email
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: "Live Chat Visitor",
          from_email: "livechat@portfolio.com",
          message: `Live Chat Message: ${message}`,
          budget: "Not specified",
        },
        publicKey
      );
      
      console.log("Live chat message sent to email");
    } catch (error) {
      console.error("Error sending live chat to email:", error);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = { 
      id: Date.now(), 
      text: newMessage, 
      isUser: true,
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Send the message to your email
    sendChatToEmail(newMessage);
    
    setIsTyping(true);

    // Simulate automated response after 1-2 seconds
    const responseTime = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! I'll get back to you soon.",
        "I appreciate your interest! I'll review this and respond shortly.",
        "Got it! I'll check this out and follow up with you.",
        "Thanks for reaching out! I'll respond to your inquiry soon."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: randomResponse, 
        isUser: false,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, responseTime);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-light-blue text-white rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FiX size={24} aria-hidden="true" /> : <FiMessageSquare size={24} aria-hidden="true" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-8 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
            role="dialog"
            aria-labelledby="chat-title"
          >
            {/* Chat Header */}
            <div className="bg-light-blue p-4 text-white" id="chat-title">
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <FiClock size={12} aria-hidden="true" />
                <span>Usually replies within an hour</span>
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-light-blue text-white self-end rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start rounded-bl-none"
                  }`}
                >
                  <div className="flex items-center gap-1 mb-1 text-xs opacity-70">
                    {message.isUser ? (
                      <>
                        <span>You</span>
                        <FiUser size={10} aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span>Kaustuv</span>
                      </>
                    )}
                    <span className="ml-auto">{formatTime(message.timestamp)}</span>
                  </div>
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-light-blue"
              />
              <button
                type="submit"
                className="p-2 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;