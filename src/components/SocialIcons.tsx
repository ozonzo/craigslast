import React from 'react';

const SocialIcons = ({ boringMode }: { boringMode?: boolean }) => {
  const handleSocialClick = (platform: string) => {
    const messages: Record<string, string> = {
      twitter: "🐦 CraigLast Twitter is suspended for 'excessive truthfulness'",
      tiktok: "🎵 Our TikTok got banned for teaching financial responsibility",
      facebook: "📘 Facebook thinks we're a scam (they're not wrong)",
      spotify: "🎧 Spotify says our vibes are 'too toxic for streaming'"
    };

    if (platform === 'pumpfun') {
      // This is the ONLY truly functional link
      window.open('https://pump.fun/coin/CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump', '_blank');
      return;
    }

    if (platform === 'spotify') {
      // Open the broken Spotify page
      const newWindow = window.open('', '_blank', 'width=1200,height=800');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>SPOTIFY - PLAYLIST NOT FOUND. YOUR VIBE IS LOST.</title>
              <style>
                body { 
                  margin: 0; 
                  background: #000; 
                  color: #1db954; 
                  font-family: 'Courier New', monospace; 
                  overflow-x: hidden;
                }
                .header { 
                  background: #1db954; 
                  color: black;
                  padding: 15px; 
                  text-align: center; 
                  font-size: 20px; 
                  font-weight: bold; 
                  transform: skew(-2deg);
                }
                .main-content {
                  display: flex;
                  padding: 20px;
                  gap: 20px;
                }
                .album-art { 
                  width: 300px; 
                  height: 300px; 
                  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="%23333"/><circle cx="150" cy="150" r="100" fill="%23000"/><circle cx="150" cy="150" r="20" fill="%23333"/><text x="150" y="160" text-anchor="middle" fill="%23666" font-size="12">BROKEN</text></svg>');
                  border: 3px solid #1db954;
                  margin: 0 auto;
                  animation: spin 10s linear infinite;
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .playlist {
                  flex: 1;
                  background: #111;
                  padding: 20px;
                  border: 2px solid #1db954;
                }
                .song {
                  display: flex;
                  justify-content: space-between;
                  padding: 8px;
                  border-bottom: 1px solid #333;
                  cursor: pointer;
                }
                .song:hover {
                  background: #222;
                }
                .controls {
                  position: fixed;
                  bottom: 0;
                  width: 100%;
                  background: #1db954;
                  color: black;
                  padding: 10px;
                  text-align: center;
                }
                .progress-bar {
                  width: 100%;
                  height: 5px;
                  background: #333;
                  margin: 10px 0;
                  position: relative;
                }
                .progress {
                  height: 100%;
                  background: red;
                  width: 0%;
                  animation: stuck 1s infinite;
                }
                @keyframes stuck {
                  0%, 100% { width: 0%; }
                  50% { width: 2%; }
                }
                .recommendations {
                  margin-top: 20px;
                  background: #222;
                  padding: 15px;
                  border: 2px solid red;
                }
                .error-text {
                  color: red;
                  font-weight: bold;
                  text-align: center;
                  margin: 20px 0;
                  animation: blink 1s infinite;
                }
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
              </style>
            </head>
            <body>
              <div class="header">SPOTIFY - PLAYLIST NOT FOUND. YOUR VIBE IS LOST.</div>
              
              <div class="main-content">
                <div>
                  <div class="album-art"></div>
                  <div class="error-text">INFINITE LOADING...</div>
                </div>
                
                <div class="playlist">
                  <h3 style="color: #1db954; margin-bottom: 20px;">Error 404: Playlist of Forgotten Dreams</h3>
                  
                  <div class="song" onclick="alert('Error: No music found. Your soul is too empty.')">
                    <span>🎵 Dial-Up Modem Symphony</span>
                    <span>∞:∞</span>
                  </div>
                  <div class="song" onclick="alert('Error: Track corrupted by despair.')">
                    <span>🎵 The Sound of Silence (Before the Rugpull)</span>
                    <span>4:04</span>
                  </div>
                  <div class="song" onclick="alert('Error: File not found in your heart.')">
                    <span>🎵 My Hopes, My Dreams (404 Remix)</span>
                    <span>0:00</span>
                  </div>
                  <div class="song" onclick="alert('Error: Transaction failed like your life.')">
                    <span>🎵 Unresolved Transaction Blues</span>
                    <span>-:--</span>
                  </div>
                  <div class="song" onclick="alert('Error: GPU died, so did your portfolio.')">
                    <span>🎵 The Hum of a Dying GPU</span>
                    <span>ERROR</span>
                  </div>
                  
                  <div class="recommendations">
                    <h4 style="color: red;">BROKEN RECOMMENDATIONS:</h4>
                    <div style="color: #666; font-size: 12px; margin: 5px 0;">• Playlist for the Emotionally Bankrupt</div>
                    <div style="color: #666; font-size: 12px; margin: 5px 0;">• Songs to Rugpull To</div>
                    <div style="color: #666; font-size: 12px; margin: 5px 0;">• Crypto Winter Funeral March</div>
                    <div style="color: #666; font-size: 12px; margin: 5px 0;">• HODL Until You Die</div>
                  </div>
                </div>
              </div>
              
              <div class="controls">
                <div>Now Playing: Nothing | Artist: Nobody | Album: Void</div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <div>⏮️ ⏸️ ⏭️ 🔇 (All buttons broken)</div>
              </div>
              
              <div style="position: fixed; bottom: 80px; right: 20px; background: red; color: white; padding: 10px; font-size: 10px;">
                © 2024 Spotiby. Music Not Found. All Pain Reserved.
              </div>
            </body>
          </html>
        `);
      }
      return;
    }

    if (platform === 'twitter') {
      // Open the broken Twitter/X page
      const newWindow = window.open('', '_blank', 'width=1000,height=700');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>X (TWITTER) - ACCESS DENIED. YOU HAVE BEEN CANCELED.</title>
              <style>
                body { 
                  margin: 0; 
                  background: white; 
                  color: black;
                  font-family: 'Courier New', monospace; 
                  text-align: center;
                  padding: 50px;
                }
                .logo {
                  font-size: 80px;
                  color: red;
                  margin: 20px 0;
                  animation: glitch 2s infinite;
                  transform: skew(-5deg);
                }
                @keyframes glitch {
                  0% { transform: skew(-5deg) translateX(0); }
                  25% { transform: skew(-5deg) translateX(-2px); color: purple; }
                  50% { transform: skew(-5deg) translateX(2px); color: red; }
                  75% { transform: skew(-5deg) translateX(-1px); color: black; }
                  100% { transform: skew(-5deg) translateX(0); }
                }
                .error-title {
                  font-size: 24px;
                  color: red;
                  font-weight: bold;
                  margin: 30px 0;
                  text-transform: uppercase;
                }
                .message {
                  background: #ff6b6b;
                  color: white;
                  padding: 20px;
                  margin: 20px auto;
                  max-width: 600px;
                  border: 3px solid black;
                  transform: rotate(-1deg);
                }
                .fake-links {
                  margin: 30px 0;
                }
                .fake-link {
                  color: blue;
                  text-decoration: underline;
                  margin: 0 15px;
                  cursor: pointer;
                }
                .fake-link:hover {
                  color: red;
                }
                .footer {
                  position: fixed;
                  bottom: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  font-size: 10px;
                  color: gray;
                }
              </style>
            </head>
            <body>
              <div class="logo">𝕏</div>
              <div class="error-title">Error 403: Forbidden</div>
              <div class="message">
                YOUR OPINIONS WERE TOO HOT FOR THIS PLATFORM.<br/>
                Please consult a professional thought leader (not us).<br/>
                Your account has been permanently suspended for existing.
              </div>
              
              <div class="fake-links">
                <span class="fake-link" onclick="alert('Appeal rejected. Reason: Because.')">Appeal (Useless)</span>
                <span class="fake-link" onclick="alert('No more information available. Ever.')">Learn More (Don't)</span>
                <span class="fake-link" onclick="alert('Elon is busy buying other platforms.')">Contact Elon (No Response)</span>
              </div>
              
              <div style="background: black; color: white; padding: 20px; margin: 40px auto; max-width: 400px;">
                🚫 REASON FOR BAN: Excessive truthfulness about cryptocurrency
              </div>
              
              <div class="footer">
                © 2024 X Corp. All wrong reserved. Truth not included.
              </div>
            </body>
          </html>
        `);
      }
      return;
    }

    if (platform === 'facebook') {
      // Open the broken Facebook page
      const newWindow = window.open('', '_blank', 'width=1000,height=700');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>FACEBOOK - YOUR ACCOUNT HAS BEEN DISABLED. FOREVER. LOL.</title>
              <style>
                body { 
                  margin: 0; 
                  background: #4267B2; 
                  color: white;
                  font-family: 'Courier New', monospace; 
                  padding: 50px;
                }
                .header {
                  text-align: center;
                  margin-bottom: 40px;
                }
                .fb-logo {
                  font-size: 60px;
                  color: white;
                  margin: 20px 0;
                  transform: skew(-3deg);
                  filter: blur(1px);
                }
                .disabled-notice {
                  background: white;
                  color: black;
                  padding: 30px;
                  margin: 20px auto;
                  max-width: 600px;
                  border: 5px solid red;
                  text-align: center;
                  transform: rotate(1deg);
                }
                .reason {
                  background: red;
                  color: white;
                  padding: 15px;
                  margin: 20px 0;
                  font-weight: bold;
                }
                .fake-button {
                  background: #4267B2;
                  color: white;
                  padding: 10px 20px;
                  border: none;
                  margin: 5px;
                  cursor: pointer;
                  font-family: 'Courier New', monospace;
                }
                .fake-button:hover {
                  background: red;
                }
                .like-section {
                  text-align: center;
                  margin: 40px 0;
                  padding: 20px;
                  background: rgba(255,255,255,0.1);
                }
                .like-btn {
                  background: blue;
                  color: white;
                  padding: 10px 20px;
                  border: none;
                  margin: 10px;
                  cursor: pointer;
                  font-size: 16px;
                }
                .footer-links {
                  text-align: center;
                  margin: 40px 0;
                }
                .footer-link {
                  color: lightblue;
                  text-decoration: underline;
                  margin: 0 10px;
                  cursor: pointer;
                }
                .footer-link:hover {
                  color: red;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="fb-logo">facebook</div>
                <h1>YOUR ACCOUNT HAS BEEN DISABLED. FOREVER. LOL.</h1>
              </div>
              
              <div class="disabled-notice">
                <h2>Account Permanently Disabled</h2>
                <div class="reason">
                  REASON: Violating community standards (aka existing)
                </div>
                <p>Your account has been permanently disabled due to suspicious activity, such as:</p>
                <ul style="text-align: left; margin: 20px 0;">
                  <li>Posting about cryptocurrency</li>
                  <li>Having opinions</li>
                  <li>Breathing while online</li>
                  <li>General existence</li>
                </ul>
                <p><strong>All memories deleted. You are free now.</strong></p>
                
                <div style="margin: 20px 0;">
                  <button class="fake-button" onclick="alert('No help available. This is permanent.')">Help Center (No Help)</button>
                  <button class="fake-button" onclick="alert('Download contains only regret and sadness.')">Data Download (Empty Folder)</button>
                  <button class="fake-button" onclick="alert('Mark is in the metaverse. Leave a message.')">Talk to Mark (Blocked)</button>
                </div>
              </div>
              
              <div class="like-section">
                <p>How do you feel about this?</p>
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">👍 LIKE</button>
                <p id="likeStatus">0 people like being banned</p>
              </div>
              
              <div class="footer-links">
                <span class="footer-link" onclick="alert('Privacy? What privacy?')">Privacy Policy</span>
                <span class="footer-link" onclick="alert('Terms: We own your soul now.')">Terms of Service</span>
                <span class="footer-link" onclick="alert('Community standards are whatever we say they are.')">Community Standards</span>
              </div>
              
              <div style="text-align: center; margin-top: 50px; font-size: 12px; color: lightgray;">
                © 2024 Meta. All your data are belong to us.
              </div>
              
              <script>
                let liked = false;
                function toggleLike() {
                  const btn = document.getElementById('likeBtn');
                  const status = document.getElementById('likeStatus');
                  if (!liked) {
                    btn.innerHTML = '👎 UNLIKE';
                    btn.style.background = 'red';
                    status.innerHTML = 'You like being banned (concerning)';
                    liked = true;
                  } else {
                    btn.innerHTML = '👍 LIKE';
                    btn.style.background = 'blue';
                    status.innerHTML = '0 people like being banned';
                    liked = false;
                  }
                }
              </script>
            </body>
          </html>
        `);
      }
      return;
    }

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

    if (!boringMode) {
      (window as any).addCraigPopup?.({
        title: `🚫 ${platform.toUpperCase()} ERROR`,
        content: messages[platform],
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
        shaking: true
      });
    }
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
          onClick={() => handleSocialClick('spotify')}
        >
          🎧 Spotify (404 playlist)
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
          🚀 pump.fun (working!)
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
