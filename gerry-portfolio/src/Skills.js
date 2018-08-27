import React, { Component } from "react";

// Icons
import goBack from "./res/back.svg";
import apple from "./res/appleinc.svg";
import css from "./res/css3.svg";
import html from "./res/html-five.svg";
import windows from "./res/windows.svg";
import java from "./res/java.svg";
import cplusplus from "./res/C++.svg";
import c from "./res/C.svg";
import react from "./res/React.svg";
import python from "./res/Python.svg";
import javascript from "./res/Javascript.svg";
import mysql from "./res/Mysql.svg";
import linux from "./res/Arch-linux.svg";

// Other Components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  Chip,
  Avatar
} from "@material-ui/core";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      close: false
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          aria-labelledby="dialog-slide-title"
        >
          <DialogTitle id="dialog-slide-coding">
            {"Programming Languages"}
          </DialogTitle>
          <DialogContent>
            <Chip
              label="Java"
              avatar={<Avatar src={java} />}
              className="skill-item"
            />{" "}
            <Chip
              label="C++"
              avatar={<Avatar src={cplusplus} />}
              className="skill-item"
            />{" "}
            <Chip
              label="C"
              avatar={<Avatar src={c} />}
              className="skill-item"
            />{" "}
            <Chip
              label="Python"
              avatar={<Avatar src={python} />}
              className="skill-item"
            />{" "}
            <Chip
              label="ReactJS"
              avatar={<Avatar src={react} />}
              className="skill-item"
            />{" "}
            <Chip
              label="Javascript"
              avatar={<Avatar src={javascript} />}
              className="skill-item"
            />{" "}
            <Chip
              label="MySQL/MariaDB"
              avatar={<Avatar src={mysql} />}
              className="skill-item"
            />{" "}
            <Chip
              label="HTML5"
              avatar={<Avatar src={html} />}
              className="skill-item"
            />{" "}
            <Chip
              label="CSS3"
              avatar={<Avatar src={css} />}
              className="skill-item"
            />
          </DialogContent>
          <DialogTitle id="dialog-slide-coding">{"Languages"}</DialogTitle>
          <DialogContent>
            <Chip label="English" className="skill-item" />{" "}
            <Chip label="Mandarin(Conversational)" className="skill-item" />
          </DialogContent>
          <DialogTitle id="dialog-slide-os">{"Operating Systems"}</DialogTitle>
          <DialogContent>
            <Chip
              label="MacOS"
              avatar={<Avatar src={apple} />}
              className="skill-item"
            />{" "}
            <Chip
              label="Windows"
              avatar={<Avatar src={windows} />}
              className="skill-item"
            />{" "}
            <Chip
              label="Arch Linux"
              avatar={<Avatar src={linux} />}
              className="skill-item"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              <img src={goBack} alt="go-back" style={{ marginRight: 7 }} /> Go
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Skills;
