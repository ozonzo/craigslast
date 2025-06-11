
import React, { useState } from 'react';
import JobModal from './JobModal';

const JobsSection = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  
  const jobs = [
    "Assistant to Assistant Fry Cook – Must Bring Own Apron",
    "NFT Community Manager – Unpaid but High Stress", 
    "Crypto Call Center – Must Lie to Boomers",
    "Discord Mod – No Sleep, No Pay",
    "Blockchain Janitor – Clean Up Failed Projects",
    "Meme Quality Inspector – Soul Crushing Work",
    "Rugpull Prevention Specialist – Impossible Task"
  ];

  const handleJobClick = (job: string) => {
    // Add random chaos popup first
    if (Math.random() > 0.7) {
      (window as any).addCraigPopup?.({
        title: "🚨 JOB ALERT 🚨",
        content: "You're overqualified for this position (unfortunately)",
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
        shaking: true
      });
    }
    setSelectedJob(job);
  };

  return (
    <>
      <div className="mb-6 ml-3">
        <h3 className="text-craigpurple font-times text-lg font-bold mb-2">
          💼 Jobs Nobody Wants
        </h3>
        <div className="space-y-1">
          {jobs.map((job, index) => (
            <div key={index} className="text-sm font-courier">
              • <span 
                className="text-blue-600 underline cursor-pointer hover:text-red-600"
                onClick={() => handleJobClick(job)}
              >
                {job}
              </span>
            </div>
          ))}
        </div>
      </div>

      <JobModal 
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ''}
      />
    </>
  );
};

export default JobsSection;
