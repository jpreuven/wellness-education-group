import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServicesProvidedSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",

    // Tenatative //

    [theme.breakpoints.up("md")]: {
      maxWidth: "1400px",
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
