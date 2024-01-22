import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServicesProvidedBackgroundWrapper = styled(Box)(
  ({ theme }) => ({
    background: `linear-gradient(to bottom, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  })
);

export const StyledServicesProvidedSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",
    flexDirection: "column",
    gap: "5rem",

    // Tenatative //

    [theme.breakpoints.up("md")]: {
      maxWidth: "1400px",
      paddingBlock: "6rem",
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
  })
);

export const StyledServicesProvidedOuterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "3rem",
}));
