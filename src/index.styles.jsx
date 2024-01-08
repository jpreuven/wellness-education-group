import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  width: "75%",
  height: "3px",
  margin: "auto",
  backgroundColor: "rgba(25, 81, 64, 0.7)",
}));
