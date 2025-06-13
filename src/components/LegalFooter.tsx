
import React from 'react';

interface LegalFooterProps {
  onFooterLinkClick: (linkName: string) => void;
}

const LegalFooter = ({ onFooterLinkClick }: LegalFooterProps) => {
  return (
    <footer className="mt-12 border-t-4 border-craigpurple pt-6 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-bold text-red-600 text-center text-sm mb-6">
          ⚠️ IMPORTANT LEGAL DISCLAIMER - PLEASE READ CAREFULLY ⚠️
        </p>
        
        {/* Two Column Layout for Better Width Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="font-courier text-xs leading-relaxed text-black space-y-3">
            <p>
              <strong>CraigLast ($CRGL) Token</strong> is a meme token created for entertainment purposes only and has no association with any real assets, dignities, or valid classifieds. $CRGL is not an investment vehicle, security, commodity, or financial instrument of any kind.
            </p>
            
            <p>
              <strong>SATIRE AND ENTERTAINMENT:</strong> This website, including all content, listings, job postings, and interactive elements, is entirely fictional and created for comedic purposes. Any resemblance to real classified ads is purely coincidental.
            </p>
            
            <p>
              <strong>NO INTRINSIC VALUE:</strong> $CRGL tokens have no intrinsic value, utility, or promise of future value. They are not backed by any assets, revenues, or legitimate business operations. Purchasing $CRGL is equivalent to purchasing digital air.
            </p>
            
            <p>
              <strong>RISK ACKNOWLEDGMENT:</strong> Cryptocurrency investments carry extreme risk of total loss. Past performance is not indicative of future results. You may lose all invested capital, your dignity, your sleep, and potentially your faith in humanity.
            </p>
          </div>
          
          <div className="font-courier text-xs leading-relaxed text-black space-y-3">
            <p>
              <strong>NO LIABILITY:</strong> The creators, developers, and affiliates of CraigLast ($CRGL) are not responsible for any financial losses, emotional trauma, spiritual crises, or existential questioning that may result from interacting with this website or token.
            </p>
            
            <p>
              <strong>NO FINANCIAL ADVICE:</strong> Nothing on this website constitutes financial, investment, legal, or life advice. Any apparent recommendations are either jokes, sarcasm, or the incoherent ramblings of sleep-deprived developers.
            </p>
            
            <p>
              <strong>INDEMNIFICATION:</strong> By accessing this website, you agree to indemnify and hold harmless CraigLast, its creators, and anyone who has ever heard of this project from any claims, damages, or losses arising from your use of this platform.
            </p>
            
            <p>
              <strong>JURISDICTIONAL CHAOS:</strong> This disclaimer is governed by the laws of the metaverse, interpreted by AI judges, and enforced by absolutely nobody. Any disputes will be resolved through trial by meme combat in the digital thunderdome.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <div className="font-courier text-xs text-gray-600 space-x-4">
            <span 
              className="cursor-pointer hover:text-craigpurple transition-colors"
              onClick={() => onFooterLinkClick('Privacy Policy')}
            >
              privacy policy
            </span> |
            <span 
              className="cursor-pointer hover:text-craigpurple transition-colors"
              onClick={() => onFooterLinkClick('Terms of Service')}
            >
              terms of service
            </span> |
            <span 
              className="cursor-pointer hover:text-craigpurple transition-colors"
              onClick={() => onFooterLinkClick('Contact')}
            >
              contact us
            </span> |
            <span 
              className="cursor-pointer hover:text-craigpurple transition-colors"
              onClick={() => onFooterLinkClick('Refunds')}
            >
              refunds (lol)
            </span>
          </div>
          
          <div className="mt-4 font-courier text-xs text-gray-500">
            <p>Contract: CHNwV4CVt4o4ACtbEjv1HLR4UE92GN744wgZiREDpump</p>
            <p>© 2024 CraigLast. All rights reserved (and immediately given up).</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
