import React from "react";

const MapCard = () => {
  return (
    <a
      href="https://maps.google.com/?q=28.6139,77.2090"
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-2xl shadow-md"
    >
      {/* Map background */}
      <img
        src="images/map_img.jpg"
        alt="Map"
        className="w-full h-full object-cover"
      />

      {/* Overlay avatar circle with pump animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pump w-16 h-16 rounded-full border-[6px] border-white bg-blue-300 flex items-center justify-center shadow-lg">
          <img src="/icon.png" alt="Avatar" className="w-8 h-12 rounded-full" />
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pump {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-pump {
          animation: pump 1.5s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
};

export default MapCard;
