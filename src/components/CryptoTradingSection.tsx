
import React from 'react';

const CryptoTradingSection = () => {
  return (
    <div className="bg-black border-4 border-craigpurple p-4 mb-6 text-center">
      <h2 className="text-craigpurple font-times text-xl mb-3">
        📈 $CRGL LIVE CHART (DEFINITELY BROKEN)
      </h2>
      <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
        {/* Fake Chart Image */}
        <img 
          src="https://i.imgur.com/4Z5nNrb.gif" 
          alt="Fake glitchy chart" 
          className="w-full max-w-2xl mx-auto border-2 border-red-500 mb-4"
          style={{ maxWidth: '600px' }}
        />
        <div className="text-red-400 font-courier text-xs mb-2">
          ⚠️ Chart unavailable due to emotional instability ⚠️
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a 
          href="https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-600 text-white px-8 py-3 font-courier text-lg border-4 border-black hover:bg-green-700 transform -rotate-1">
            🟩 BUY
          </button>
        </a>
        <a 
          href="https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-red-600 text-white px-8 py-3 font-courier text-lg border-4 border-black hover:bg-red-700 transform rotate-1">
            🟥 SELL
          </button>
        </a>
      </div>
    </div>
  );
};

export default CryptoTradingSection;
