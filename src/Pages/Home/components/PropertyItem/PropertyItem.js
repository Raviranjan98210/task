import React from "react";
import Grid from "@material-ui/core/Grid";
import CardDetail from "./CardDetail";

const PropertyItem = () => {
  return (
    <div>
      <Grid container spacing={4} direction="row">
        <Grid item xs={12} md={4}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} md={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardDetail />
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyItem;
