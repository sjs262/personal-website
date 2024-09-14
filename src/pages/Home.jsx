import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { School, Work } from "@mui/icons-material";
import profile from "../images/profile.jpg";
import soundFile from "../images/honk.mp3";

const honk = new Audio(soundFile);
honk.volume = 0.5;

function Home() {
  return (
    <Box mx="16px">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <img
            src={profile}
            alt="profile"
            width="100%"
            onClick={(e) => {
              let x = (e.clientX - e.target.x) / e.target.width;
              let y = (e.clientY - e.target.y) / e.target.height;
              if (0.45 < x && x < 0.55 && 0.45 < y && y < 0.55) honk.play();
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <School />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Case Western Reserve University - Computer Science B.S. 2024, M.S. 2025, minors in music & mathematics" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Junior Developer at Magic Sheet Music LLC" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Typography>
                Hello, my name is Soren and I'm a master's student at Case
                Western Reserve University. I study computer science with a
                concentration in artificial intelligence.
              </Typography>
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <ListItem>
              <Typography>
                In my free time, I lift weights, play piano and experiment with
                computer generated fractal art.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
