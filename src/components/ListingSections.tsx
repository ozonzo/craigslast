
const ListingSections = () => {
  const sections = [
    { icon: "💔", title: "Heartbreak Trades" },
    { icon: "📦", title: "Box of Boxes (Only Boxes)" },
    { icon: "🧃", title: "Nearly Used Beverages" },
    { icon: "🧻", title: "One-Time Toilet Paper" },
    { icon: "📉", title: "Failed Crypto Projects" },
    { icon: "🧠", title: "Rent My Thoughts" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-4 ml-2">
          <h3 className="text-craigpurple font-times text-lg font-bold mb-2">
            {section.icon} {section.title}
          </h3>
          <div className="space-y-1 text-sm font-courier">
            <div>• <span className="text-blue-600 underline cursor-pointer">broken dreams for sale</span></div>
            <div>• <span className="text-blue-600 underline cursor-pointer">slightly used regret</span></div>
            <div>• <span className="text-blue-600 underline cursor-pointer">free disappointment (pickup only)</span></div>
            <div>• <span className="text-red-600">[FLAGGED FOR REMOVAL]</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingSections;
