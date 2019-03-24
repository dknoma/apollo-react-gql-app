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
      <div>
        <div className="mw7 center ph ph5-ns tc br2 pv10">
          <h2 className="fw6 f3 f2-ns lh-title mt0 mb3">Skills</h2>
        </div>
        <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
          <div>
            <dl class="lh-title pa4 mt0">
              <h5 class="f8 b">Languages</h5>
              <dd class="ml0">Java</dd>
              <dd class="ml0">Golang</dd>
              <dd class="ml0">C++</dd>
              <dd class="ml0">Javascript/TypeScript</dd>
              <dd class="ml0">C</dd>
              <dd class="ml0">HTML/CSS</dd>
              <dd class="ml0">Python</dd>
              <dd class="ml0">SQL</dd>
            </dl>
          </div>
        </article>
        <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl20-ns">
          <div>
            <dl class="lh-title pa4 mt0">
              <h5 class="f8 b">Technologies</h5>
              <dd class="ml0">Docker</dd>
              <dd class="ml0">Kubernetes</dd>
              <dd class="ml0">MongoDB</dd>
              <dd class="ml0">MySQL</dd>
              <dd class="ml0">Git/GitHub</dd>
              <dd class="ml0">HTML/CSS</dd>
              <dd class="ml0">Python</dd>
              <dd class="ml0">SQL</dd>
            </dl>
          </div>
        </article>
        <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
          <div>
            <dl class="lh-title pa4 mt0">
              <h5 class="f8 b">Frameworks</h5>
              <dd class="ml0">React/Redux</dd>
              <dd class="ml0">Express</dd>
            </dl>
          </div>
        </article>
      </div>
    );
  }
}

export default Skills;
