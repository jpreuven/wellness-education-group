import React from "react";
import { StyledMobileNavbarOuterGrid } from "./MobileNavbar.styles";
import NavbarDataJSX from "../Navbar.data";

export default function MobileNavbar() {
  return (
    <StyledMobileNavbarOuterGrid>
      <NavbarDataJSX />
    </StyledMobileNavbarOuterGrid>
  );
}
