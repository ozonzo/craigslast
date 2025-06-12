import React, { useState } from 'react';
import WorldMap from "@/components/WorldMap";
import ListingSections from "@/components/ListingSections";
import JobsSection from "@/components/JobsSection";
import PopupManager from "@/components/PopupManager";
import WorldClock from "@/components/WorldClock";
import SocialIcons from "@/components/SocialIcons";
import HotCryptos from "@/components/HotCryptos";
import SnakeGame from "@/components/SnakeGame";
import MessageWall from "@/components/MessageWall";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVoidModal, setShowVoidModal] = useState(false);
  const [boringMode, setBoringMode] = useState(false);

  const handlePostClick = () => {
    if (!boringMode) {
      (window as any).addCraigPopup?.({
        title: "🚫 Post Feature Retired",
        content: "This feature was retired due to emotional damage caused by previous posts.",
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
          content: "Nothing exists here. Not even hope.",
          x: 150,
          y: 150,
          shaking: true
        });
      }, 500);
    }
  };

  const handleRandomHover = () => {
    if (!boringMode && Math.random() > 0.8) {
      (window as any).addCraigPopup?.({
        title: "🎯 Random Chaos",
        content: "You hovered over something. Congratulations, you triggered chaos.",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100
      });
    }
  };

  const handleFooterLinkClick = (linkName: string) => {
    if (!boringMode) {
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
      <WorldClock />
      <SocialIcons boringMode={boringMode} />
      
      {/* Boring Mode Toggle */}
      <div className="fixed top-2 left-2 z-50">
        <button 
          onClick={() => setBoringMode(!boringMode)}
          className="bg-yellow-400 text-black px-3 py-1 font-courier text-xs border-2 border-black hover:bg-yellow-500"
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
      
      {/* Top Banner */}
      <div className="bg-white border-b-2 border-craigpurple p-4 text-center">
        <h1 className="text-3xl font-bold text-craigpurple mb-2 transform rotate-180 inline-block">
          craigslast
        </h1>
        <div className="text-xl text-black font-courier">
          Everything Must Go (Including Dignity)
        </div>
        <div className="text-xs text-gray-600 mt-1 font-courier">
          ⚠️ Site Under Construction Since 2009 ⚠️
        </div>
      </div>

      {/* Crypto Chart Section */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-black border-4 border-craigpurple p-4 mb-6 text-center">
          <h2 className="text-craigpurple font-times text-xl mb-3">
            📈 $CRGL LIVE CHART (PROBABLY BROKEN)
          </h2>
          <div className="bg-gray-900 border-2 border-gray-500 p-4 mb-4">
            <iframe 
              src="https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump"
              className="w-full h-96 border-2 border-red-500"
              title="CRGL Chart"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleCryptoTradeClick}
              className="bg-green-600 text-white px-8 py-3 font-courier text-lg border-4 border-black hover:bg-green-700 transform -rotate-1"
            >
              🟩 BUY
            </button>
            <button 
              onClick={handleCryptoTradeClick}
              className="bg-red-600 text-white px-8 py-3 font-courier text-lg border-4 border-black hover:bg-red-700 transform rotate-1"
            >
              🟥 SELL
            </button>
          </div>
        </div>

        {/* Hot Cryptos Section */}
        <HotCryptos boringMode={boringMode} />

        {/* Broken navigation */}
        <div className="mb-6 text-center">
          <div className="font-courier text-sm space-x-4 text-craigpurple">
            <span 
              className="underline cursor-pointer hover:text-red-600"
              onClick={handlePostClick}
            >
              post
            </span> |
            <span 
              className="underline cursor-pointer hover:text-red-600"
              onClick={handleAccountClick}
            >
              account
            </span> |
            <span className="line-through text-gray-400">search</span> |
            <span 
              className="text-red-600 cursor-pointer hover:text-purple-600"
              onClick={handleErrorClick}
            >
              [ERROR 404]
            </span> |
            <span 
              className="animate-broken-blink underline cursor-pointer hover:text-red-600"
              onMouseEnter={handleRandomHover}
            >
              help
            </span>
          </div>
        </div>

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
            <div className="bg-yellow-100 border-2 border-craigpurple p-4 mb-6 transform -rotate-1">
              <h3 className="font-times text-lg font-bold text-craigpurple mb-2">
                💰 CraigLast Token ($CRGL)
              </h3>
              <div className="font-courier text-xs space-y-1">
                <div>Price: $0.00000420 📉</div>
                <div>Market Cap: -$50M</div>
                <div>Holders: 3 (all bots)</div>
                <div className="text-red-600">⚠️ NOT FINANCIAL ADVICE ⚠️</div>
                <button 
                  className="bg-craigpurple text-white px-3 py-1 mt-2 font-courier text-xs border-2 border-black hover:bg-purple-700"
                  onClick={handleCryptoTradeClick}
                >
                  Minted on pump.fun (maybe)
                </button>
              </div>
            </div>

            {/* Fake Ads */}
            <div className="space-y-4">
              <div 
                className="bg-red-100 border border-red-500 p-3 text-center cursor-pointer hover:bg-red-200"
                onClick={() => !boringMode && (window as any).addCraigPopup?.({
                  title: "🇳🇬 Nigerian Prince",
                  content: "Greetings! I am Prince Kwame and I need your $CRGL to unlock my inheritance!",
                  x: Math.random() * 300 + 100,
                  y: Math.random() * 200 + 100
                })}
              >
                <div className="font-courier text-xs text-red-600">
                  🚨 URGENT: Nigerian Prince Needs $CRGL 🚨
                </div>
              </div>
              
              <div 
                className="bg-blue-100 border border-blue-500 p-3 cursor-pointer"
                onMouseEnter={handleRandomHover}
              >
                <div className="font-courier text-xs">
                  💊 Buy Generic Hopium Online<br/>
                  <span className="text-gray-500">[BLOCKED BY ADBLOCK]</span>
                </div>
              </div>

              <div 
                className="bg-green-100 border border-green-500 p-3 cursor-pointer"
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
          </div>
        </div>

        {/* Snake Game Section */}
        <SnakeGame />

        {/* Epic SPX6900-style Disclaimer Footer */}
        <footer className="mt-12 border-t-4 border-craigpurple pt-6 bg-yellow-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* Main Disclaimer Text */}
            <div className="font-courier text-xs leading-relaxed text-black space-y-4 mb-6">
              <p className="font-bold text-red-600 text-center text-sm mb-4">
                ⚠️ IMPORTANT LEGAL DISCLAIMER - PLEASE READ CAREFULLY ⚠️
              </p>
              
              <p>
                <strong>CraigLast ($CRGL) Token</strong> is a meme token created for entertainment purposes only and has no association with any real assets, dignities, or valid classifieds. $CRGL is not an investment vehicle, security, commodity, or financial instrument of any kind. The token exists purely as a satirical commentary on cryptocurrency markets and classified advertisement platforms.
              </p>
              
              <p>
                <strong>SATIRE AND ENTERTAINMENT:</strong> This website, including all content, listings, job postings, and interactive elements, is entirely fictional and created for comedic purposes. Any resemblance to real classified ads, legitimate business opportunities, or functional websites is purely coincidental and unintentional.
              </p>
              
              <p>
                <strong>NO INTRINSIC VALUE:</strong> $CRGL tokens have no intrinsic value, utility, or promise of future value. They are not backed by any assets, revenues, or legitimate business operations. Purchasing $CRGL is equivalent to purchasing digital air, existential dread, or the sound of dial-up internet.
              </p>
              
              <p>
                <strong>RISK ACKNOWLEDGMENT:</strong> Cryptocurrency investments carry extreme risk of total loss. Past performance of any cryptocurrency is not indicative of future results. You may lose all invested capital, your dignity, your sleep, and potentially your faith in humanity. Consult with a financial advisor before making any investment decisions (and maybe a therapist too).
              </p>
              
              <p>
                <strong>NO LIABILITY:</strong> The creators, developers, and affiliates of CraigLast ($CRGL) are not responsible for any financial losses, emotional trauma, spiritual crises, or existential questioning that may result from interacting with this website or token. We are also not responsible for computer viruses, popup infections, or Windows 98 flashbacks.
              </p>
              
              <p>
                <strong>NO FINANCIAL ADVICE:</strong> Nothing on this website constitutes financial, investment, legal, or life advice. Any apparent recommendations are either jokes, sarcasm, or the incoherent ramblings of sleep-deprived developers. Do not base financial decisions on memes, broken links, or popup messages.
              </p>
              
              <p>
                <strong>INDEMNIFICATION:</strong> By accessing this website, you agree to indemnify and hold harmless CraigLast, its creators, and anyone who has ever heard of this project from any claims, damages, or losses arising from your use of this platform, including but not limited to: laptop damage from rage-induced keyboard smashing, relationship problems caused by cryptocurrency obsession, and therapy bills resulting from financial trauma.
              </p>
              
              <p>
                <strong>JURISDICTIONAL CHAOS:</strong> This disclaimer is governed by the laws of the metaverse, interpreted by AI judges, and enforced by absolutely nobody. Any disputes will be resolved through trial by meme combat in the digital thunderdome.
              </p>
            </div>

            {/* Fake Internal Links */}
            <div className="text-center border-t-2 border-gray-300 pt-4 mb-4">
              <div className="font-courier text-xs text-craigpurple space-x-4 mb-2">
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('MemeTools')}
                >
                  MemeTools
                </span> |
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('SadgeSwap')}
                >
                  SadgeSwap
                </span> |
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('LostWallets')}
                >
                  LostWallets
                </span> |
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('BrokenDEX')}
                >
                  BrokenDEX
                </span>
              </div>
              <div className="font-courier text-xs text-craigpurple space-x-4">
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('Opensea of Tears')}
                >
                  Opensea of Tears
                </span> |
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('CraigLast DAO')}
                >
                  CraigLast DAO (Hypothetical)
                </span> |
                <span className="line-through text-gray-400">Working Links</span> |
                <span 
                  className="underline cursor-pointer hover:text-red-600"
                  onClick={() => handleFooterLinkClick('Terms of Misuse')}
                >
                  Terms of Misuse
                </span>
              </div>
            </div>

            {/* Copyright and Contact */}
            <div className="text-center space-y-2 border-t-2 border-red-500 pt-4">
              <div className="font-times text-sm text-craigpurple">
                © 2024 by $CRGL. All wrongs reserved! Built with 💔 and questionable decisions.
              </div>
              <div className="font-courier text-xs text-gray-600">
                Contact: <span className="text-blue-600 underline cursor-pointer" onClick={() => handleFooterLinkClick('Email')}>losthope@craiglast.com</span> | 
                Legal: <span className="text-blue-600 underline cursor-pointer" onClick={() => handleFooterLinkClick('Legal')}>notreal@lawfirm.void</span>
              </div>
              <div className="font-courier text-xs text-red-600 bg-yellow-200 p-2 border-2 border-red-500 inline-block">
                ⚠️ This entire project is a joke. Please invest responsibly (preferably not in meme coins). ⚠️
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating broken elements for extra chaos */}
      <div 
        className="fixed bottom-4 right-4 bg-red-600 text-white p-2 font-courier text-xs animate-bounce cursor-pointer"
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
        className="fixed top-20 left-4 bg-yellow-400 text-black p-1 font-courier text-xs transform rotate-12 cursor-pointer"
        onClick={() => !boringMode && (window as any).addCraigPopup?.({
          title: "🎉 CONGRATULATIONS!",
          content: "You've won absolutely nothing! But thanks for clicking.",
          x: 50,
          y: 250
        })}
      >
        💸 YOU'VE WON! (NOT REALLY)
      </div>

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="bg-gray-100 border-4 border-craigpurple font-courier max-w-md">
          <DialogHeader>
            <DialogTitle className="text-craigpurple font-times text-lg">
              🔐 CraigLast Account Login
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-700">Username:</label>
              <input 
                className="w-full border border-gray-400 p-1 text-xs"
                placeholder="disappointment_collector_69"
                disabled
              />
            </div>
            <div>
              <label className="text-xs text-gray-700">Password:</label>
              <input 
                type="password"
                className="w-full border border-gray-400 p-1 text-xs"
                placeholder="••••••••••••"
                disabled
              />
            </div>
            <div className="text-xs text-red-600 bg-yellow-100 p-2 border">
              Please enter your mother's maiden name and crypto seed phrase (just kidding… unless?)
            </div>
            <button 
              className="w-full bg-craigpurple text-white py-2 font-courier text-xs hover:bg-purple-700"
              onClick={() => setShowLoginModal(false)}
            >
              Login to Regret
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Void Modal */}
      <Dialog open={showVoidModal} onOpenChange={setShowVoidModal}>
        <DialogContent className="bg-black text-green-400 border-4 border-red-600 font-courier max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-500 font-times text-lg">
              🌀 THE VOID
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center text-sm">
              Welcome to the Void.<br/>
              Nothing exists here.<br/>
              Not even hope.
            </div>
            <div className="text-xs text-gray-500 text-center">
              You clicked [ERROR 404]. What did you expect?
            </div>
            <button 
              className="w-full bg-red-600 text-white py-2 font-courier text-xs hover:bg-red-700"
              onClick={() => setShowVoidModal(false)}
            >
              Escape the Void (Maybe)
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
