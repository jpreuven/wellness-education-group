import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const StyledInnerDivider = styled(Divider)(({ theme }) => ({
  width: "75%",
  height: "3px",
  margin: "auto",
  backgroundColor: "rgba(25, 81, 64, 0.7)",
}));

export const StyledFooterDivider = styled(Divider)(({ theme }) => ({
  // width: "90%",
  height: "2px",
  margin: "auto",
  backgroundColor: "rgba(25, 81, 64, 0.7)",
}));
