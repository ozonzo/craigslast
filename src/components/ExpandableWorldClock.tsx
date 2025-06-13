
import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const ExpandableWorldClock = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [times, setTimes] = useState<Record<string, string>>({});

  const timezones = [
    { code: 'BRA', name: 'Brazil 🇧🇷', timezone: 'America/Sao_Paulo' },
    { code: 'KOR', name: 'South Korea 🇰🇷', timezone: 'Asia/Seoul' },
    { code: 'JPN', name: 'Japan 🇯🇵', timezone: 'Asia/Tokyo' },
    { code: 'TWN', name: 'Taiwan 🇹🇼', timezone: 'Asia/Taipei' },
    { code: 'ZAF', name: 'South Africa 🇿🇦', timezone: 'Africa/Johannesburg' },
    { code: 'URY', name: 'Uruguay 🇺🇾', timezone: 'America/Montevideo' },
    { code: 'GBR', name: 'United Kingdom 🇬🇧', timezone: 'Europe/London' },
    { code: 'USA', name: 'USA & Canada 🇺🇸🇨🇦', timezone: 'America/New_York' },
    { code: 'DEU', name: 'Germany 🇩🇪', timezone: 'Europe/Berlin' },
    { code: 'FRA', name: 'France 🇫🇷', timezone: 'Europe/Paris' },
    { code: 'ITA', name: 'Italy 🇮🇹', timezone: 'Europe/Rome' },
    { code: 'AUS', name: 'Australia 🇦🇺', timezone: 'Australia/Sydney' },
    { code: 'IND', name: 'India 🇮🇳', timezone: 'Asia/Kolkata' },
    { code: 'TUR', name: 'Turkey 🇹🇷', timezone: 'Europe/Istanbul' },
    { code: 'UAE', name: 'UAE 🇦🇪', timezone: 'Asia/Dubai' }
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
    const interval = setInterval(updateTimes, 1000); // Update every second for real-time
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div 
        className="bg-yellow-100 border-2 border-craigpurple p-2 cursor-pointer hover:bg-yellow-200 transition-colors shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center font-courier text-sm">
          <Globe className="w-4 h-4 mr-2 text-craigpurple" />
          <span className="text-craigpurple font-bold">🌍</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="bg-yellow-100 border-2 border-craigpurple mt-2 p-3 font-courier text-xs shadow-lg max-h-80 overflow-y-auto">
          <div className="text-center text-craigpurple font-bold mb-2">
            🌍 WORLD TIME ZONES 🌍
          </div>
          <div className="grid grid-cols-1 gap-1">
            {timezones.map(({ code, name }) => (
              <div key={code} className="flex justify-between">
                <span className="text-black font-bold text-xs">{name}:</span>
                <span className="text-craigpurple font-mono text-xs">{times[code] || '--:--'}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-600 text-xs mt-2">
            Updates in real-time
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableWorldClock;
