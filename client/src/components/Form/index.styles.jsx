import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledFormOuterGrid = styled(Grid)(({ theme }) => ({
  width: "800px",
  border: "1px solid gray",
  borderRadius: "10px",
  padding: "15px 30px",
  boxShadow: "0px 2px 5px gray",
}));

export const StyledFormTypographyHeader = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "25px",
}));

export const StyledFormOuterGridContentNames = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
}));
export const StyledFormOuterGridContentEmail = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  width: "calc(50% - 1rem)",
}));

export const StyledFormInnerGridContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
}));
