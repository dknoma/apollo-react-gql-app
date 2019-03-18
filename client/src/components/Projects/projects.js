import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import './projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://previews.123rf.com/images/mamanamsai/mamanamsai1509/mamanamsai150900659/46229159-quality-coding-concept-design-on-dark-background-clean-vector.jpg) center/cover"
            }}
          >
            TitleOfProject1
          </CardTitle>
          <CardText>This is a test project for Project Showcase</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton className="icon" name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://previews.123rf.com/images/mamanamsai/mamanamsai1509/mamanamsai150900659/46229159-quality-coding-concept-design-on-dark-background-clean-vector.jpg) center/cover"
            }}
          >
            TitleOfProject2
          </CardTitle>
          <CardText>This is a test project for Project Showcase</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton className="icon" name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://previews.123rf.com/images/mamanamsai/mamanamsai1509/mamanamsai150900659/46229159-quality-coding-concept-design-on-dark-background-clean-vector.jpg) center/cover"
            }}
          >
            TitleOfProject3
          </CardTitle>
          <CardText>This is a test project for Project Showcase</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Site</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton className="icon" name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Projects;
