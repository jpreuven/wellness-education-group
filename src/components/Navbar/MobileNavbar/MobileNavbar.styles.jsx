import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledMobileNavbarOuterGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
  right: "0",
  left: "0",
  top: "75px",
  backgroundColor: "white",
  textAlign: "center",
  boxShadow: "0px 2px 3px lightgray",
}));
