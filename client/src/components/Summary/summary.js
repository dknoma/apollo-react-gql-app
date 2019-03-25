import React, { Component } from "react";
import Links from '../Links/links';
import Stats from '../Stats/stats';

class Summary extends Component {
  render() {
    const pStyle = {
      position: 'relative',
      top: '25%'
    }  
    return (
	  <div className="flex mt-1">
	    <div className="w-50 bg-grey mr-1 tc center pt4">
		    <header className="w-100" style={pStyle}>
		      <h1 className="f3 lh-title fw9 mb1 mt0 pt3 bw2">We Don’t Need The Best People, We Need The</h1>
		      <Links/>
		      <Stats/>
		    </header>
        </div>
	    <div className="w-50 bg-grey tc center pt4">
	      <header className="w-100">
	        <h1 className="f3 lh-title fw9 mb1 mt0 pt3 bw2">About Me</h1>
	        <p className="f5 lh-copy mt0-ns pa3 w-70 center" style={{textAlign: "justify"}}>
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
          </header>
        </div>
      </div>
      
      
//      <div className="cf ph3 ph5-ns pv5">
//       
//        
        
//      </div>
//     </div>
    );
  }
}

export default Summary;
