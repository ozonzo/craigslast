
import React, { useState } from 'react';

interface HotCryptosProps {
  boringMode: boolean;
}

const HotCryptos = ({ boringMode }: HotCryptosProps) => {
  const [refreshCount, setRefreshCount] = useState(0);
  
  // Real trending meme coins from pump.fun and major exchanges
  const hotCoins = [
    { name: '$PNUT', vibe: '🥜', status: 'Squirrel Season', url: 'https://pump.fun/coin/2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump' },
    { name: '$GOAT', vibe: '🐐', status: 'GOAT Mode Active', url: 'https://pump.fun/coin/CzLSujWBLFsSjncfkh59rUFqvafWcY5tzedWJSuypump' },
    { name: '$MOODENG', vibe: '🦛', status: 'Hippo Energy', url: 'https://pump.fun/coin/ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY' },
    { name: '$CRGL', vibe: '🔥', status: 'Your Project', url: 'https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump' },
    { name: '$WIF', vibe: '🧢', status: 'Hat Vibes Only', url: 'https://pump.fun' },
    { name: '$BONK', vibe: '🤡', status: 'Still Bonking', url: 'https://pump.fun' },
    { name: '$PEPE', vibe: '🐸', status: 'Feels Good Man', url: 'https://pump.fun' },
    { name: '$FWOG', vibe: '🧻', status: 'Ribbit Energy', url: 'https://pump.fun' },
    { name: '$CHILLGUY', vibe: '😎', status: 'Just Chillin', url: 'https://pump.fun' },
    { name: '$POPCAT', vibe: '🐱', status: 'Pop Pop Pop', url: 'https://pump.fun' }
  ];

  const handleViewMore = () => {
    setRefreshCount(prev => prev + 1);
    
    // Reduced popup frequency from always to 30% chance
    if (!boringMode && Math.random() > 0.7) {
      (window as any).addCraigPopup?.({
        title: "🔄 LOADING MORE TRASH",
        content: `Refreshed ${refreshCount + 1} times. Still the same coins. You're trapped in the crypto matrix.`,
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
  };

  const handleCoinClick = (coin: any) => {
    // Open the actual coin page
    window.open(coin.url, '_blank');
    
    // Reduced popup frequency from always to 20% chance
    if (!boringMode && Math.random() > 0.8) {
      const messages = [
        `${coin.name} just rugged you emotionally`,
        `You clicked ${coin.name}. Chart goes brrrr 📈`,
        `${coin.name} holders: You and 3 diamond hands`,
        `${coin.name} utility: Pure vibes`,
        `${coin.name} to the moon? 🚀`
      ];
      
      (window as any).addCraigPopup?.({
        title: `💰 ${coin.name} INFO`,
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
              onClick={() => handleCoinClick(coin)}
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
        💀 All data is real. These coins' utility is still questionable. 💀
      </div>
    </div>
  );
};

export default HotCryptos;
