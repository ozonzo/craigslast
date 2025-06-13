
import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const ExpandableWorldClock = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [times, setTimes] = useState<Record<string, string>>({});

  const timezones = [
    { code: 'LA', name: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { code: 'NYC', name: 'New York', timezone: 'America/New_York' },
    { code: 'UK', name: 'London', timezone: 'Europe/London' },
    { code: 'TKY', name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { code: 'SYD', name: 'Sydney', timezone: 'Australia/Sydney' },
    { code: 'DXB', name: 'Dubai', timezone: 'Asia/Dubai' }
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
    <div className="fixed bottom-4 left-4 z-50">
      <div 
        className="bg-yellow-100 border-2 border-craigpurple p-2 cursor-pointer hover:bg-yellow-200 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center font-courier text-sm">
          <Globe className="w-4 h-4 mr-2 text-craigpurple" />
          <span className="text-craigpurple font-bold">World Time</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="bg-yellow-100 border-2 border-craigpurple mt-2 p-3 font-courier text-xs">
          <div className="grid grid-cols-1 gap-2">
            {timezones.map(({ code, name }) => (
              <div key={code} className="flex justify-between">
                <span className="text-black font-bold">{name}:</span>
                <span className="text-craigpurple">{times[code] || '--:--'}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableWorldClock;
