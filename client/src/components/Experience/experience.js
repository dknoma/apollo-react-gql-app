import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import Logo from "react-svgporn";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h2 className="fw6 f3 f2-ns lh-title mt0 mb3">Experience</h2>
        </div>
        <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <div>
            <dl class="lh-title pa4 mt0">
              <h5 class="f8 b">Company A</h5>
              <dd class="ml0">Senior Software Engineer</dd>
            </dl>
          </div>
          <div>
            <dl class="lh-title pa4 mt0">
              <h5 class="f8 b">Company B</h5>
              <dd class="ml0">Junir Software Engineer</dd>
            </dl>
          </div>
        </article>
      </div>
    );
  }
}

export default Experience;
