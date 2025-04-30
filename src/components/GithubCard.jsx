import React from "react";

const GithubCard = () => (
  <div className="bg-white rounded-3xl flex flex-col justify-center items-center shadow-md aspect-square">
    <a href="https://github.com/YashGarg14" target="_blank" rel="noreferrer">
      <img
        className="w-32 h-32 mb-4 transition-transform duration-500 ease-in-out hover:scale-110"
        src="images/github.png"
        alt="git"
      />
      <p className="hidden md:block text-4xl font-bold">Github</p>
    </a>
  </div>
);

export default GithubCard;
