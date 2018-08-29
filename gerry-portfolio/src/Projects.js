import React, { Component } from "react";

// Icons
import goBack from "./res/back.svg";
import code from "./res/code.svg";
import website from "./res/website.svg";

// Other Components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  Typography
} from "@material-ui/core";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
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
          aria-labelledby="alert-dialog-slide-projects"
        >
          <DialogTitle
            id="alert-dialog-slide-projects"
            style={{ textAlign: "center" }}
          >
            <Typography variant="headline" style={{ color: "#8080ff" }}>
              {"PROJECTS"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="title">{"My Portolfio Website"}</Typography>
            <Typography variant="caption">{"Personal Project"}</Typography>
            <br />
            Web application built using Facebook's ReactJS library and
            Material-UI a react components that implement Google's Material
            Design.
            <br />
            <Button
              variant="outlined"
              color="primary"
              size="small"
              target="_blank"
              href="https://github.com/gerryzqx/GerryXu"
            >
              View Source Code
              <img src={code} alt="source-code" className="code-icon" />
            </Button>
            <Button
              className="website-btn"
              variant="outlined"
              size="small"
              color="secondary"
              target="_blank"
              href="https://google.com"
            >
              View Website
              <img src={website} alt="website-icon" className="website-icon" />
            </Button>
          </DialogContent>
          <DialogContent>
            <Typography variant="title">{"RailRoad Project"}</Typography>
            <Typography variant="caption">
              {"Database Course Final Project"}
            </Typography>
            <br />
            Group Railroad Project for CSC 336 (Database Systems) at CCNY for
            Professor Peter Barnett.
            <br />
            The technologies used to create this Railroad Project are MariaDB,
            NodeJS, Socket.io (NodeJS library), ReactJS and Material-UI.
            <br />
            <Button
              variant="outlined"
              color="primary"
              size="small"
              target="_blank"
              href="https://github.com/gerryzqx/Railroad-Project"
            >
              View Source Code
              <img src={code} alt="source-code" className="code-icon" />
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} style={{ color: "red" }}>
              <img src={goBack} alt="go-back" style={{ marginRight: 7 }} /> Go
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Projects;
