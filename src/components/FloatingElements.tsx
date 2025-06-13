
import React from 'react';

interface FloatingElementsProps {
  boringMode: boolean;
}

const FloatingElements = ({ boringMode }: FloatingElementsProps) => {
  return (
    <>
      <div 
        className="fixed bottom-4 right-4 bg-red-600 text-white p-2 font-courier text-xs animate-bounce cursor-pointer hover:bg-red-700 transition-colors shadow-lg z-30"
        onClick={() => !boringMode && (window as any).addCraigPopup?.({
          title: "🔗 BROKEN LINK VIRUS",
          content: "You clicked the broken link detector. Ironic.",
          x: 400,
          y: 400,
          shaking: true
        })}
      >
        🚨 BROKEN LINK DETECTED 🚨
      </div>
      
      <div 
        className="fixed top-20 left-4 bg-yellow-400 text-black p-1 font-courier text-xs transform rotate-12 cursor-pointer hover:bg-yellow-500 transition-colors shadow-lg z-30"
        onClick={() => !boringMode && (window as any).addCraigPopup?.({
          title: "🎉 CONGRATULATIONS!",
          content: "You've won absolutely nothing! But thanks for clicking.",
          x: 50,
          y: 250
        })}
      >
        💸 YOU'VE WON! (NOT REALLY)
      </div>
    </>
  );
};

export default FloatingElements;
