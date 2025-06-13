
import React, { useState } from 'react';
import WorldMap from "@/components/WorldMap";
import ListingSections from "@/components/ListingSections";
import JobsSection from "@/components/JobsSection";
import PopupManager from "@/components/PopupManager";
import SocialIcons from "@/components/SocialIcons";
import HotCryptos from "@/components/HotCryptos";
import SnakeGame from "@/components/SnakeGame";
import TetrisGame from "@/components/TetrisGame";
import MessageWall from "@/components/MessageWall";
import NewsTickerTop from "@/components/NewsTickerTop";
import NewsTickerBottom from "@/components/NewsTickerBottom";
import ExpandableWorldClock from "@/components/ExpandableWorldClock";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import CryptoTradingSection from "@/components/CryptoTradingSection";
import TokenInfo from "@/components/TokenInfo";
import InteractiveAds from "@/components/InteractiveAds";
import FloatingElements from "@/components/FloatingElements";
import LegalFooter from "@/components/LegalFooter";
import Modals from "@/components/Modals";

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVoidModal, setShowVoidModal] = useState(false);
  const [boringMode, setBoringMode] = useState(false);

  const handlePostClick = () => {
    if (!boringMode) {
      (window as any).addCraigPopup?.({
        title: "📝 Post Your Regrets",
        content: "Create a new listing! Sell your broken dreams, failed relationships, or crypto losses. All categories welcome!",
        x: 300,
        y: 200
      });
    }
  };

  const handleAccountClick = () => {
    setShowLoginModal(true);
  };

  const handleErrorClick = () => {
    setShowVoidModal(true);
    
    if (!boringMode) {
      setTimeout(() => {
        (window as any).addCraigPopup?.({
          title: "🌀 Welcome to the Void",
          content: "Error 404: Page not found. Neither is your portfolio's value.",
          x: 150,
          y: 150,
          shaking: true
        });
      }, 500);
    }
  };

  const handleRandomHover = () => {
    if (!boringMode && Math.random() > 0.98) {
      (window as any).addCraigPopup?.({
        title: "❓ Help Center",
        content: "Help is available! Just kidding, you're on your own. This is crypto.",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
  };

  const handleFooterLinkClick = (linkName: string) => {
    if (!boringMode && Math.random() > 0.95) {
      (window as any).addCraigPopup?.({
        title: "🔗 LINK ERROR",
        content: `${linkName} is currently broken. Like everything else.`,
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 100
      });
    }
  };

  const handleCryptoTradeClick = () => {
    window.open('https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-times">
      <PopupManager boringMode={boringMode} />
      <ExpandableWorldClock />
      <SocialIcons boringMode={boringMode} />
      
      {/* Top News Ticker */}
      <NewsTickerTop />
      
      <Header boringMode={boringMode} setBoringMode={setBoringMode} />

      {/* Fixed Crypto Chart Section */}
      <div className="max-w-4xl mx-auto p-4">
        <CryptoTradingSection />

        {/* Hot Cryptos Section */}
        <HotCryptos boringMode={boringMode} />

        {/* Navigation */}
        <Navigation 
          boringMode={boringMode}
          onPostClick={handlePostClick}
          onAccountClick={handleAccountClick}
          onErrorClick={handleErrorClick}
          onRandomHover={handleRandomHover}
        />

        {/* World Map Section */}
        <div className="mb-6">
          <h2 className="text-xl font-times text-craigpurple mb-3 text-center">
            🌍 choose your location:
          </h2>
          <WorldMap />
          <p className="text-center font-courier text-sm text-gray-600 mb-4">
            craiglast listings around the multiverse
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Listings */}
          <div className="lg:col-span-2">
            <ListingSections boringMode={boringMode} />
            <JobsSection />
          </div>

          {/* Right Column - Token Info, Message Wall & Ads */}
          <div className="lg:col-span-1">
            {/* Message Wall */}
            <MessageWall />

            {/* Token Info */}
            <TokenInfo onCryptoTradeClick={handleCryptoTradeClick} />

            {/* Interactive Ads */}
            <InteractiveAds boringMode={boringMode} onRandomHover={handleRandomHover} />
          </div>
        </div>

        {/* Games Section - Snake and Tetris Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SnakeGame boringMode={boringMode} />
          <TetrisGame boringMode={boringMode} />
        </div>

        {/* Legal Disclaimer Footer */}
        <LegalFooter onFooterLinkClick={handleFooterLinkClick} />
      </div>

      {/* Bottom News Ticker */}
      <NewsTickerBottom />

      {/* Floating Elements */}
      <FloatingElements boringMode={boringMode} />

      {/* Modals */}
      <Modals 
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        showVoidModal={showVoidModal}
        setShowVoidModal={setShowVoidModal}
        boringMode={boringMode}
      />
    </div>
  );
};

export default Index;
