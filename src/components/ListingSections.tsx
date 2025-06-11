
import React, { useState } from 'react';

const ListingSections = () => {
  const [brokenDreamsClicks, setBrokenDreamsClicks] = useState(0);
  
  const sections = [
    { icon: "💔", title: "Heartbreak Trades" },
    { icon: "📦", title: "Box of Boxes (Only Boxes)" },
    { icon: "🧃", title: "Nearly Used Beverages" },
    { icon: "🧻", title: "One-Time Toilet Paper" },
    { icon: "📉", title: "Failed Crypto Projects" },
    { icon: "🧠", title: "Rent My Thoughts" }
  ];

  const handleBrokenDreamsClick = () => {
    setBrokenDreamsClicks(prev => prev + 1);
    (window as any).addCraigPopup?.({
      title: "💔 Error Opening Dreams",
      content: "Sorry. Error opening popup. Please click again.",
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100
    });
  };

  const handleRegretClick = () => {
    // Open Nicolas Cage image in new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head><title>Slightly Used Regret</title></head>
          <body style="margin:0; background:#000; display:flex; align-items:center; justify-content:center;">
            <img src="https://i.imgur.com/YGJtyeE.jpg" alt="Nicolas Cage contemplating regret" style="max-width:100%; max-height:100%;">
          </body>
        </html>
      `);
    }
  };

  const handleBoxClick = () => {
    // Simulate "boing" sound effect
    console.log("🔊 BOING!");
    
    (window as any).addCraigPopup?.({
      title: "📦 Box Opened",
      content: "You opened the box. The box opened you.",
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      following: true
    });
  };

  const renderListingItem = (text: string, sectionTitle: string) => {
    if (text === "broken dreams for sale" && sectionTitle === "Heartbreak Trades") {
      return (
        <span 
          className="text-blue-600 underline cursor-pointer hover:text-red-600"
          onClick={handleBrokenDreamsClick}
          title="Click if you dare"
        >
          {text}
        </span>
      );
    }
    
    if (text === "slightly used regret" && sectionTitle === "Heartbreak Trades") {
      return (
        <span 
          className="text-blue-600 underline cursor-pointer hover:text-red-600"
          onClick={handleRegretClick}
          title="Prepare for Nicolas Cage"
        >
          {text}
        </span>
      );
    }
    
    if (sectionTitle === "Box of Boxes (Only Boxes)") {
      return (
        <span 
          className="text-blue-600 underline cursor-pointer hover:text-red-600"
          onClick={handleBoxClick}
          title="You opened the box. The box opened you."
        >
          {text}
        </span>
      );
    }
    
    return <span className="text-blue-600 underline cursor-pointer">{text}</span>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-4 ml-2">
          <h3 className="text-craigpurple font-times text-lg font-bold mb-2">
            {section.icon} {section.title}
          </h3>
          <div className="space-y-1 text-sm font-courier">
            <div>• {renderListingItem("broken dreams for sale", section.title)}</div>
            <div>• {renderListingItem("slightly used regret", section.title)}</div>
            <div>• {renderListingItem("free disappointment (pickup only)", section.title)}</div>
            <div>• <span className="text-red-600">[FLAGGED FOR REMOVAL]</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingSections;
