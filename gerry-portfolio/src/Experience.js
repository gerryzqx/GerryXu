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
      open: false,
      scroll: "body"
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
          scroll={this.state.scroll}
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
          <DialogContent>
            <Typography variant="title">
              {"Research Foundation of CUNY"}
            </Typography>
            <Typography variant="subheading">
              {"Technology Intern at NYC Department of Education"}
            </Typography>
            <Typography variant="caption">
              {"September 2017 to Feburary 2018"}
            </Typography>
            <br />• Configured wireless devices to access DOE network.
            <br />• Troubleshoot hardware and software problems.
            <br />• Maintained classroom servers and technology equipment
            inventory.
            <br />• Assisted in setup of new computer equipment in classrooms
            and offices and install software.
            <br />• Monitored equipment and work with Help Center to ensure
            timely repair.
            <br />• Aided in use of technology equipment.
          </DialogContent>
          <DialogContent>
            <Typography variant="title">{"Faith Bible Church"}</Typography>
            <Typography variant="subheading">
              {"Teaching Assistant for 1st and 2nd graders"}
            </Typography>
            <Typography variant="caption">
              {"June 2015 to August 2015"}
            </Typography>
            <br />• Administered in lesson delivery with worksheets and
            assignments.
            <br />• Communicated and interacted with parents and caregivers
            regarding their children's academic progress.
            <br />• Assisted lead teacher in lesson delivery and presentation
            for Math, English, Art and Music.
            <br />• Organized extra-curricular activities, special events, and
            workshops.
            <br />• Maintained a clean, safe and fully organized classroom.
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

export default Experience;
