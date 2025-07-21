import React from "react";

// Accepts an array of icon URLs
const Tools = ({ icons }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center animate-marquee whitespace-nowrap gap-8">
        {[...icons, ...icons].map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt="tech icon"
            className="w-12 h-12 object-contain inline-block"
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Tools;
