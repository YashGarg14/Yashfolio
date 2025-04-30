import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const updateIndicator = () => {
      const links = navRef.current.querySelectorAll("a");
      const activeLink = Array.from(links).find(
        (link) => link.getAttribute("href") === location.pathname
      );
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [location.pathname]);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Work", to: "/projects" },
  ];

  return (
    <nav className="w-full py-10 px-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-4xl font-extrabold text-orange-500">Yash</div>
        </Link>
        <div
          ref={navRef}
          className="relative md:flex px-2 py-1 bg-[rgba(0,0,0,0.04)] rounded-full"
        >
          <div
            className="absolute top-1 bottom-1 rounded-full bg-white transition-all duration-300 ease-in-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          ></div>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative z-10 px-4 py-1 font-medium font-semibold ${
                location.pathname === link.to ? "text-black" : "text-black/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block text-black hover:text-orange-500 transition-colors duration-200">
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
