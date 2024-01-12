import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledNavbarOuterGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  minHeight: "75px",
  backgroundColor: "white",
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 25px",
  boxShadow: "0 2px 5px gray;",
  [theme.breakpoints.up("xl")]: {
    padding: "10px 55px",
  },
}));

export const StyledNavbarLinksGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  [theme.breakpoints.up("xl")]: {
    gap: "0.75rem",
  },
}));

export const StyledNavbarLinks = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const StyledNavbarBoxLinks = styled(Box)(({ theme }) => ({
  minWidth: "100px",
  minHeight: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.main,
  borderRadius: "10px",
  "&:hover": {
    background: "rgba(25, 81, 64, 0.1)", // Change the primary color
  },
}));

export const StyledMobileNavbarBoxLinks = styled(Box)(({ theme }) => ({
  minHeight: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.main,
  borderRadius: "5px",
  borderTop: `1px solid lightgray`,
  "&:hover": {
    background: "rgba(25, 81, 64, 0.1)",
  },
  "&:click": {
    background: "rgba(25, 81, 64, 0.1)",
  },
}));
