
import React from 'react';

const SocialIcons = () => {
  const handleSocialClick = (platform: string) => {
    const messages: Record<string, string> = {
      twitter: "🐦 CraigLast Twitter is suspended for 'excessive truthfulness'",
      tiktok: "🎵 Our TikTok got banned for teaching financial responsibility",
      facebook: "📘 Facebook thinks we're a scam (they're not wrong)",
      pumpfun: "🚀 pump.fun rejected CRGL for being 'too honest'"
    };

    if (platform === 'youtube') {
      // Open the broken YouTube page
      const newWindow = window.open('', '_blank', 'width=1000,height=700');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>YOUTUBE: WHERE DREAMS GO TO DIE (DEMONETIZED)</title>
              <style>
                body { 
                  margin: 0; 
                  background: linear-gradient(45deg, purple, black, yellow, gray); 
                  font-family: 'Courier New', monospace; 
                  color: white; 
                  overflow-x: hidden;
                  animation: glitch 0.5s infinite;
                }
                @keyframes glitch {
                  0% { transform: translateX(0); }
                  25% { transform: translateX(-2px); }
                  50% { transform: translateX(2px); }
                  75% { transform: translateX(-1px); }
                  100% { transform: translateX(0); }
                }
                .header { 
                  background: purple; 
                  padding: 10px; 
                  text-align: center; 
                  font-size: 24px; 
                  font-weight: bold; 
                  transform: rotate(-0.5deg);
                }
                .video-player { 
                  width: 80%; 
                  height: 300px; 
                  margin: 20px auto; 
                  background: #000; 
                  border: 5px solid yellow; 
                  display: flex; 
                  align-items: center; 
                  justify-content: center; 
                  position: relative;
                  transform: skew(-2deg);
                }
                .static { 
                  width: 100%; 
                  height: 100%; 
                  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23000"/><rect width="2" height="2" x="0" y="0" fill="%23fff" opacity="0.5"/><rect width="2" height="2" x="10" y="10" fill="%23fff" opacity="0.3"/><rect width="2" height="2" x="20" y="20" fill="%23fff" opacity="0.7"/></svg>') repeat;
                  animation: static 0.1s infinite;
                }
                @keyframes static {
                  0% { opacity: 1; }
                  50% { opacity: 0.5; }
                  100% { opacity: 1; }
                }
                .error-text { 
                  position: absolute; 
                  font-size: 20px; 
                  color: red; 
                  font-weight: bold; 
                  text-shadow: 2px 2px 0 yellow;
                }
                .suggestions { 
                  margin: 20px; 
                  background: rgba(0,0,0,0.8); 
                  padding: 15px; 
                  border: 3px solid red;
                  transform: rotate(1deg);
                }
                .suggestion { 
                  color: cyan; 
                  text-decoration: underline; 
                  cursor: pointer; 
                  display: block; 
                  margin: 5px 0;
                  transform: skew(1deg);
                }
                .comments { 
                  background: rgba(255,255,0,0.3); 
                  padding: 15px; 
                  margin: 20px; 
                  border: 2px solid purple;
                  max-height: 200px;
                  overflow-y: scroll;
                }
                .comment { 
                  margin: 8px 0; 
                  padding: 5px; 
                  background: rgba(0,0,0,0.5); 
                  border-left: 3px solid red;
                  transform: skew(-0.5deg);
                }
                .sidebar { 
                  position: fixed; 
                  right: 0; 
                  top: 100px; 
                  width: 200px; 
                  background: rgba(255,0,255,0.8); 
                  padding: 10px; 
                  border: 3px solid yellow;
                  transform: rotate(-2deg);
                }
                .ad { 
                  background: red; 
                  color: white; 
                  padding: 5px; 
                  margin: 5px 0; 
                  text-align: center; 
                  border: 2px solid black;
                  animation: blink 1s infinite;
                }
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
                .footer { 
                  position: fixed; 
                  bottom: 0; 
                  width: 100%; 
                  background: black; 
                  color: gray; 
                  text-align: center; 
                  font-size: 8px; 
                  padding: 2px;
                }
              </style>
            </head>
            <body>
              <div class="header">YOUTUBE: WHERE DREAMS GO TO DIE (DEMONETIZED)</div>
              
              <div class="video-player">
                <div class="static"></div>
                <div class="error-text">VIDEO NOT FOUND<br/>BUFFERING FOREVER...</div>
              </div>
              
              <div class="suggestions">
                <h3 style="color: yellow;">SUGGESTED VIDEOS (ALL BROKEN):</h3>
                <span class="suggestion">How to lose crypto fast (WORKING METHOD)</span>
                <span class="suggestion">My dog ate my seed phrase (TRUE STORY)</span>
                <span class="suggestion">ASMR of blockchain errors</span>
                <span class="suggestion">Existential dread compilations 10 HOURS</span>
                <span class="suggestion">Why I sold my house for DOGE coin</span>
                <span class="suggestion">Rugged again compilation</span>
              </div>
              
              <div class="comments">
                <h3 style="color: red;">COMMENTS (DISABLED DUE TO CHAOS):</h3>
                <div class="comment">👤 CryptoKing69: whar coin</div>
                <div class="comment">👤 DiamondHands: rug next week lol</div>
                <div class="comment">👤 AnonTrader: u r scammer</div>
                <div class="comment">👤 ToTheMoon: i like turtles</div>
                <div class="comment">👤 LostEverything: my dad left</div>
                <div class="comment">👤 BoomerInvestor: this vid changed nothing</div>
                <div class="comment">👤 ShibaArmy: HODL or die</div>
                <div class="comment">👤 RegretfulBuyer: should have bought pizza</div>
              </div>
              
              <div class="sidebar">
                <div class="ad">CLICK HERE TO INFLATE YOUR TOKENS<br/>(WARNING: PROBABLE SCAM)</div>
                <div class="ad">SUBSCRIBE TO PAIN</div>
                <div class="ad">CHANNEL: CRYPTO RUGS DAILY</div>
                <div style="color: black; font-size: 10px; margin-top: 10px;">
                  🔥 HOT CHANNELS:<br/>
                  • Ponzi Schemes R Us<br/>
                  • Exit Scam Academy<br/>
                  • Rug Pull University<br/>
                </div>
              </div>
              
              <div class="footer">© 2004 YouTub. All wrong reserved. | Spellling errors intentinal.</div>
              
              <script>
                // Add more chaos
                setInterval(() => {
                  document.body.style.transform = 'rotate(' + (Math.random() - 0.5) + 'deg)';
                }, 3000);
                
                // Random text jumping
                const suggestions = document.querySelectorAll('.suggestion');
                suggestions.forEach(s => {
                  s.addEventListener('click', () => {
                    alert('ERROR 404: Video does not exist and never will');
                  });
                });
              </script>
            </body>
          </html>
        `);
      }
      return;
    }

    (window as any).addCraigPopup?.({
      title: `🚫 ${platform.toUpperCase()} ERROR`,
      content: messages[platform],
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      shaking: true
    });
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-100 border border-black p-2 font-courier">
      <div className="text-xs text-craigpurple mb-1 font-bold">Follow Us (Don't)</div>
      <div className="space-y-1">
        <div 
          className="text-blue-600 cursor-pointer hover:text-red-600 text-xs"
          onClick={() => handleSocialClick('twitter')}
        >
          🐦 Twitter (suspended)
        </div>
        <div 
          className="text-blue-600 cursor-pointer hover:text-red-600 text-xs"
          onClick={() => handleSocialClick('tiktok')}
        >
          🎵 TikTok (banned)
        </div>
        <div 
          className="text-blue-600 cursor-pointer hover:text-red-600 text-xs"
          onClick={() => handleSocialClick('youtube')}
        >
          📺 YouTube (demonetized)
        </div>
        <div 
          className="text-blue-600 cursor-pointer hover:text-red-600 text-xs"
          onClick={() => handleSocialClick('facebook')}
        >
          📘 Facebook (flagged)
        </div>
        <div 
          className="text-blue-600 cursor-pointer hover:text-red-600 text-xs"
          onClick={() => handleSocialClick('pumpfun')}
        >
          🚀 pump.fun (rejected)
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
