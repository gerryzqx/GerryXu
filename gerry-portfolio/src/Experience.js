import React, { Component } from "react";

// Icons
import experiences from "./res/experience.svg";
import goBack from "./res/back.svg";

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

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          size="medium"
          variant="contained"
          className="social-btn section-btn"
          style={{ color: "#2eb82e" }}
          onClick={this.handleOpen}
        >
          Experience
          <img
            src={experiences}
            alt="experience"
            className="section-icon"
            style={{ width: 20, marginLeft: 7 }}
          />
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          aria-labelledby="alert-dialog-slide-experience"
        >
          <DialogTitle
            id="alert-dialog-slide-experience"
            style={{ textAlign: "center" }}
          >
            <Typography variant="headline" style={{ color: "#2eb82e" }}>
              {"EXPERIENCE"}
            </Typography>
          </DialogTitle>
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

export default Experience;
