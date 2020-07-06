import React, { Component } from "react";
import {
  createStyles,
  FormHelperText,
  Grid,
  Paper,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";

function RestorationCategory() {
  return (
    <Grid
      item={true}
      xs={12}
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <Paper style={{ padding: "1rem", width: "100%" }}>
        <Typography
          variant="h4"
          component="h4"
          paragraph={true}
          gutterBottom={true}
        >
          Partner Information
        </Typography>
      </Paper>
    </Grid>
  );
}

export default RestorationCategory;
