
import React from 'react';

const SocialIcons = () => {
  const handleSocialClick = (platform: string) => {
    const messages: Record<string, string> = {
      twitter: "🐦 CraigLast Twitter is suspended for 'excessive truthfulness'",
      tiktok: "🎵 Our TikTok got banned for teaching financial responsibility",
      youtube: "📺 YouTube demonetized us for hurting crypto feelings",
      facebook: "📘 Facebook thinks we're a scam (they're not wrong)",
      pumpfun: "🚀 pump.fun rejected CRGL for being 'too honest'"
    };

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
