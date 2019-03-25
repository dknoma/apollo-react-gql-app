import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <MDBFooter className="font-small">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="fw6 black-90">
            &copy; {new Date().getFullYear()} Copyright:{" Showcase 2019"}
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
