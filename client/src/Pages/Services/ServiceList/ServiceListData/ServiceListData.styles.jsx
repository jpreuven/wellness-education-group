import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServiceListOuterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (min-width: 715px)": {
    justifyContent: "space-between",
  },
}));

export const StyledServiceListImageBox = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  "@media (min-width: 786px)": {
    maxWidth: "325px",
  },
  "@media (min-width: 900px)": {
    maxWidth: "350px",
  },
  "@media (min-width: 950px)": {
    maxWidth: "375px",
  },
}));

export const StyledServiceListImageGrid = styled(Grid)(({ theme }) => ({}));

export const StyledServiceListTextGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "300px",
  "@media (min-width: 600px)": {
    minWidth: "300px",
  },
  "@media (min-width: 886px)": {
    maxWidth: "400px",
  },
  "@media (min-width: 950px)": {
    maxWidth: "500px",
  },
}));
