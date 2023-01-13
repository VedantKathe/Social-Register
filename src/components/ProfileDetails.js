import { Box, Grid, Avatar, Typography } from "@mui/material";
import Map from "./Map";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ProfileDetails = ({ person }) => {

  const [loc, setLoc] = useState({});
  const history = useHistory();

  function Convert(obj) {
    let res = {};
    res["lat"] = parseFloat(obj["lat"]);
    res["lng"] = parseFloat(obj["lng"]);
    console.log(res);
    setLoc(res);
  }

  useEffect(() => {
    Convert(person.address.geo);
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid spacing={4} container>
        <Grid xs={12} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: 1,
              borderColor: "grey.500",
            }}
          >
            <Typography variant="h5" color="text.primary" sx={{ mt: 0.5 }}>
              Profile
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onClick={() => history.push(`/`)}
            >
              <Avatar src={person.profilepicture} sx={{ mb: 1, mr: 1 }} />
              <Typography variant="subtitle1" sx={{ ml: 1, mt: 0.5 }}>
                {person.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4} item>
          <Grid spacing={4} direction="column" container>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={person.profilepicture}
                  sx={{ width: 200, height: 200 }}
                />
                <Typography variant="subtitle1">{person.name}</Typography>
                <Typography variant="subtitle1">
                  {"Username: " + person.username}
                </Typography>
                <Typography variant="subtitle1">
                  {"email:" + person.email}
                </Typography>
                <Typography variant="subtitle1">
                  {"Phone: " + person.phone}
                </Typography>
                <Typography variant="subtitle1">
                  {"Website: " + person.website}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                  borderTop: 1,
                  borderColor: "grey.500",
                }}
              >
                <Typography variant="subtitle1" sx={{ ml: 1, mt: 0.5 }}>
                  Company
                </Typography>
                <Typography variant="subtitle1">
                  {"Name: " + person.company.name}
                </Typography>
                <Typography variant="subtitle1">
                  {"Catchprhase: " + person.company.catchPhrase}
                </Typography>
                <Typography variant="subtitle1">
                  {"bs: " + person.company.bs}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={8} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: 1,
              borderColor: "grey.500",
            }}
          >
            <Typography variant="subtitle1" sx={{ ml: 1, mt: 0.5 }}>
              Address:
            </Typography>
            <Typography variant="subtitle1">
              {"Street: " + person.address.street}
            </Typography>
            <Typography variant="subtitle1">
              {"Suite: " + person.address.suite}
            </Typography>
            <Typography variant="subtitle1">
              {"City: " + person.address.city}
            </Typography>
            <Typography variant="subtitle1">
              {"Zipcode: " + person.address.zipcode}
            </Typography>
            <Map location={person.address.geo} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
