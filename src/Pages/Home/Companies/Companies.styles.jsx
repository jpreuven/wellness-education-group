import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledCompaniesBackgroundWrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.primary.tan},${theme.palette.secondary.tan})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

export const StyledCompaniesSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",

    // Tenatative //
    minHeight: "625px",

    //   [theme.breakpoints.up("md")]: {
    //     minHeight: "625px",
    //   },
    //   [theme.breakpoints.up("lg")]: {
    //     paddingBlock: "4rem",
    //     minHeight: "650px",
    //     alignItems: "center",
    //   },
    //   [theme.breakpoints.up("xl")]: {
    //     minHeight: "650px",
    //   },
    // [theme.breakpoints.up("xxl")]: {
    //   minHeight: "850px",
    // },
  })
);

export const StyledCompaniesImage = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  position: "relative",
  // right: -2000,
  // transform: "translateY(1000px)",
  // display: "none",
  // transition: "transform 0.3s ease",
  // [theme.breakpoints.up("xs")]: {
  //   transform: "translateY(0)",
  //   transition: "transform 0.3s ease",
  // },

  // position: "static",
  // right: 0,
  // transition: "right 0.3s ease, position 0.3s ease",
}));
