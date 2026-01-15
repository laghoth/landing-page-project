import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
// import { listLinks } from "../constants/navLinks.js";

const Header = ({
  logo = "Logo",
  accentColor = "",
  hoverColor = "",
  bgColor = "",
  links = [],
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-5 md:px-32">
        {/* Logo */}
        <Link
          to="home"
          className={`font-semibold text-2xl p-1 cursor-pointer ${accentColor}`}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex={0}
          aria-label="Go to home section"
        >
          {logo}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer relative">
          {links.map((section, idx) => (
            <div key={idx} className="relative group">
              {section.subLinks ? (
                <>
                  <Link
                    to={section.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${hoverColor} transition-all`}
                  >
                    {section.name}
                  </Link>

                  <div className="absolute left-[-10px] top-12 bg-white shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                    {section.subLinks.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className={`block px-4 py-2 ${bgColor} hover:text-white transition-all`}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={section.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`hover:${accentColor} transition-all`}
                >
                  {section.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none"
            type="button"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} className={accentColor} />
            ) : (
              <AiOutlineMenu size={24} className={accentColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-full w-3/6 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 pt-24 font-medium text-2xl">
          {links.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={`hover:${accentColor} transition-all`}
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
