import React, { Component } from "react";
import "./App.css";
import profile from "./Profile.jpg";
import {
  Avatar,
  Tooltip,
  IconButton,
  Button,
  Typography,
  Paper
} from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import Code from "@material-ui/icons/Code";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      color: ""
    };
  }
  render() {
    return (
      <div className="App">
        <Avatar
          src={profile}
          className="main-avatar"
          data-aos="fade-up"
          data-aos-offset={5}
        />
        <div className="socials">
          <Tooltip title="Contact Me" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Contact Me"
              href="mailto:gerryxu.zqx@gmail.com"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-offset={5}
            >
              <Email />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Github"
              href="https://github.com/gerryzqx"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-offset={5}
            >
              <Code />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top">
            <IconButton
              className="social-btn"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/gerry-xu-03102018/"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-offset={5}
            >
              <Typography variant="title">in</Typography>
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Facebook"
              href="https://www.facebook.com/gerry.xu.5"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-offset={5}
            >
              <Typography variant="title">f</Typography>
            </IconButton>
          </Tooltip>
        </div>
        <Paper
          className="name-paper"
          data-aos="fade-up"
          elevation={5}
          data-aos-delay={100}
          data-aos-offset={5}
        >
          <Typography variant="headline" color="primary">
            Gerry Xu
          </Typography>
        </Paper>
        <Paper
          className="name-paper about"
          data-aos="fade-up"
          elevation={5}
          data-aos-delay={100}
          data-aos-offset={5}
        >
          <Typography variant="body1">
            Major: Computer Science
            <br />
            Minor: Mathematics
            <br />
            at CUNY City College of New York
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
