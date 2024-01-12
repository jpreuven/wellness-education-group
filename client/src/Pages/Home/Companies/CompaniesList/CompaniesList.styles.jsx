import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const StyledCompaniesImage = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "75px",
  [theme.breakpoints.up("xl")]: {
    width: "250px",
    height: "150px",
  },
}));
export const StyledCompaniesListImageGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  gap: "2rem",
}));
