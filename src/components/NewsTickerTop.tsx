
import React, { useState, useEffect } from 'react';

const NewsTickerTop = () => {
  const [headlines, setHeadlines] = useState([
    "Bitcoin crashes to new ATH again",
    "Ethereum gas fees now cost more than your house",
    "New memecoin promises to solve world hunger (spoiler: it doesn't)",
    "Crypto trader discovers secret to success: buying high, selling low",
    "NFT of a rock sells for 420 ETH, buyer says 'worth it'"
  ]);

  // Simulate news updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeadlines = [
        "BREAKING: Someone actually made money in crypto",
        "Local man loses life savings on coin named after his dog",
        "Crypto exchange 'temporarily' shuts down for 'maintenance'",
        "Influencer shills coin, immediately dumps on followers",
        "Whale moves 0.01 BTC, market panics",
        "New DeFi protocol promises 42069% APY (definitely sustainable)",
        "Crypto bro explains blockchain to Uber driver for 45 minutes"
      ];
      setHeadlines(newHeadlines);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden relative">
      <div className="font-courier text-sm">
        <span className="font-bold">DON'T READ ME: (NEWS----NEWS----NEWS...)</span>
        <div className="animate-scroll inline-block whitespace-nowrap">
          {headlines.map((headline, index) => (
            <span key={index} className="mx-8 cursor-pointer hover:text-yellow-300">
              📰 {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTickerTop;
