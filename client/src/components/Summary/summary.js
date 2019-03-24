import React, { Component } from "react";
import Links from '../Links/links';
import Stats from '../Stats/stats';

class Summary extends Component {
  render() {
    return (
      <article className="cf ph3 ph5-ns pv5">
        <header className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="f3 lh-title fw9 mb3 mt0 pt3 bt bw2">We Don’t Need The Best People, We Need The Best Teams</h1>
          <time className="f6 ttu tracked gray"></time>
          <Links/>
          <Stats/>
        </header>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure mt0-ns">
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
            Currently a student at the University of San Francisco. Graduating in May 2020. 
          </p>
        </div>
      </article>
    );
  }
}

export default Summary;
