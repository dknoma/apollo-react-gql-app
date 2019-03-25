import React, { Component } from "react";


class Links extends Component {
  render() {
    return (
      <div>
        <a className="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/mrmrs" title="GitHub">
           <i className="fab fa-github f3"></i>
        </a>
        <a className="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/mrmrs" title="GitHub">
           <i className="fas fa-envelope f3"></i>
        </a>
      </div>  
    );
  }
}

export default Links;