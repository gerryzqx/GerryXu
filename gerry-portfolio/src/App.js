import React, { Component } from "react";

// Icons
import profile from "./res/Profile.jpg";
// import cancel from "./res/cancel-circle.svg";
import cs from "./res/CS.svg";
import math from "./res/Math.svg";
import cityCollege from "./res/City-college.jpg";
import instagram from "./res/instagram.svg";
import github from "./res/github.svg";
import linkedin from "./res/linkedin.svg";
import facebook from "./res/facebook.svg";
import email from "./res/mail.svg";
import skills from "./res/skills.svg";
import courses from "./res/courses.svg";
import projects from "./res/projects.svg";
import experiences from "./res/experience.svg";

// Other Components
import "./App.css";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Courses from "./Courses.js";
import Experience from "./Experience.js";
import {
  Avatar,
  Tooltip,
  IconButton,
  Typography,
  Paper,
  Button,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      open: true
    };
  }

  render() {
    return (
      <div
        className="App"
        data-aos="zoom-in-up"
        data-aos-offset={5}
        data-aos-delay={100}
        data-aos-duration={1500}
      >
        <Avatar src={profile} className="main-avatar" />
        <Paper className="name-paper">
          <Typography variant="headline" color="primary">
            Gerry Xu (许仲秋)
          </Typography>
        </Paper>
        <div className="socials">
          <Tooltip title="GitHub" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Github"
              href="https://github.com/gerryzqx"
            >
              <img src={github} alt="github" />
            </IconButton>
          </Tooltip>
          <Tooltip title="E-mail Me" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Contact Me"
              href="mailto:gerryxu.zqx@gmail.com"
            >
              <img src={email} alt="e-mail" />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top">
            <IconButton
              className="social-btn"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/gerry-xu-03102018/"
            >
              <img src={linkedin} alt="linkedin" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Facebook"
              href="https://www.facebook.com/gerry.xu.5"
            >
              <img src={facebook} alt="facebook" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" placement="top">
            <IconButton
              className="social-btn"
              aria-label="Instagram"
              href="https://www.instagram.com/gerryzqx/?hl=en"
            >
              <img src={instagram} alt="instagram" />
            </IconButton>
          </Tooltip>
        </div>
        <Paper className="name-paper about">
          <MuiThemeProvider
            theme={createMuiTheme({
              palette: {
                primary: { main: "#e57373" },
                secondary: { main: "#9575cd" },
                error: { main: "#f06292" }
              }
            })}
          >
            <Typography variant="display1" color="primary">
              About Me
            </Typography>
            <Typography variant="body2" style={{ color: "#aed581" }}>
              Major: Computer Science{" "}
              <img src={cs} alt="cs" className="image" />
            </Typography>
            <Typography variant="body2" color="error">
              Minor: Mathematics <img src={math} alt="math" className="image" />
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className="college-text"
            >
              College: CUNY City College of New York
              <img src={cityCollege} alt="city-college" className="image" />
            </Typography>
          </MuiThemeProvider>
        </Paper>
        <div className="socials" data-aos-offset={5}>
          <Button
            size="medium"
            variant="contained"
            className="social-btn"
            style={{ color: "#f46f30" }}
            onClick={() => {
              this.setState({
                content: "skills",
                open: true
              });
            }}
          >
            Skills
            <img
              src={skills}
              alt="technical-skills"
              style={{ width: 20, marginLeft: 7 }}
            />
          </Button>
          <Button
            size="medium"
            variant="contained"
            className="social-btn"
            style={{ color: "#34b7f1" }}
            onClick={() => {
              this.setState({
                content: "courses-taken",
                open: true
              });
            }}
          >
            Courses Taken
            <img
              src={courses}
              alt="courses-taken"
              style={{ width: 20, marginLeft: 7 }}
            />
          </Button>
          <Button
            size="medium"
            variant="contained"
            className="social-btn"
            style={{ color: "#8080ff" }}
            onClick={() => {
              this.setState({
                content: "projects",
                open: true
              });
            }}
          >
            Projects
            <img
              src={projects}
              alt="projects"
              style={{ width: 20, marginLeft: 7 }}
            />
          </Button>
          <Button
            size="medium"
            variant="contained"
            className="social-btn"
            style={{ color: "#2eb82e" }}
            onClick={() => {
              this.setState({
                content: "experience",
                open: true
              });
            }}
          >
            Experience
            <img
              src={experiences}
              alt="experience"
              style={{ width: 20, marginLeft: 7 }}
            />
          </Button>
          {/* {this.state.content !== "" ? (
            <Tooltip title="Clear" placement="top">
              <IconButton
                className="social-btn"
                onClick={() => {
                  this.setState({ content: "", color: "" });
                }}
              >
                <img src={cancel} alt="delete-all" />
              </IconButton>
            </Tooltip>
          ) : null} */}
        </div>
        {/* {this.state.content !== "" ? (
          <Typography
            variant="headline"
            style={{ color: this.state.color, marginTop: 18 }}
          >
            {this.state.content.toUpperCase()}
          </Typography>
        ) : null} */}
        {this.state.content === "skills" ? (
          <Skills />
        ) : this.state.content === "courses-taken" ? (
          <Courses />
        ) : this.state.content === "projects" ? (
          <Projects />
        ) : this.state.content === "experience" ? (
          <Experience />
        ) : null}
      </div>
    );
  }
}

export default App;
