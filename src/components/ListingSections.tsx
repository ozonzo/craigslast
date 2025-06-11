
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

  const sectionContent: Record<string, string[]> = {
    "Heartbreak Trades": [
      "broken dreams for sale",
      "slightly used regret", 
      "ex-girlfriend's crypto wallet (locked)",
      "wedding ring (accepts CRGL only)"
    ],
    "Box of Boxes (Only Boxes)": [
      "empty NFT collections",
      "shoebox full of shame",
      "cardboard dreams (slightly dented)",
      "mystery box (contains disappointment)"
    ],
    "Nearly Used Beverages": [
      "tears of day traders",
      "expired hopium smoothie",
      "liquidated dreams (room temp)",
      "salty whale tears (premium)"
    ],
    "One-Time Toilet Paper": [
      "printed whitepaper collection",
      "Solana roadmap (very soft)",
      "SEC warnings (2-ply)",
      "my dignity (used once)"
    ],
    "Failed Crypto Projects": [
      "SafeMoon satellite (crashed)",
      "Terra Luna memorial coin",
      "FTX customer funds (invisible)",
      "my Bitcoin at $69k (ouch)"
    ],
    "Rent My Thoughts": [
      "why I bought Shiba Inu",
      "existential dread (hourly rate)",
      "financial advice (terrible)",
      "crypto predictions (always wrong)"
    ]
  };

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
    const newWindow = window.open('', '_blank', 'width=400,height=300');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head><title>Slightly Used Regret</title></head>
          <body style="margin:0; background:#000; display:flex; align-items:center; justify-content:center;">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop" alt="Nicolas Cage contemplating regret" style="max-width:100%; max-height:100%;">
          </body>
        </html>
      `);
    }
  };

  const handleBoxClick = () => {
    console.log("🔊 BOING!");
    
    (window as any).addCraigPopup?.({
      title: "📦 Box Opened",
      content: "You opened the box. The box opened you.",
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      following: true
    });
  };

  const handleCryptoClick = (text: string) => {
    if (text === "Terra Luna memorial coin") {
      const newWindow = window.open('', '_blank', 'width=500,height=400');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>Terra Luna Memorial</title></head>
            <body style="margin:0; background:#000; color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:courier;">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop" alt="Burned circuit board" style="margin-bottom:20px;">
              <h2>💀 R.I.P. LUNA 💀</h2>
              <p>May 2022 - May 2022</p>
              <p>"It was supposed to be stable..."</p>
            </body>
          </html>
        `);
      }
    } else if (text === "my Bitcoin at $69k (ouch)") {
      (window as any).addCraigPopup?.({
        title: "📈💸 PEAK BUYER ALERT",
        content: "Congratulations! You bought the top like a true legend. Diamond hands to the core... of the earth.",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
        shaking: true
      });
    } else if (text === "why I bought Shiba Inu") {
      (window as any).addCraigPopup?.({
        title: "🐕 DOGE REASONING",
        content: "Because Elon tweeted a dog emoji and I thought it was financial advice. 10/10 would buy again.",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
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

    if (sectionTitle === "Failed Crypto Projects") {
      return (
        <span 
          className="text-blue-600 underline cursor-pointer hover:text-red-600"
          onClick={() => handleCryptoClick(text)}
          title="Click to relive the pain"
        >
          {text}
        </span>
      );
    }

    if (sectionTitle === "Rent My Thoughts") {
      return (
        <span 
          className="text-blue-600 underline cursor-pointer hover:text-red-600"
          onClick={() => handleCryptoClick(text)}
          title="Terrible financial advice inside"
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
            {sectionContent[section.title]?.map((item, itemIndex) => (
              <div key={itemIndex}>• {renderListingItem(item, section.title)}</div>
            ))}
            <div>• <span className="text-red-600">[FLAGGED FOR REMOVAL]</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingSections;
