import React from "react";
import { Link } from "react-router-dom";

const MobileProjectsCard = () => (
  <Link to='/projects'><div className="md:hidden bg-gray-900 rounded-xl flex justify-center items-center px-6 py-8 font-bold">
  <div className="text-[42px] text-white">Projects</div>
</div></Link>
  
);

export default MobileProjectsCard;
