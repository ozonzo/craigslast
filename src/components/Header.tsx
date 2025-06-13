
import React from 'react';

interface HeaderProps {
  boringMode: boolean;
  setBoringMode: (mode: boolean) => void;
}

const Header = ({ boringMode, setBoringMode }: HeaderProps) => {
  return (
    <>
      {/* Boring Mode Toggle */}
      <div className="fixed top-2 left-2 z-50">
        <button 
          onClick={() => setBoringMode(!boringMode)}
          className="bg-yellow-400 text-black px-3 py-1 font-courier text-xs border-2 border-black hover:bg-yellow-500 shadow-lg"
        >
          🧼 {boringMode ? 'Disable' : 'Enable'} Boring Mode (No Chaos)
        </button>
      </div>

      {/* Boring Mode Banner */}
      {boringMode && (
        <div className="bg-yellow-200 border-2 border-orange-500 p-2 text-center font-courier text-sm text-black">
          You're now in Boring Mode. What are you doing with your life?
        </div>
      )}
      
      {/* Top Banner with Tooltip */}
      <div className="bg-white border-b-2 border-craigpurple p-4 text-center relative">
        <h1 
          className="text-3xl font-bold text-craigpurple mb-2 transform rotate-180 inline-block cursor-help"
          title="CraigLast is the world's first emotionally unstable crypto marketplace. Nothing works… on purpose."
        >
          craigslast
        </h1>
        <div className="text-xl text-black font-courier">
          Everything Must Go (Including Dignity)
        </div>
        <div className="text-xs text-gray-600 mt-1 font-courier">
          ⚠️ Site Under Construction Since 2009 ⚠️
        </div>
      </div>
    </>
  );
};

export default Header;
