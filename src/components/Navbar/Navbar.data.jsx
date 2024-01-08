import { Typography } from "@mui/material";
import useMediaQueries from "../../utils/mediaqueries.utils";
import { StyledNavbarLinks, StyledNavbarBoxLinks } from "./Navbar.styles";

const data = [
  "About us",
  "Services",
  "Contact Us",
  "Internship Opportunities",
  "Location",
];

function NavbarDataJSX() {
  const { isXl } = useMediaQueries();
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
}

export default NavbarDataJSX;
