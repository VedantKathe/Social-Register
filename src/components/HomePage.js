import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import { useLocation } from "react-router-dom";

function HomePage({ person }) {
  const [tabIndex, setTabIndex] = useState(0);
  const location = useLocation();

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Grid item xs={2}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            orientation="vertical"
          >
            <Tab label="Profile" />
            <Tab label="Posts" />
            <Tab label="Gallery" />
            <Tab label="To Do" />
          </Tabs>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ margin: 2 }}>
            {tabIndex === 0 && (
              <Box sx={{ width: "100%" }}>
                <ProfileDetails person={location.state.person} />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box
                sx={{
                  width: "100%",
                  height: 620,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography>Coming Soon...</Typography>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box
                sx={{
                  width: "100%",
                  height: 620,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography>Coming Soon...</Typography>
              </Box>
            )}
            {tabIndex === 3 && (
              <Box
                sx={{
                  width: "100%",
                  height: 620,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography>Coming Soon...</Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
