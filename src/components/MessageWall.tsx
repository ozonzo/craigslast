
import React, { useState, useEffect } from 'react';

const MessageWall = () => {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { nick: 'RugPullLover91', msg: 'gm kings 🫡', time: '14:20' },
    { nick: 'CoinDaddy69', msg: 'who rugged me???', time: '14:15' },
    { nick: '$CRGLWhale420', msg: 'still holding… i think', time: '14:10' },
    { nick: 'DiamondHands', msg: 'HODL to the moon or grave', time: '14:05' },
    { nick: 'PaperHands', msg: 'sold at the bottom AMA', time: '14:00' },
    { nick: 'ShibaArmy', msg: 'when lambo?', time: '13:55' },
    { nick: 'ElonsBurner', msg: 'dogecoin to mars', time: '13:50' },
    { nick: 'CryptoWidow', msg: 'my husband left me for Bitcoin', time: '13:45' }
  ]);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('craiglast-messages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('craiglast-messages', JSON.stringify(messages));
  }, [messages]);

  const submitMessage = () => {
    if (nickname.trim() && message.trim()) {
      const newMessage = {
        nick: nickname,
        msg: message,
        time: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setMessages(prev => [newMessage, ...prev].slice(0, 50)); // Keep up to 50 messages
      setNickname('');
      setMessage('');
    }
  };

  return (
    <div className="bg-blue-900 border-2 border-blue-400 p-4 mb-6">
      <h3 className="text-blue-400 font-courier text-sm mb-3">
        🧻 Public Chat Wall (Anonymous Chaos)
      </h3>
      
      {/* Message Input */}
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Nickname (DegenKing420)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full border border-blue-400 p-1 font-courier text-xs"
          maxLength={20}
        />
        <input
          type="text"
          placeholder="Your cursed message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-blue-400 p-1 font-courier text-xs"
          maxLength={100}
        />
        <button
          onClick={submitMessage}
          disabled={!nickname.trim() || !message.trim()}
          className="bg-blue-600 text-white px-3 py-1 font-courier text-xs border border-blue-400 hover:bg-blue-700 disabled:opacity-50"
        >
          POST TO THE VOID
        </button>
      </div>
      
      {/* Messages Display */}
      <div className="bg-black border border-blue-400 p-2 max-h-48 overflow-y-auto">
        <div className="text-blue-300 text-xs mb-2">
          📡 LIVE CHAT FEED - SANITY NOT GUARANTEED
        </div>
        {messages.map((msg, index) => (
          <div key={index} className="font-courier text-xs text-blue-200 mb-1">
            <span className="text-yellow-400">[{msg.time}]</span>
            <span className="text-white"> {msg.nick}:</span>
            <span className="text-blue-300"> {msg.msg}</span>
          </div>
        ))}
      </div>
      
      <div className="text-xs text-gray-400 mt-2 font-courier">
        💀 Messages now persist forever in the digital void 💀
      </div>
    </div>
  );
};

export default MessageWall;
