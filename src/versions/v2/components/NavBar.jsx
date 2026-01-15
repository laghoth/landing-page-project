import React from "react";
import Header from "../../../layout/Header";
import { listLinks } from "../../../constants/navLinks.js";

const NavBar = () => {
  return (
    <>
      <Header
        logo="eStudy"
        accentColor="text-brightGreen"
        hoverColor="hover:text-brightGreen"
        bgColor="hover:bg-brightGreen"
        links={listLinks.v2}
      />
    </>
  );
};

export default NavBar;
