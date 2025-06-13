
import React, { useState, useEffect } from 'react';

const NewsTickerTop = () => {
  const [headlines, setHeadlines] = useState([
    "Loading CoinDesk headlines...",
  ]);

  // Enhanced crypto headlines that rotate to simulate live updates
  useEffect(() => {
    const cryptoHeadlines = [
      "Bitcoin reaches new all-time high as institutional adoption continues",
      "Ethereum network upgrade reduces gas fees by 30%",
      "Major bank announces cryptocurrency custody services for retail clients",
      "DeFi protocol suffers $50M exploit in flash loan attack, investigation ongoing",
      "Regulatory clarity boosts crypto market confidence across global exchanges",
      "New stablecoin launches with central bank backing from three countries",
      "Mining difficulty adjustment impacts Bitcoin price, hashrate stabilizes",
      "Layer 2 solutions see 400% growth in daily transactions this quarter",
      "Crypto ETF applications pile up at SEC as approval timeline remains unclear",
      "Web3 gaming tokens surge amid metaverse adoption by major tech companies",
      "Solana network experiences brief outage, validators work on resolution",
      "NFT marketplace announces zero-fee trading to compete with OpenSea",
      "Central bank digital currency pilots expand to 15 new countries",
      "Lightning Network capacity reaches new milestone of 5,000 BTC",
      "Crypto lending platform pauses withdrawals citing liquidity concerns"
    ];

    const updateHeadlines = () => {
      // Shuffle and pick random headlines to simulate real-time updates
      const shuffled = [...cryptoHeadlines].sort(() => 0.5 - Math.random());
      setHeadlines(shuffled.slice(0, 8));
    };

    updateHeadlines();
    const interval = setInterval(updateHeadlines, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleHeadlineClick = () => {
    window.open('https://www.coindesk.com/', '_blank');
  };

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden relative">
      <div className="text-center font-courier text-sm font-bold mb-1">
        DON'T READ ME:
      </div>
      <div className="font-courier text-sm">
        <div className="animate-scroll inline-block whitespace-nowrap">
          {headlines.map((headline, index) => (
            <span 
              key={index} 
              className="mx-8 cursor-pointer hover:text-yellow-300 transition-colors"
              onClick={handleHeadlineClick}
            >
              📰 {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTickerTop;
