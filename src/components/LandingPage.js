import React, { useEffect, useState } from "react";
import { config } from "../App";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  Box,
  Container,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const LandingPage = () => {

  const { enqueueSnackbar } = useSnackbar();
  let [data, setData] = useState([]);
  const history = useHistory();

  const performAPICall = async (URL) => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.users);
      setData(response.data.users);
    } catch (e) {
      if (e.response && e.response.data.message) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      }
    }
  };

  useEffect(() => {
    performAPICall(config.endpoint);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: 360,
            overflow: "auto",
          }}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            subheader={<ListSubheader>Select an Account</ListSubheader>}
          >
            {data.map((person) => (
              <ListItem
                key={person.id}
                onClick={() => history.push(`/${person.id}`, { person : person})}
              >
                <ListItemAvatar>
                  <Avatar src={person.profilepicture} />
                </ListItemAvatar>
                <ListItemText>{person.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
