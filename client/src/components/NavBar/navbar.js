import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {
  Header,
  HeaderRow,
  Textfield
} from "react-mdl";

export class NavBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
	render() {
		console.log(this.props.location);
		var data = localStorage.getItem('u');
		console.log("data: " + data);
		if(data === null || data === undefined) {
			return (
				<Header className="db dt-l w-100 border-box pa3 ph5-l bg-nav">
				<HeaderRow
				  title={
					<Link style={{ textDecoration: "none", color: "white" }} to="/">
					  Showcase
					</Link>
				  }
				>
				  <Link style={{ margin: `10px`, textDecoration: "none", color: "white" }} to="/signup">
					{" "}
					Sign Up{" "}
				  </Link>
				  <Link style={{ margin: `10px`, textDecoration: "none", color: "white" }} to="/login">
					{" "}
					Log In{" "}
				  </Link>
				  <Textfield
					value=""
					onChange={() => {}}
					label="Search2"
					expandable
					expandableIcon="search"
				  />
				</HeaderRow>
			  </Header>)
		} else {
			return (
			<Header className="db dt-l w-100 border-box pa3 ph5-l bg-nav">
				<HeaderRow
					title={
					<Link style={{ textDecoration: "none", color: "white" }} to="/">
						Showcase
					</Link>
					}
				>
				<Link style={{ margin: `10px`, textDecoration: "none", color: "white" }} 
					onClick={localStorage.removeItem("u")} to="/">
					{" "}
					Log Out{" "}
				</Link>
					<Textfield
					value=""
					onChange={() => {}}
					label="Search2"
					expandable
					expandableIcon="search"
					/>
				</HeaderRow>
			</Header>)
		}
	}
}

export default NavBar;