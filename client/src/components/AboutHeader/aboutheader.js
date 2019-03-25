import React, { Component } from "react";

class AboutHeader extends Component {
  render() {
    return (
      <div className="bg-grey pb3">
        <div className="tc pa4" style={{ textAlign: "center" }}>
          <img
            src={this.props.userImage}
            className="br-100 pa1 ba b--black-10 h3 w3"
            alt="profile"
          />
        </div>
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h1 className="fw6 f3 f2-ns mt0 mb1">Teean Ronson</h1>
          <h2 className="fw2 f4 lh-copy mt0">Graduate Computer Science</h2>
          <p className="fw1 f5 lh-copy mt0 mb3">San Francisco, USA</p>
        </div>
      </div>
    );
  }
}
export default AboutHeader;
