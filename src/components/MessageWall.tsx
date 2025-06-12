
import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  nickname: string;
  message: string;
  timestamp: string;
}

const MessageWall = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  // Fake messages to populate the wall
  const fakeMessages: Message[] = [
    { id: '1', nickname: 'RugPullLover91', message: 'gm kings 🫡', timestamp: '12:34' },
    { id: '2', nickname: 'CoinDaddy69', message: 'who rugged me???', timestamp: '12:35' },
    { id: '3', nickname: '$CRGLWhale420', message: 'still holding... i think', timestamp: '12:36' },
    { id: '4', nickname: 'DiamondHandzForever', message: 'HODL or die', timestamp: '12:37' },
    { id: '5', nickname: 'PumpAndDumpKing', message: 'next 100x incoming trust me bro', timestamp: '12:38' },
    { id: '6', nickname: 'CrytoMommy', message: 'my son lost the house again', timestamp: '12:39' },
    { id: '7', nickname: 'LunaVictim2022', message: 'never again... maybe', timestamp: '12:40' },
    { id: '8', nickname: 'MetaversePioneer', message: 'buying virtual land in the void', timestamp: '12:41' }
  ];

  useEffect(() => {
    setMessages(fakeMessages);
  }, []);

  const submitMessage = () => {
    if (nickname && message) {
      const newMessage: Message = {
        id: Date.now().toString(),
        nickname,
        message,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      
      setMessages(prev => [newMessage, ...prev].slice(0, 20)); // Keep only latest 20
      setNickname('');
      setMessage('');
    }
  };

  return (
    <div className="bg-purple-100 border-2 border-purple-500 p-4 mb-6">
      <h3 className="font-times text-lg font-bold text-purple-800 mb-3">
        🧻 Public Chat Wall
      </h3>
      
      {/* Message Input */}
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Nickname (be creative)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full border border-purple-400 p-2 font-courier text-xs"
          maxLength={20}
        />
        <input
          type="text"
          placeholder="Your cursed/funny message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-purple-400 p-2 font-courier text-xs"
          maxLength={100}
        />
        <button
          onClick={submitMessage}
          disabled={!nickname || !message}
          className="bg-purple-600 text-white px-4 py-1 font-courier text-xs border border-purple-400 hover:bg-purple-700 disabled:opacity-50"
        >
          POST TO WALL
        </button>
      </div>

      {/* Messages Display */}
      <div className="bg-gray-100 border border-gray-400 p-2 max-h-64 overflow-y-auto">
        <div className="font-courier text-xs text-purple-600 mb-2">
          === CRAIGSLAST CHAT ROOM v1.2 (AOL STYLE) ===
        </div>
        
        {messages.map((msg) => (
          <div key={msg.id} className="font-courier text-xs mb-1 hover:bg-yellow-100">
            <span className="text-blue-600 font-bold">{msg.nickname}</span>
            <span className="text-gray-500"> [{msg.timestamp}]: </span>
            <span className="text-black">{msg.message}</span>
          </div>
        ))}
        
        <div className="font-courier text-xs text-gray-400 mt-2">
          --- End of visible chat history ---
        </div>
      </div>
      
      <div className="font-courier text-xs text-gray-500 mt-2">
        💀 Warning: Messages are not moderated. Emotional damage possible.
      </div>
    </div>
  );
};

export default MessageWall;
