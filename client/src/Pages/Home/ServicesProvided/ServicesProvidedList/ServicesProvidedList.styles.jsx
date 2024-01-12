import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const StyledServicesProvidedListOuterGrid = styled(Grid)(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
  })
);

export const StyledServicesProvidedListInnerGrid = styled(Grid)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "0.5rem",
  })
);

export const StyledServicesProvidedListLogoGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledServicesProvidedListLogoTypography = styled(Typography)(
  ({ theme }) => ({
    background: `linear-gradient(to top, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
    borderRadius: "50%",
    width: "125px",
    height: "125px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 5px gray",
    transform: "translateY(0)",
    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "translateY(-10px)",
      transition: "transform 0.3s ease",
    },
  })
);
