import { Typography } from "@mui/material";
import useMediaQueries from "../../utils/mediaqueries.utils";
import {
  StyledNavbarLinks,
  StyledNavbarBoxLinks,
  StyledMobileNavbarBoxLinks,
} from "./Navbar.styles";

const data = [
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "Internship Opportunities",
    link: "/internships",
  },
  {
    title: "Location",
    link: "/location",
  },
];

function NavbarDataJSX() {
  const { isMd, isXl } = useMediaQueries();
  if (isMd) {
    return data.map(({ title, link }, index) => {
      return (
        <StyledNavbarLinks key={index} to={link}>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              {title}
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
      );
    });
  } else {
    return data.map(({ title, link }, index) => {
      return (
        <StyledNavbarLinks key={index} to={link}>
          <StyledMobileNavbarBoxLinks>
            <Typography>{title}</Typography>
          </StyledMobileNavbarBoxLinks>
        </StyledNavbarLinks>
      );
    });
  }
}

export default NavbarDataJSX;
