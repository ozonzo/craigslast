
import React, { useState } from 'react';

interface HotCryptosProps {
  boringMode: boolean;
}

const HotCryptos = ({ boringMode }: HotCryptosProps) => {
  const [refreshCount, setRefreshCount] = useState(0);

  const cryptos = [
    { name: '$WIF', vibe: '🔥', status: 'Probably Real' },
    { name: '$TNSR', vibe: '🧻', status: 'Rugged' },
    { name: '$MEOW', vibe: '💥', status: 'GMI' },
    { name: '$POP', vibe: '🤡', status: 'Sus AF' },
    { name: '$BODEN', vibe: '🔥', status: 'Political Risk' },
    { name: '$SAMO', vibe: '💥', status: 'Dog Coin #4729' },
    { name: '$JUP', vibe: '🧻', status: 'Exchange Token Meh' },
    { name: '$BONK', vibe: '🤡', status: 'Dead Meme' },
    { name: '$HARAMBE', vibe: '🔥', status: 'RIP Legend' },
    { name: '$PONKE', vibe: '💥', status: 'Monkey Business' },
    { name: '$FLOKI', vibe: '🧻', status: 'Elon Simp Coin' },
    { name: '$CRGL', vibe: '🤡', status: 'You Are Here' }
  ];

  const getRandomCryptos = () => {
    const shuffled = [...cryptos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8);
  };

  const [displayedCryptos, setDisplayedCryptos] = useState(getRandomCryptos());

  const handleViewMore = () => {
    setRefreshCount(prev => prev + 1);
    setDisplayedCryptos(getRandomCryptos());
    
    if (!boringMode && refreshCount >= 2) {
      (window as any).addCraigPopup?.({
        title: "🔄 INFINITE LOOP DETECTED",
        content: "You've refreshed this table too many times. Are you trying to find hope?",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
        shaking: true
      });
    }
  };

  return (
    <div className="bg-black border-4 border-green-500 p-4 mb-6 font-courier">
      <h2 className="text-green-400 text-lg mb-4 text-center">
        🔥 Hot Cryptos Being Stalked Today
      </h2>
      
      <div className="bg-gray-900 border-2 border-gray-500 p-2">
        <div className="text-green-400 text-xs mb-2">
          C:\CRYPTOS\TRACKER.EXE - [TERMINAL MODE]
        </div>
        
        <table className="w-full text-xs text-green-400 broken-table">
          <thead>
            <tr className="border-b border-green-500">
              <th className="text-left p-1">COIN</th>
              <th className="text-left p-1">24H VIBES</th>
              <th className="text-left p-1">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {displayedCryptos.map((crypto, index) => (
              <tr key={`${crypto.name}-${refreshCount}-${index}`} className="hover:bg-gray-800">
                <td className="p-1 text-yellow-400">{crypto.name}</td>
                <td className="p-1">{crypto.vibe}</td>
                <td className="p-1 text-red-400">{crypto.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-3 text-center">
          <button 
            onClick={handleViewMore}
            className="bg-green-600 text-black px-4 py-1 text-xs border-2 border-green-400 hover:bg-green-500 transform hover:scale-95"
          >
            VIEW MORE (LOOP EFFECT)
          </button>
        </div>
        
        <div className="text-gray-500 text-xs mt-2 text-center">
          Refresh #{refreshCount + 1} | Data accuracy: 0% | Hope level: NONE
        </div>
      </div>
    </div>
  );
};

export default HotCryptos;
