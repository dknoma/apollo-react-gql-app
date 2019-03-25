import React, { Component } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import Summary from "../Summary/summary";
import AboutHeader from "../AboutHeader/aboutheader";
import Technologies from "../Technologies/technologies";
import Skills from "../Skills/skills";
import Experience from "../Experience/experience";
import Projects from "../Projects/projects";

class SingleProfile extends Component {
  render() {
    return (
      <div>
        <div>
          <AboutHeader/>
          <Summary/>
          <Skills/>
          <Projects/>
        </div>
      </div>
    );
  }
}
export default SingleProfile;
