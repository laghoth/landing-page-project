import React from "react";
import { listLinksFooter } from "../../../constants/navLinks.js";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-brightGreen">
      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-8 py-5 border-b-2 border-gray-200">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brightGreen transition-colors bg-white rounded-full p-3 hover:bg-brightGreen hover:text-white hover:outline hover:outline-white"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brightGreen transition-colors bg-white rounded-full p-3 hover:bg-brightGreen hover:text-white hover:outline hover:outline-white"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brightGreen transition-colors bg-white rounded-full p-3 hover:bg-brightGreen hover:text-white hover:outline hover:outline-white"
          aria-label="Twitter"
          title="Twitter"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brightGreen transition-colors bg-white rounded-full p-3 hover:bg-brightGreen hover:text-white hover:outline hover:outline-white"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn size={30} />
        </a>
      </div>

      {/* */}
      <div className="flex flex-col items-center justify-center py-6">
        <nav className="flex flex-col md:flex-row items-center gap-7 font-medium p-1 cursor-pointer text-lg text-brightGreen  pb-4 md:pb-0">
          {listLinksFooter.map((Links, idx) => (
            <Link
              key={idx}
              to={Links.to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="text-white hover:underline hover:text-gray-300 transition-all"
            >
              {Links.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center py-4 text-sm">
          <p>
            © {new Date().getFullYear()} developed by
            <span className="text-white px-2">Othmane laghlimi</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
