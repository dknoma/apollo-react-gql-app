import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {
  Header,
  HeaderRow,
  Textfield
} from "react-mdl";

export class GitHubAuth extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
	render() {
		// console.log(this.props.location);
		// var data = localStorage.getItem('data');
		// console.log("data: " + data);
		return (
			<div><center>
				<button id="gitauth">
				<Link 
					style={{display: 'block', height: '100%'}}
					to="/gitauth"
				>
					Authenticate GitHub
				</Link>
				</button>
			</center></div>
		)
	}
}

export default GitHubAuth;