
import React, { useState, useEffect } from 'react';

const NewsTickerBottom = () => {
  const [headlines, setHeadlines] = useState([
    "Loading odd news headlines...",
  ]);

  useEffect(() => {
    const oddNewsHeadlines = [
      "Man discovers his pet goldfish has been day-trading crypto while he sleeps",
      "Local woman's sourdough starter declared sentient by AI researchers",
      "Florida man arrested for trying to pay taxes with NFTs and Monopoly money",
      "Scientists find correlation between pineapple on pizza preference and investment success",
      "Cat accidentally becomes millionaire through random keyboard trading on DEX",
      "Study reveals 73% of people lie about actually reading terms and conditions",
      "Town's entire population gets trapped in escape room during team building event",
      "Man's attempt to live like caveman ends when he accidentally invents cryptocurrency",
      "Breaking: Area dog still doesn't understand blockchain after 500 patient explanations",
      "Woman claims her houseplant gives better financial advice than her broker",
      "Local teenager becomes crypto millionaire by forgetting wallet password for 3 years",
      "Man builds time machine to warn himself about buying crypto at ATH, creates paradox",
      "Study shows people who use dark mode are 23% more likely to HODL",
      "Grandmother accidentally becomes DeFi whale while trying to send email",
      "Town replaces all street signs with QR codes, chaos and confusion ensue"
    ];

    const updateHeadlines = () => {
      const shuffled = [...oddNewsHeadlines].sort(() => 0.5 - Math.random());
      setHeadlines(shuffled.slice(0, 8));
    };

    updateHeadlines();
    const interval = setInterval(updateHeadlines, 35000); // Update every 35 seconds

    return () => clearInterval(interval);
  }, []);

  const handleHeadlineClick = () => {
    // Alternate between the two sources
    const sources = ['https://thebeaverton.com/', 'https://www.upi.com/Odd_News/'];
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    window.open(randomSource, '_blank');
  };

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="text-center font-courier text-sm font-bold mb-1">
        THINGS U DON'T NEED TO KNOW:
      </div>
      <div className="font-courier text-sm">
        <div className="animate-scroll inline-block whitespace-nowrap">
          {headlines.map((headline, index) => (
            <span 
              key={index} 
              className="mx-8 cursor-pointer hover:text-yellow-300 transition-colors"
              onClick={handleHeadlineClick}
            >
              🗞️ {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTickerBottom;
