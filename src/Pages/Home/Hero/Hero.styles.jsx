import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledHeroSectionContainer = styled(Container)(({ theme }) => ({
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
  gap: "2rem",
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

export const StyledHeroImage = styled(Grid)(({ theme }) => ({
  objectFit: "cover",
}));

export const StyledHeroTextHeader = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bolder",
  color: theme.palette.primary.tan,
}));

export const StyledHeroTextContent = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  maxWidth: "550px",
  color: theme.palette.secondary.tan,
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
