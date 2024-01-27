import { Grid, Typography } from "@mui/material";
import React from "react";
import { StyledLocationSectionContainer } from "./index.styles";
const env = await import.meta.env;
const GOOGLE_KEY = env.VITE_GOOGLE_KEY;

export default function Location() {
  return (
    <StyledLocationSectionContainer id={"testing1"}>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Location</h1>
        <p>Come and visit us at our location</p>
      </Grid>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7088110891505!2d-118.3708399230886!3d34.15379117311883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44ca1a1713cba3c7%3A0x2fb897ff08f5e97b!2sWellness%20%26%20Education%20Group!5e0!3m2!1sen!2sus!4v1706563150801!5m2!1sen!2sus&key=${GOOGLE_KEY}`}
        style={{ border: "0", width: "99vw", height: "40vh" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <h2>Address</h2>
          <p style={{ margin: 0 }}>Address line 1</p>
          <p style={{ margin: 0 }}>Address line 2</p>
          <p style={{ margin: 0 }}>Address line 3</p>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <h2>Contact</h2>
          <p style={{ margin: 0 }}>Contact line 1</p>
          <p style={{ margin: 0 }}>Contact line 2</p>
          <p style={{ margin: 0 }}>Contact line 3</p>
        </Grid>
      </Grid>
    </StyledLocationSectionContainer>
  );
}
