
import React, { useState } from 'react';

interface HotCryptosProps {
  boringMode: boolean;
}

const HotCryptos = ({ boringMode }: HotCryptosProps) => {
  const [refreshCount, setRefreshCount] = useState(0);
  
  const hotCoins = [
    { name: '$WIF', vibe: '🔥', status: 'Probably Real' },
    { name: '$BONK', vibe: '🤡', status: 'Rugged Yesterday' },
    { name: '$SAMO', vibe: '💥', status: 'GMI' },
    { name: '$MEOW', vibe: '🧻', status: 'Dead Cat Bounce' },
    { name: '$BODEN', vibe: '🔥', status: 'Sleepy Joe Energy' },
    { name: '$FLOKI', vibe: '💥', status: 'Elon Tweeted Once' },
    { name: '$PONKE', vibe: '🤡', status: 'Ape Mode Activated' },
    { name: '$HARAMBE', vibe: '💥', status: 'RIP King' },
    { name: '$JUP', vibe: '🔥', status: 'To Jupiter!' },
    { name: '$TNSR', vibe: '🧻', status: 'Tensor Confusion' }
  ];

  const handleViewMore = () => {
    setRefreshCount(prev => prev + 1);
    
    if (!boringMode) {
      (window as any).addCraigPopup?.({
        title: "🔄 LOADING MORE TRASH",
        content: `Refreshed ${refreshCount + 1} times. Still the same coins. You're trapped in the crypto matrix.`,
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
  };

  const handleCoinClick = (coinName: string) => {
    if (!boringMode) {
      const messages = [
        `${coinName} just rugged you emotionally`,
        `You clicked ${coinName}. Nothing happened. Just like your portfolio.`,
        `${coinName} chart: 📉📉📉 (your hopes and dreams)`,
        `${coinName} holders: You and 3 bots`,
        `${coinName} utility: Absolutely none`
      ];
      
      (window as any).addCraigPopup?.({
        title: `💰 ${coinName} INFO`,
        content: messages[Math.floor(Math.random() * messages.length)],
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
  };

  return (
    <div className="bg-black border-4 border-green-500 p-4 mb-6">
      <h2 className="text-green-400 font-courier text-xl text-center mb-4">
        🪙 Hottest Trashfires Being Stalked Today
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-4">
        <div className="text-green-400 text-xs mb-2">
          C:\CRYPTO\HOTCOINS.EXE - [TERMINAL MODE]
        </div>
        
        {/* Terminal Header */}
        <div className="font-courier text-xs text-green-400 border-b border-gray-600 pb-2 mb-2">
          <div className="grid grid-cols-3 gap-4">
            <span>COIN NAME</span>
            <span>24H VIBES</span>
            <span>STATUS</span>
          </div>
        </div>
        
        {/* Coin List */}
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {hotCoins.map((coin, index) => (
            <div 
              key={`${coin.name}-${refreshCount}-${index}`}
              className="font-courier text-xs text-green-300 hover:text-white cursor-pointer grid grid-cols-3 gap-4 py-1 hover:bg-gray-800"
              onClick={() => handleCoinClick(coin.name)}
            >
              <span>{coin.name}</span>
              <span>{coin.vibe}</span>
              <span>{coin.status}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button 
            onClick={handleViewMore}
            className="bg-green-600 text-black px-4 py-1 font-courier text-xs border-2 border-green-400 hover:bg-green-500"
          >
            VIEW MORE (SAME TRASH)
          </button>
        </div>
      </div>
      
      <div className="text-center mt-2 font-courier text-xs text-gray-500">
        💀 All data is fake. Just like these coins' utility. 💀
      </div>
    </div>
  );
};

export default HotCryptos;
