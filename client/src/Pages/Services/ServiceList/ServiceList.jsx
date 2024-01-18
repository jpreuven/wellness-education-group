import { Grid, Typography } from "@mui/material";
import React from "react";
import { StyledServiceListSectionContainer } from "./ServiceList.styles";
// import testImg from "../../../assets/images/wellness-logo.png";
import ServiceListData from "./ServiceListData/ServiceListData";

export default function ServiceList() {
  return (
    <StyledServiceListSectionContainer>
      <ServiceListData />
      {/* <Grid sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item component={"img"} src={testImg} order={2} xs={12} sm={4} />
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            order={1}
            xs={12}
            sm={7}
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              sx={{ margin: "0 !important" }}
            >
              School based
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              alias illo voluptatum quam inventore, aliquam delectus atque cum.
              Ipsa ducimus porro rem necessitatibus obcaecati voluptate
              perferendis in ipsam blanditiis sint magni quis incidunt dolorum
              vel minus aut, enim ad minima.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            component={"img"}
            src={testImg}
            width={"350px"}
            xs={12}
            sm={4}
          />
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            xs={12}
            sm={7}
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              sx={{ margin: "0 !important" }}
            >
              School based
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ipsam modi ab, pariatur dolores alias amet voluptatibus, sunt
              quasi nam nulla laboriosam perspiciatis, non at nesciunt sequi
              nisi doloribus maiores asperiores rerum ullam. Repellendus,
              excepturi laboriosam! Saepe natus optio quas.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            component={"img"}
            src={testImg}
            width={"350px"}
            order={2}
            xs={12}
            sm={4}
          />
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            order={1}
            xs={12}
            sm={7}
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              sx={{ margin: "0 !important" }}
            >
              School based
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              nostrum cupiditate vero. Nesciunt, consequatur! Odit deleniti
              doloremque fugiat nesciunt! Sit labore aut commodi repellat
              tempore impedit aliquid asperiores dolores animi est facilis,
              exercitationem ex nemo libero voluptas eos placeat quasi.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            container
            component={"img"}
            src={testImg}
            width={"350px"}
            xs={12}
            sm={4}
          />
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            xs={12}
            sm={7}
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              sx={{ margin: "0 !important" }}
            >
              School based
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              nostrum cupiditate vero. Nesciunt, consequatur! Odit deleniti
              doloremque fugiat nesciunt! Sit labore aut commodi repellat
              tempore impedit aliquid asperiores dolores animi est facilis,
              exercitationem ex nemo libero voluptas eos placeat quasi.
            </Typography>
          </Grid>
        </Grid>
      </Grid> */}
    </StyledServiceListSectionContainer>
  );
}
