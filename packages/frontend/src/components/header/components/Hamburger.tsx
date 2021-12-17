import React from "react";
import { HamburgerBunEl, HamburgerEl, HamburgerMenu } from "../elements";

interface HamburgerProps {}

export const Hamburger: React.FC<HamburgerProps> = () => {
  return (
    <HamburgerEl href="#">
      <HamburgerMenu>
        <HamburgerBunEl className="b-bun--top" />
        <HamburgerBunEl className="b-bun--mid" />
        <HamburgerBunEl className="b-bun--bottom" />
      </HamburgerMenu>
    </HamburgerEl>
  );
};
