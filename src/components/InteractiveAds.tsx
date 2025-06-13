
import React from 'react';

interface InteractiveAdsProps {
  boringMode: boolean;
  onRandomHover: () => void;
}

const InteractiveAds = ({ boringMode, onRandomHover }: InteractiveAdsProps) => {
  return (
    <div className="space-y-4">
      <div 
        className="bg-red-100 border border-red-500 p-3 text-center cursor-pointer hover:bg-red-200 transition-colors"
        onClick={() => !boringMode && (window as any).addCraigPopup?.({
          title: "🇳🇬 Nigerian Prince",
          content: "Greetings! I am Prince Kwame and I need your $CRGL to unlock my inheritance of 10 billion tokens!",
          x: Math.random() * 300 + 100,
          y: Math.random() * 200 + 100
        })}
      >
        <div className="font-courier text-xs text-red-600">
          🚨 URGENT: Nigerian Prince Needs $CRGL 🚨
        </div>
      </div>
      
      <div 
        className="bg-blue-100 border border-blue-500 p-3 cursor-pointer hover:bg-blue-200 transition-colors"
        onMouseEnter={onRandomHover}
      >
        <div className="font-courier text-xs">
          💊 Buy Generic Hopium Online<br/>
          <span className="text-gray-500">[BLOCKED BY ADBLOCK]</span>
        </div>
      </div>

      <div 
        className="bg-green-100 border border-green-500 p-3 cursor-pointer hover:bg-green-200 transition-colors"
        onClick={() => !boringMode && (window as any).addCraigPopup?.({
          title: "🎰 Crypto Casino WINNER!",
          content: "Congratulations! You've won 1 million CRGL! (Worth approximately $0.004)",
          x: 250,
          y: 180,
          shaking: true
        })}
      >
        <div className="font-courier text-xs">
          🎰 Win Big at Crypto Casino!<br/>
          <span className="line-through">Definitely Not a Scam™</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAds;
