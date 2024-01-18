import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServiceListOuterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const StyledServiceListImageGrid = styled(Grid)(({ theme }) => ({
  width: "350px",
  [theme.breakpoints.down("md")]: {
    order: "0 !important",
    paddingBottom: "16px",
  },
}));

export const StyledServiceListTextGrid = styled(Grid)(({ theme }) => ({
  width: "500px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "16px",
  },
}));
