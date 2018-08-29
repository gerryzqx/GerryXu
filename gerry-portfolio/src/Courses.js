import React, { Component } from "react";

// Icons
import goBack from "./res/back.svg";

// Other Components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  Chip,
  Typography
} from "@material-ui/core";

class Courses extends Component {
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
          TransitionComponent={Slide}
          aria-labelledby="dialog-slide-courses-taken"
        >
          <DialogTitle
            id="dialog-slide-courses-taken"
            style={{ textAlign: "center" }}
          >
            <Typography variant="headline" style={{ color: "#34b7f1" }}>
              {"COURSES TAKEN"}
            </Typography>
          </DialogTitle>
          <DialogTitle id="dialog-slide-cs-courses">
            {"Computer Science Courses"}
          </DialogTitle>
          <DialogContent>
            <Chip
              label="CSC103: Intro to Computer Science"
              className="course-item"
            />{" "}
            <Chip label="CSC104: Discrete Math" className="course-item" />{" "}
            <Chip
              label="CSC113: Programming Language (Python)"
              className="course-item"
            />
            <Chip
              label="CSC211: Fundamentals of Computer Systems"
              className="course-item"
            />{" "}
            <Chip label="CSC212: Data Structures" className="course-item" />{" "}
            <Chip
              label="CSC217: Probability and Statistics for CS"
              className="course-item"
            />{" "}
            <Chip label="CSC220: Algorithms" className="course-item" />{" "}
            <Chip label="CSC221: Software Design Lab" className="course-item" />{" "}
            <Chip
              label="CSC301: Numerical Issues in Scientific Programming"
              className="course-item"
            />{" "}
            <Chip
              label="CSC304: Theoretical Computer Science"
              className="course-item"
            />{" "}
            <Chip
              label="CSC322: Software Engineering"
              className="course-item"
            />{" "}
            <Chip label="CSC336: Database Systems" className="course-item" />
          </DialogContent>
          <DialogTitle id="dialog-slide-math-courses">
            {"Math Courses"}
          </DialogTitle>
          <DialogContent>
            <Chip label="MATH201: Calculus 1" className="course-item" />{" "}
            <Chip label="MATH202: Calculus 2" className="course-item" />{" "}
            <Chip
              label="MATH203: Calculus 3 (Multi-Variable)"
              className="course-item"
            />{" "}
            <Chip
              label="MATH346: Elements of Linear Algebra"
              className="course-item"
            />{" "}
            <Chip
              label="MATH391: Methods of Differential Equations"
              className="course-item"
            />{" "}
            <Chip
              label="MATH308: Bridge to Advanced Mathematics (Mathematical Proofs)"
              className="course-item"
            />
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

export default Courses;
