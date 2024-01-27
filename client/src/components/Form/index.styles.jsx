import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledFormOuterGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "80dvw",
  width: "80dvw",

  "@media (min-width: 600px)": {
    width: "95%",
    maxWidth: "800px",
  },
}));

export const StyledFormTypographyHeader = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "25px",
}));

export const StyledFormOuterGridContentNames = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const StyledFormOuterGridContentEmail = styled(Grid)(({ theme }) => ({
  // display: "flex",
  gap: "2rem",
  flexGrow: "1",
  // width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "calc(50% - 1rem)",
  },
}));

export const StyledFormInnerGridContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
}));

export const StyledFormButtonCaptchaGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "1rem",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
