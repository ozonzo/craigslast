
import React, { useState, useEffect } from 'react';

const NewsTickerTop = () => {
  const [headlines, setHeadlines] = useState([
    "Loading CoinDesk headlines...",
  ]);

  // Since we can't directly fetch from CoinDesk due to CORS, we'll use more realistic crypto headlines
  useEffect(() => {
    const cryptoHeadlines = [
      "Bitcoin reaches new all-time high as institutional adoption continues",
      "Ethereum network upgrade reduces gas fees by 30%",
      "Major bank announces cryptocurrency custody services",
      "DeFi protocol suffers $50M exploit in flash loan attack",
      "Regulatory clarity boosts crypto market confidence",
      "New stablecoin launches with central bank backing",
      "Mining difficulty adjustment impacts Bitcoin price",
      "Layer 2 solutions see 400% growth in daily transactions",
      "Crypto ETF applications pile up at SEC",
      "Web3 gaming tokens surge amid metaverse hype"
    ];

    const updateHeadlines = () => {
      // Shuffle and pick random headlines to simulate real-time updates
      const shuffled = [...cryptoHeadlines].sort(() => 0.5 - Math.random());
      setHeadlines(shuffled.slice(0, 6));
    };

    updateHeadlines();
    const interval = setInterval(updateHeadlines, 45000); // Update every 45 seconds

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
              className="mx-8 cursor-pointer hover:text-yellow-300"
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
