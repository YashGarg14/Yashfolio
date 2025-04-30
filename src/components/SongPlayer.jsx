import React, { useState, useEffect } from "react";

const songs = [
  {
    title: "Lover",
    artist: "Diljit Dosanjh",
    link: "https://open.spotify.com/track/5ldTKBBFrK4sOPgh9uohwB",
  },
  {
    title: "G.O.A.T.",
    artist: "Diljit Dosanjh",
    link: "https://open.spotify.com/track/3jZ5x2jJvTJc0smF3ljOQK",
  },
  {
    title: "Born to Shine",
    artist: "Diljit Dosanjh",
    link: "https://open.spotify.com/track/4J7d0pJRTiBfs4F3p3vRRs",
  },
  {
    title: "Do You Know",
    artist: "Diljit Dosanjh",
    link: "https://open.spotify.com/track/1TzD4W3CkMnm6Xv9s9yAYq",
  },
  {
    title: "Vibe",
    artist: "Diljit Dosanjh",
    link: "https://open.spotify.com/track/2d1ekLqhQ1zlp2fS1DrMWp",
  },
];

const getRandomSong = () => songs[Math.floor(Math.random() * songs.length)];

const SongPlayer = () => {
  const [currentSong, setCurrentSong] = useState(getRandomSong());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSong(getRandomSong());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a href={currentSong.link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-3xl p-10 flex flex-col justify-between aspect-square shadow-md">
        {/* Spotify logo */}
        <div className="img w-20 h-20 mb-8">
          <img
            src="images/Spotify_Primary_Logo.png"
            alt="sptfy"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Now Playing Animation */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[3px]">
            <div
              style={{ animation: "playing 0.85s infinite ease" }}
              className="w-[3px] h-4 bg-green-500 rounded-sm"
            ></div>
            <div
              style={{ animation: "playing 1.26s infinite ease" }}
              className="w-[3px] h-3 bg-green-500 rounded-sm"
            ></div>
            <div
              style={{ animation: "playing 0.62s infinite ease" }}
              className="w-[3px] h-5 bg-green-500 rounded-sm"
            ></div>
          </div>
          <p className="text-green-500 font-semibold text-sm tracking-wide">
            Now playing
          </p>
        </div>

        {/* Song Info */}
        <div className="mt-3 text-2xl font-extrabold text-gray-900">
          {currentSong.title}
        </div>
        <div className="text-gray-500 text-sm mt-1">{currentSong.artist}</div>
      </div>
    </a>
  );
};

export default SongPlayer;
