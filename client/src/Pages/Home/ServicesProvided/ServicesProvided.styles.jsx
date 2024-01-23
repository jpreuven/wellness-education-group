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
    gap: "3rem",

    [theme.breakpoints.up("md")]: {
      maxWidth: "1400px",
      paddingBlock: "6rem",
    },
  })
);

export const StyledServicesProvidedOuterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.5rem",
}));
