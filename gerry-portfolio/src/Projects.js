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
  return <Slide direction="right" {...props} />;
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      scroll: "body"
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
          scroll={this.state.scroll}
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
            <br />• Web application built using Facebook's ReactJS library and
            Material-UI, a react components that implement Google's Material
            Design.
            <br />
            <Button
              className="code-btn"
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
              {"Database Final Project"}
            </Typography>
            <br />• Group Railroad Project for CSC 336 (Database Systems) at
            CCNY for Professor Peter Barnett.
            <br />• The technologies used to built this Railroad Project are
            MariaDB, NodeJS, Socket.io (NodeJS library), ReactJS and
            Material-UI.
            <br />
            <Button
              className="code-btn"
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
          <DialogContent>
            <Typography variant="title">{"Pizza Order System"}</Typography>
            <Typography variant="caption">
              {"Software Engineering Final Project"}
            </Typography>
            <br />• Group Railroad Project for CSC 322 (Software Engineering) at
            CCNY for Professor Jie Wei.
            <br />• The technologies used to built this Pizza Order System are
            ReactJS, Material-UI, Google Maps and Places API, Google Maps
            Wrapper, Firebase (Hosting, BaaS and Authentication), Axios (HTTP
            Requests), AOS (animation Provider), History, React Router, React
            Native (App).
            <br />
            <Button
              className="code-btn"
              variant="outlined"
              color="primary"
              size="small"
              target="_blank"
              href="https://github.com/gerryzqx/PizzaOrderSystem"
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
              href="https://pos-tagmhaxt.firebaseapp.com/"
            >
              View Website
              <img src={website} alt="website-icon" className="website-icon" />
            </Button>
          </DialogContent>
          <DialogContent>
            <Typography variant="title">{"Histogram Pie Chart"}</Typography>
            <Typography variant="caption">
              {"Software Design Lab Project"}
            </Typography>
            <br />• Implemented a GUI that allows a user to input the number of
            letters, n, and calculate the n most frequent letters and their
            probabilities in any .txt file and display a pie chart together with
            the letter probabilities.
            <br />• The GUI is built using Java.
            <br />
            <Button
              className="code-btn"
              variant="outlined"
              color="primary"
              size="small"
              target="_blank"
              href="https://github.com/gerryzqx/CSC221-Software-Design-Project/tree/master/Histogram%20Letter%20Pie%20Chart"
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
