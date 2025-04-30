import React from "react";

const ImageCard = ({ src, label, href }) => (
  <div className="hidden md:flex bg-pink-200 rounded-3xl relative overflow-hidden row-span-2">
    <img
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
      alt={label}
    />
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 left-4 group flex items-center bg-white shadow rounded-full overflow-hidden transition-all duration-700 ease-in-out px-3 h-10 hover:pr-5"
    >
      <div className="flex items-center justify-center w-2 h-1 ml-1 rounded-full transition-all duration-700 ease-in-out">
        <span className="text-lg transition-transform duration-700 ease-in-out">
          ↗
        </span>
      </div>
      <span className="ml-2 whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-700 ease-in-out">
        {label}
      </span>
    </a>
  </div>
);

export default ImageCard;
