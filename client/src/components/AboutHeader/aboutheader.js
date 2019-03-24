import React, { Component } from "react";

class AboutHeader extends Component {
  render() {
    return (
      <div>
        <div className="tc pa4" style={{ textAlign: "center" }}>
          <img
            src="https://media.licdn.com/dms/image/C5603AQEzDobK9kQ_ow/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=ADTJOYvDlT5mTl3Ncz97-bwDAVJE4FXwykRh0RDOt60"
            className="br-100 pa1 ba b--black-10 h3 w3"
            alt="profile-image"
          />
        </div>
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Teean Ronson</h1>
          <h2 className="fw2 f4 lh-copy mt0 mb3">Graduate Computer Science</h2>
          <p className="fw1 f5 mt0 mb3">San Francisco, USA</p>
        </div>
      </div>
    );
  }
}
export default AboutHeader;
