import { Typography } from "@mui/material";
import useMediaQueries from "../../utils/mediaqueries.utils";
import {
  StyledNavbarLinks,
  StyledNavbarBoxLinks,
  StyledMobileNavbarBoxLinks,
} from "./Navbar.styles";

const data = [
  "About us",
  "Services",
  "Contact Us",
  "Internship Opportunities",
  "Location",
];

function NavbarDataJSX() {
  const { isMd, isXl } = useMediaQueries();
  if (isMd) {
    return data.map((data, index) => {
      return (
        <StyledNavbarLinks key={index}>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              {data}
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
      );
    });
  } else {
    return data.map((data, index) => {
      return (
        <StyledNavbarLinks key={index}>
          <StyledMobileNavbarBoxLinks>
            <Typography>{data}</Typography>
          </StyledMobileNavbarBoxLinks>
        </StyledNavbarLinks>
      );
    });
  }
}

export default NavbarDataJSX;
