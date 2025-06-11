
const WorldMap = () => {
  const locations = [
    { name: "Meme Farms", x: "15%", y: "30%" },
    { name: "Scam Zones", x: "45%", y: "25%" },
    { name: "Rugpull Hotspots", x: "70%", y: "40%" },
    { name: "Meme Farms", x: "25%", y: "60%" },
    { name: "Scam Zones", x: "80%", y: "20%" },
    { name: "Rugpull Hotspots", x: "35%", y: "70%" },
    { name: "Meme Farms", x: "60%", y: "55%" },
    { name: "Scam Zones", x: "10%", y: "45%" },
  ];

  return (
    <div className="relative w-full h-64 bg-green-100 border-2 border-craigpurple mb-4 overflow-hidden">
      {/* Ugly ASCII art world map */}
      <div className="font-courier text-xs text-craigpurple leading-3 whitespace-pre p-2">
{`    ████████████████████████████████████████████████████
    ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████
    ████░░░░██░░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░░░░░░████
    ████░░░░████░░░░░░░░░░░░░░░░░░░░████░░░░░░░░░░░░████
    ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████
    ████░░░░░░░░░░██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░████
    ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████
    ████████████████████████████████████████████████████`}
      </div>
      
      {/* Location pins */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: location.x, top: location.y }}
        >
          <div className="bg-red-600 text-white px-1 text-xs font-courier border border-black animate-broken-blink">
            📍 {location.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
