import React from "react";
import { Box, Typography } from "@mui/material";

const Map = ({ location }) => {
  return (
    <Box
      sx={{
        m: 2,
        p: 2,
        objectFit: "cover",
      }}
    >
      <img
        src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api_480.png"
        alt="Address Map"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="subtitle1" sx={{ mr: 0.5 }}>{"Lat: " + location.lat}</Typography>
        <Typography variant="subtitle1" x={{ ml: 0.5 }}>{"Lng: " + location.lng}</Typography>
      </Box>
    </Box>
  );
};

export default Map;
