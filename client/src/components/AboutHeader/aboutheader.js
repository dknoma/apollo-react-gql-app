import React, { Component } from "react";

class AboutHeader extends Component {
  render() {
    return (
      <div className="bg-grey pb3">
        <div className="tc pa4" style={{ textAlign: "center" }}>
          <img
            src={this.props.user.avatar_url}
            className="br-100 pa1 ba b--black-10 h3 w3"
            alt="profile"
          />
        </div>
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h1 className="fw6 f3 f2-ns mt0 mb1">{this.props.user.username}</h1>
          <h2 className="fw2 f4 lh-copy mt0">{this.props.user.company}</h2>
          <p className="fw1 f5 lh-copy mt0 mb3">{this.props.user.location}</p>
        </div>
      </div>
    );
  }
}
export default AboutHeader;
