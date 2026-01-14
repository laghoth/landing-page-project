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
<<<<<<< HEAD
    <div className="bg-brightOrange">
      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-8 py-5 border-b-2 border-orange-200">
=======
    <div className="bg-white">
      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-8 py-5 border-b-2 border-gray-200">
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="text-white hover:text-gray-300 transition-colors bg-white rounded-full p-3"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF size={30} color={'#ecb958'}/>
=======
          className="text-white hover:text-gray-300 transition-colors bg-brightGreen rounded-full p-3"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF size={30} />
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="text-white hover:text-gray-300 transition-colors bg-white rounded-full p-3"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram size={30} color={'#ecb958'} />
=======
          className="text-white hover:text-gray-300 transition-colors bg-brightGreen rounded-full p-3"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram size={30} />
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="text-white hover:text-gray-300 transition-colors bg-white rounded-full p-3"
          aria-label="Twitter"
          title="Twitter"
        >
          <FaTwitter size={30} color={'#ecb958'}/>
=======
          className="text-white hover:text-gray-300 transition-colors bg-brightGreen rounded-full p-3"
          aria-label="Twitter"
          title="Twitter"
        >
          <FaTwitter size={30} />
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="text-white hover:text-gray-300 transition-colors bg-white rounded-full p-3"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn size={30} color={'#ecb958'} />
=======
          className="text-white hover:text-gray-300 transition-colors bg-brightGreen rounded-full p-3"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn size={30} />
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
        </a>
      </div>

      {/* */}
      <div className="flex flex-col items-center justify-center py-6">
<<<<<<< HEAD
        <nav className="flex flex-col md:flex-row items-center gap-7 font-medium p-1 cursor-pointer text-lg text-white pb-4 md:pb-0">
=======
        <nav className="flex flex-col md:flex-row items-center gap-7 font-medium p-1 cursor-pointer text-lg text-brightGreen  pb-4 md:pb-0">
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
          {listLinksFooter.map((Links, idx) => (
            <Link
              key={idx}
              to={Links.to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="hover:underline hover:text-gray-300 transition-all"
            >
              {Links.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center py-4 text-sm">
          <p>
            © {new Date().getFullYear()} developed by
<<<<<<< HEAD
            <span className="text-white px-2">Othmane laghlimi</span>. All
=======
            <span className="text-brightGreen px-2">Othmane laghlimi</span>. All
>>>>>>> 93fdbc925220cf46fcbd7f66634e4b40a41c2b0b
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
