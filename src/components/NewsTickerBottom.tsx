
import React, { useState, useEffect } from 'react';

const NewsTickerBottom = () => {
  const [headlines, setHeadlines] = useState([
    "Local man discovers internet, immediately regrets it",
    "Area woman still using Internet Explorer, scientists baffled",
    "Breaking: Cat learns to use computer, immediately buys memecoins",
    "Study finds 100% of people reading this should be doing something else",
    "Scientists discover new form of procrastination: watching crypto charts"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeadlines = [
        "Man claims to have invented 'digital money' in 2009, nobody believes him",
        "Local teenager becomes millionaire, parents still disappointed",
        "Woman discovers husband's secret: he bought crypto at the top",
        "Breaking: Person reads terms and conditions, lawyers stunned",
        "Area man still explaining NFTs to his houseplants",
        "Study: 99% of crypto investors don't know what they're doing",
        "Local dog accidentally becomes crypto influencer"
      ];
      setHeadlines(newHeadlines);
    }, 35000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="font-courier text-sm">
        <span className="font-bold">THINGS U DON'T NEED TO KNOW: (NEWS----NEWS----NEWS...)</span>
        <div className="animate-scroll inline-block whitespace-nowrap">
          {headlines.map((headline, index) => (
            <span key={index} className="mx-8 cursor-pointer hover:text-yellow-300">
              🗞️ {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTickerBottom;
