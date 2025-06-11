
import WorldMap from "@/components/WorldMap";
import ListingSections from "@/components/ListingSections";
import JobsSection from "@/components/JobsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-times">
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

      <div className="max-w-4xl mx-auto p-4">
        {/* Broken navigation */}
        <div className="mb-6 text-center">
          <div className="font-courier text-sm space-x-4 text-craigpurple">
            <span className="underline cursor-pointer">post</span> |
            <span className="underline cursor-pointer">account</span> |
            <span className="line-through text-gray-400">search</span> |
            <span className="text-red-600">[ERROR 404]</span> |
            <span className="animate-broken-blink underline cursor-pointer">help</span>
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
            <ListingSections />
            <JobsSection />
          </div>

          {/* Right Column - Token Info & Ads */}
          <div className="lg:col-span-1">
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
                <button className="bg-craigpurple text-white px-3 py-1 mt-2 font-courier text-xs border-2 border-black">
                  Minted on pump.fun (maybe)
                </button>
              </div>
            </div>

            {/* Fake Ads */}
            <div className="space-y-4">
              <div className="bg-red-100 border border-red-500 p-3 text-center">
                <div className="font-courier text-xs text-red-600">
                  🚨 URGENT: Nigerian Prince Needs $CRGL 🚨
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-500 p-3">
                <div className="font-courier text-xs">
                  💊 Buy Generic Hopium Online<br/>
                  <span className="text-gray-500">[BLOCKED BY ADBLOCK]</span>
                </div>
              </div>

              <div className="bg-green-100 border border-green-500 p-3">
                <div className="font-courier text-xs">
                  🎰 Win Big at Crypto Casino!<br/>
                  <span className="line-through">Definitely Not a Scam™</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t-2 border-craigpurple pt-4">
          <div className="text-center space-y-2">
            <div className="font-courier text-xs text-craigpurple space-x-4">
              <span className="underline cursor-pointer">Terms of Misuse</span> |
              <span className="underline cursor-pointer">Privacy Violation Policy</span> |
              <span className="underline cursor-pointer">Report a Ghost</span> |
              <span className="underline cursor-pointer">Apply for Worst Job</span>
            </div>
            <div className="font-times text-xs text-gray-500 mt-4">
              © 2024 craigslast | Built with 💔 and questionable decisions
            </div>
            <div className="font-courier text-xs text-red-600">
              ⚠️ This site may contain traces of regret ⚠️
            </div>
          </div>
        </footer>
      </div>

      {/* Floating broken elements for extra chaos */}
      <div className="fixed bottom-4 right-4 bg-red-600 text-white p-2 font-courier text-xs animate-bounce">
        🚨 BROKEN LINK DETECTED 🚨
      </div>
      
      <div className="fixed top-20 left-4 bg-yellow-400 text-black p-1 font-courier text-xs transform rotate-12">
        💸 YOU'VE WON! (NOT REALLY)
      </div>
    </div>
  );
};

export default Index;
