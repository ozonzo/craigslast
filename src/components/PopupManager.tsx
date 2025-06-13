
import React, { useState, useEffect } from 'react';

interface Popup {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  shaking?: boolean;
  following?: boolean;
  persistent?: boolean;
}

interface PopupManagerProps {
  boringMode: boolean;
}

const PopupManager = ({ boringMode }: PopupManagerProps) => {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [craigLoopCount, setCraigLoopCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addPopup = (popup: Omit<Popup, 'id'>) => {
    if (boringMode) return;
    
    const id = Math.random().toString(36).substr(2, 9);
    setPopups(prev => {
      // Limit to max 2 popups at once to reduce chaos
      const newPopups = [...prev, { ...popup, id }];
      return newPopups.slice(-2);
    });
    
    if (popups.length >= 1) {
      setCraigLoopCount(prev => prev + 1);
      if (craigLoopCount === 0) {
        setTimeout(() => {
          addPopup({
            title: "🧪 CraigLoop™ Activated",
            content: "You've officially entered the CraigLoop™. Enjoy your stay.",
            x: Math.random() * 400 + 100,
            y: Math.random() * 300 + 100,
            shaking: true
          });
        }, 1000);
      }
    }
  };

  const closePopup = (id: string) => {
    setPopups(prev => prev.filter(p => p.id !== id));
    
    // Further reduced chaos when closing - only 10% chance instead of 20%
    if (!boringMode && Math.random() > 0.9) {
      const chaosMessages = [
        "🚨 SYSTEM BREACH DETECTED 🚨",
        "🪦 Your files are being sacrificed to $CRGL",
        "🥴 Too late to close this window now…",
        "🧠 Thinking too hard? You might be eligible for CraigMed™",
        "💸 1 billion CRGL added to your account (not real)",
        "⛔ ERROR 500: Emotions Not Found",
        "😵 JavaScript has taken over your life.",
        "📞 Your mom is calling. She says stop trading meme coins.",
        "🧟 You've been zombified by clicking this ad."
      ];
      
      setTimeout(() => {
        addPopup({
          title: "⚠️ POPUP VIRUS ⚠️",
          content: chaosMessages[Math.floor(Math.random() * chaosMessages.length)],
          x: Math.random() * 500 + 50,
          y: Math.random() * 400 + 50,
          shaking: Math.random() > 0.8
        });
      }, 800);
    }
  };

  // Expose addPopup globally for other components
  useEffect(() => {
    (window as any).addCraigPopup = addPopup;
  }, [boringMode]);

  // Clear all popups when boring mode is enabled
  useEffect(() => {
    if (boringMode) {
      setPopups([]);
    }
  }, [boringMode]);

  if (boringMode) return null;

  return (
    <>
      {popups.map((popup) => (
        <div
          key={popup.id}
          className={`fixed z-[9999] bg-gray-200 border-2 border-gray-400 shadow-lg font-courier text-xs ${
            popup.shaking ? 'animate-bounce' : ''
          }`}
          style={{
            left: popup.following ? mousePos.x - 100 : popup.x,
            top: popup.following ? mousePos.y - 50 : popup.y,
            width: '280px',
            minHeight: '120px'
          }}
        >
          {/* Windows 98 style title bar */}
          <div className="bg-blue-600 text-white px-2 py-1 flex justify-between items-center text-xs">
            <span>{popup.title}</span>
            {!popup.persistent && (
              <button
                onClick={() => closePopup(popup.id)}
                className="bg-red-500 text-white px-2 hover:bg-red-600 border border-gray-400"
              >
                ×
              </button>
            )}
          </div>
          
          <div className="p-3 bg-gray-100">
            <div className="text-black">{popup.content}</div>
            {popup.id.includes('infinite') && (
              <div className="mt-2 border border-gray-400 h-32 overflow-hidden">
                <iframe 
                  src="/" 
                  className="w-full h-full scale-50 origin-top-left"
                  title="Mini CraigLast"
                />
                <div className="text-red-600 text-center mt-1">
                  Mini CraigLast inside CraigLast. You're trapped now.
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PopupManager;
