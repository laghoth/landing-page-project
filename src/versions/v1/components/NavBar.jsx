import React from "react";
import Header from "../../../layout/Header";
import { listLinks } from "../../../constants/navLinks.js";

const NavBar = () => {
  return (
    <>
      <Header
        logo="SmartLux"
        accentColor="text-brightOrange"
        hoverColor="hover:text-brightOrange"
        bgColor="hover:bg-brightOrange"
        links={listLinks.v1}
      />
    </>
  );
};

export default NavBar;
