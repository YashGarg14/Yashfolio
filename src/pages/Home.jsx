import React from "react";
import MapBox from "../components/MapBox";
import SongPlayer from "../components/SongPlayer";
import IntroCard from "../components/IntroCard";
import ImageCard from "../components/ImageCard";
import GithubCard from "../components/GithubCard";
import LinkedinCard from "../components/LinkedinCard";
import StoryCard from "../components/StoryCard";
import MobileProjectsCard from "../components/MobileProjectsCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen py-10 px-6 hidden md:block">
        <style>
          {`
          @keyframes playing {
            0% { transform: scaleY(1); }
            50% { transform: scaleY(1.5); }
            100% { transform: scaleY(1); }
          }
        `}
        </style>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <IntroCard />
          <MapBox />
          <ImageCard
            src="/images/coal.png"
            label="Girnars.in"
            href="https://www.girnars.in"
          />
          <SongPlayer />
          <GithubCard />
          <ImageCard
            src="/images/krishi.png"
            label="Krishi Unnati"
            href="https://github.com/YashGarg14/Major-project"
          />
          <StoryCard />
          <LinkedinCard />
        </div>
      </div>
      <div className="min-h-screen py-10 px-6 md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <IntroCard />
          <div className="flex flex-row w-full sm:w-1/2">
            {" "}
            <div className="w-1/2 pr-3">
              {" "}
              <GithubCard />
            </div>
            <div className="w-1/2 pl-3">
              {" "}
              <LinkedinCard />
            </div>
          </div>
          <Link to="/projects">
            <MobileProjectsCard />
          </Link>
          <MapBox />
        </div>
      </div>
    </>
  );
};

export default Home;
