import React from "react";

const IntroCard = () => (
  <div className="bg-white rounded-3xl shadow p-10 col-span-1 sm:col-span-2 items-start gap-4">
    <img src="/icon.png" alt="Yash" className="w-22 h-28 pb-4" />
    <div>
      <p className="text-gray-700 text-lg text-justify">
        I'm <span className="font-bold text-black text-xl">Yash</span>, a
        developer passionate about startups and innovation. I have horizontal
        skills on everything related to a digital product.
      </p>
    </div>
  </div>
);

export default IntroCard;
