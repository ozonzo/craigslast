
import React from 'react';

interface TokenInfoProps {
  onCryptoTradeClick: () => void;
}

const TokenInfo = ({ onCryptoTradeClick }: TokenInfoProps) => {
  return (
    <div className="bg-yellow-100 border-2 border-craigpurple p-4 mb-6 transform -rotate-1">
      <h3 className="font-times text-lg font-bold text-craigpurple mb-2">
        💰 CraigLast Token ($CRGL)
      </h3>
      <div className="font-courier text-xs space-y-1">
        <div>Price: $0.00000420 📉</div>
        <div>Market Cap: -$50M</div>
        <div>Holders: 3 (all bots)</div>
        <div className="text-red-600">⚠️ NOT FINANCIAL ADVICE ⚠️</div>
        <button 
          className="bg-craigpurple text-white px-3 py-1 mt-2 font-courier text-xs border-2 border-black hover:bg-purple-700 transition-colors"
          onClick={onCryptoTradeClick}
        >
          Trade on pump.fun
        </button>
      </div>
    </div>
  );
};

export default TokenInfo;
