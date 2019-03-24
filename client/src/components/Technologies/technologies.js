import React, { Component } from "react";
import Logo from "react-svgporn";
import "./technologies.css";

class Technologies extends Component {
  render() {
    return (
      <div>
        <dl className="lh-title pa4 mt0">
            <dt className="f6 b">{this.props.skill}</dt>
        </dl>
        <div>
          <Logo name={this.props.skill} width={60} height={50} />
        </div>
      </div>
    );
  }
}

export default Technologies;
