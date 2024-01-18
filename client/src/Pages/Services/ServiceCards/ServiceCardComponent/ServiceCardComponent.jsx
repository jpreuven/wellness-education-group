import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import testImg from "../../../../assets/images/wellness-logo.png";

export default function ServiceCardComponent() {
  return (
    <Card
      style={{
        maxWidth: 450,
        // margin: "auto",
        boxShadow: "0px 5px 5px lightgray",
      }}
    >
      <CardContent style={{ padding: "16px" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <img src={testImg} width={"350px"} />
        </Grid>
        <Typography
          style={{ fontSize: "18px", fontWeight: "bold" }}
          gutterBottom
        >
          Card Title
        </Typography>
        <Typography variant="body2" color="textSecondary">
          This is a sample card content. You can replace it with your own text.
          This is a sample card content. You can replace it with your own text.
          This is a sample card content. You can replace it with your own text.
          This is a sample card content. You can replace it with your own text.
          This is a sample card content. You can replace it with your own text.
          This is a sample card content. You can replace it with your own text.
        </Typography>
      </CardContent>
    </Card>
  );
}
