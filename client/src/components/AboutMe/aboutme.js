import React, { Component } from "react";
import "./aboutme.css";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import Summary from "../Summary/summary";
import AboutHeader from "../AboutHeader/aboutheader";
import Technologies from "../Technologies/technologies";
import Skills from "../Skills/skills";
import Experience from "../Experience/experience";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div>
          <AboutHeader />
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="12">
                <Summary />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="12">
              <Skills />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="12">
              <Experience />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default AboutMe;
