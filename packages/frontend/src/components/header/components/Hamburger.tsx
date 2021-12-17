import React from "react";
import { HamburgerBunEl, HamburgerEl } from "../elements";

interface HamburgerProps {}

export const Hamburger: React.FC<HamburgerProps> = () => {
  return (
    <HamburgerEl href="#">
      <HamburgerBunEl className="b-bun--top" />
      <HamburgerBunEl className="b-bun--mid" />
      <HamburgerBunEl className="b-bun--bottom" />
    </HamburgerEl>
  );
};
