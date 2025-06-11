
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
Convince grandparents to buy DogeCoin.
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
