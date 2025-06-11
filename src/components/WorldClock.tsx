
import React, { useState, useEffect } from 'react';

const WorldClock = () => {
  const [times, setTimes] = useState<Record<string, string>>({});

  const timezones = [
    { code: 'LA', timezone: 'America/Los_Angeles' },
    { code: 'NYC', timezone: 'America/New_York' },
    { code: 'SP', timezone: 'America/Sao_Paulo' },
    { code: 'UK', timezone: 'Europe/London' },
    { code: 'GER', timezone: 'Europe/Berlin' },
    { code: 'YVR', timezone: 'America/Vancouver' },
    { code: 'TKY', timezone: 'Asia/Tokyo' },
    { code: 'AFR', timezone: 'Africa/Cairo' }
  ];

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timezones.forEach(({ code, timezone }) => {
        try {
          const time = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }).format(new Date());
          newTimes[code] = time;
        } catch (error) {
          newTimes[code] = '--:--';
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-2 right-2 bg-yellow-100 border-2 border-craigpurple p-2 font-courier text-xs z-10">
      <div className="text-craigpurple font-bold mb-1">🌍 World Time</div>
      <div className="grid grid-cols-2 gap-1 text-black">
        {timezones.map(({ code }) => (
          <div key={code} className="text-xs">
            {code}: {times[code] || '--:--'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
