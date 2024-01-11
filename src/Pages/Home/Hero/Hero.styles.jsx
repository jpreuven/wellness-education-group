import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledHeroSectionContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  overflow: "visible",
  paddingBlock: "4rem",

  // maxWidth: "550px",

  [theme.breakpoints.down("sm")]: {
    // maxWidth: "100%",
    paddingInline: ".5rem",
  },
  //   [theme.breakpoints.up("lg")]: {
  //     paddingBlock: "4rem",
  //     minHeight: "650px",
  //     alignItems: "center",
  //   },
  //   [theme.breakpoints.up("xl")]: {
  //     minHeight: "650px",
  //   },
  //   [theme.breakpoints.up("xxl")]: {
  //     minHeight: "850px",
  //   },
}));

export const StyledHeroBackgroundWrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

export const StyledHeroGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "2rem",
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
}));

export const StyledHeroGridTextItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledHeroGridImageItem = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "@media (min-width: 768px)": {
    maxHeight: "400px",
  },
}));

export const StyledHeroImage = styled("img")(({ theme }) => ({
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "10px",
    // width: "250px",

    width: "400px",
  },
  // [theme.breakpoints.up("md")]: {
  //   paddingTop: "10px",
  //   // width: "250px",

  //   width: "400px",
  // },
}));

export const StyledHeroTextHeader = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "bolder",
  paddingBottom: "29px",

  color: theme.palette.primary.tan,
}));

export const StyledHeroTextContent = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  maxWidth: "550px",
  color: theme.palette.secondary.tan,
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
}));

export const StyledHeroButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.tan,
  maxHeight: "55px",
  borderRadius: "40px",
  maxWidth: "250px",
  height: "75px",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.tan,
  },
}));

export const StyledHeroContentGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const StyledHeroTextGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
}));
