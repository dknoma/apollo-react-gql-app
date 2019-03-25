import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import Logo from "react-svgporn";
import "./skills.scss";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-grey mt-1 pt5 pb5">
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h2 className="fw6 f3 f2-ns lh-title mt0 mb3">Skills</h2>
        </div>
        <article className="w-100 dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns tc center">
          <div>
            <dl className="lh-title pa4 mt0 m-auto">
              <dd className="ml0 fw5 f5 dib mr4"><Logo name="GO" width={20} className="mr2"/> Golang</dd>
              <dd className="ml0 fw5 f5 dib mr4"><Logo name="C" width={20} className="mr2"/> C </dd>
              <dd className="ml0 fw5 f5 dib mr4"><Logo name="HTML" width={20} className="mr2"/> HTML5</dd>
              <dd className="ml0 fw5 f5 dib mr4"><Logo name="Java" width={20} className="mr2"/> Java</dd>
              <dd className="ml0 fw5 f5 dib mr4"><Logo name="Python" width={20} className="mr2"/> Python</dd>
            </dl>
          </div>
        </article>
      </div>
    );
  }
}

export default Skills;
