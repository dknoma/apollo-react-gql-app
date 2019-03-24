import React, { Component } from 'react';
import Projects from '../Projects/projects';
import AboutMe from '../AboutMe/aboutme';
import {
    Grid, Cell, Tab, Tabs
  } from "react-mdl";

class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <AboutMe/>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <Projects/> 
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tableId) => this.setState({activeTab:tableId})} ripple>
                    <Tab>About</Tab>
                    <Tab>Projects</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>                    
            </div>
        )
    }
}

export default MyProfile;