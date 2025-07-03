import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { listLinks } from "../../../constants/navLinks.js";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-5 md:px-32">
        {/* Logo */}
        <div>
          <Link
            to="home"
            className="font-semibold text-2xl p-1 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            tabIndex={0}
            aria-label="Go to home section"
          >
            Logo Name
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer relative">
          {listLinks.map((section, idx) => (
            <div key={idx} className="relative group">
              {section.subLinks ? (
                <>
                  <Link
                    to={section.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="hover:text-brightGreen transition-all"
                  >
                    {section.name}
                  </Link>
                  <div className="absolute  left-[-10px] top-12 bg-white shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                    {section.subLinks.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-brightGreen hover:text-white"
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
                  activeClass="active"
                  className="hover:text-brightGreen transition-all"
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
            tabIndex={0}
            type="button"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out delay-75 md:hidden z-40`}
      >
        <nav
          role="navigation"
          className="flex flex-col items-center justify-center gap-8 pt-24 font-medium text-2xl"
        >
          {listLinks.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              onClick={closeMenu}
              className="hover:text-brightGreen transition-all"
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
