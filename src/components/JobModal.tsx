
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const jobDescriptions: Record<string, string> = {
  "Assistant to Assistant Fry Cook – Must Bring Own Apron": `
$8/hour. Must mop and cry simultaneously.
Fast-paced, demoralizing environment.
Shifts 2am–11am only.
Uniform: Shame.

Requirements:
• High school dropout preferred
• Must own at least 3 regrets
• Ability to question life choices
• Comfortable with existential dread
• References from previous disappointments

Benefits:
• Free emotional trauma
• Unlimited access to broken dreams
• Health insurance (not really)
  `,
  "NFT Community Manager – Unpaid but High Stress": `
$0/hour + exposure (to radiation)
Manage 50,000 angry Discord users.
Explain why JPEGs cost $10,000.
Defend the indefensible.

Requirements:
• PhD in Delusion
• Fluent in Copium
• Immune to death threats
• Can type while crying
• Previously scammed by own project

Benefits:
• Flexible schedule (24/7)
• Work from anywhere (you'll be homeless)
• Free PTSD
  `,
  "Crypto Call Center – Must Lie to Boomers": `
$12/hour + commission (imaginary)
Convince grandparents to buy CRAIGLAST.
Explain blockchain using only lies.
100% remote (from prison eventually).

Requirements:
• Flexible morals
• Convincing voice
• Knowledge of 90s slang
• Can say "to the moon" 500 times/day
• Comfortable with karma debt

Benefits:
• Free burner phone
• Legal defense fund (empty)
• Character development (negative)
  `,
  "Discord Mod – No Sleep, No Pay": `
$0/hour + power trips
Ban people for breathing wrong.
Moderate 24/7 crypto degens.
Explain why "wen moon" is spam.

Requirements:
• Virgin status (permanent)
• Basement dwelling preferred
• Coffee IV drip certification
• Ability to see "FUD" everywhere
• No social life whatsoever

Benefits:
• Green username (wow!)
• Everyone hates you
• Carpal tunnel syndrome
  `,
  "Blockchain Janitor – Clean Up Failed Projects": `
$5/hour in worthless tokens
Clean up rugpulled Solana projects.
Explain why your token went to zero.
Mop up tears of bag holders.

Requirements:
• Strong stomach for BS
• Can work with toxic waste
• Immunity to hopium
• Experience with broken dreams
• Own hazmat suit

Benefits:
• Free exposure to radiation
• Unlimited sadness
• Job security (always failing projects)
  `,
  "Meme Quality Inspector – Soul Crushing Work": `
$3/hour + depression
Rate Pepe quality 1-10.
Determine if Wojak is sad enough.
Kill your sense of humor daily.

Requirements:
• Art degree (useless)
• No sense of humor remaining
• Can cry on command
• Understanding of irony
• Previously destroyed by internet

Benefits:
• Destroy creativity
• Eternal pessimism
• Free existential crisis
  `,
  "Rugpull Prevention Specialist – Impossible Task": `
$0/hour + false hope
Prevent inevitable rugpulls.
Fight human nature itself.
Lose every single time.

Requirements:
• Delusional optimism
• Ignore all red flags
• Trust random Discord mods
• Believe in "diamond hands"
• Never learn from mistakes

Benefits:
• Constant disappointment
• Portfolio goes to zero
• Everyone blames you
  `
};

const JobModal = ({ isOpen, onClose, jobTitle }: JobModalProps) => {
  const description = jobDescriptions[jobTitle] || "This job is so bad, we can't even describe it.";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-yellow-100 border-4 border-craigpurple font-courier text-sm max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-craigpurple font-times text-lg">
            💼 {jobTitle}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <div className="whitespace-pre-line text-black">
            {description}
          </div>
          <div className="border-t-2 border-craigpurple pt-2 text-red-600 text-xs">
            ⚠️ WARNING: Applying may result in immediate regret
          </div>
          <div className="text-center">
            <button 
              onClick={onClose}
              className="bg-craigpurple text-white px-4 py-2 border-2 border-black font-courier hover:bg-purple-700"
            >
              Escape This Nightmare
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
