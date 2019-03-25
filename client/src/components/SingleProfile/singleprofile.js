import React, { Component } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import Summary from "../Summary/summary";
import AboutHeader from "../AboutHeader/aboutheader";
import Technologies from "../Technologies/technologies";
import Skills from "../Skills/skills";
import Experience from "../Experience/experience";
import Projects from "../Projects/projects";

// TODO: Query profile here, pass as props to rest of components
class SingleProfile extends Component {
  render() {
    if(this.props.location.state === undefined || this.props.location.state === null) {
      //TODO: query by the userid
      console.log("Need to query user id");
      return (
        <div>
          <div>
            <AboutHeader userImage={this.props.location.state.userImage}/>
            <Summary/>
            <Skills/>
            <Projects/>
          </div>
        </div>
      );
    } else {
      console.log("reeee: " + this.props.location.state.userImage);
      return (
        <div>
          <div>
            <AboutHeader userImage={this.props.location.state.userImage}/>
            <Summary/>
            <Skills/>
            <Projects/>
          </div>
        </div>
      );
    }
  }
}
export default SingleProfile;
