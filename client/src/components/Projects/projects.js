import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import './projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="bg-midnight-blue pt6 pb6 mt-1">  
      <div className="mw7 center ph ph5-ns tc br2 pv10">
        <h2 className="fw6 f3 f2-ns lh-title mt0 mb3">Featured Projects</h2>
      </div>
        <div>
          <div className="projects-grid" style={{justifyContent: 'center'}}>
            <Card shadow={5} style={{ minWidth: "450", border: "2px solid white", margin: '20px'}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "170px",
                  backgroundColor: "#121a2f"
                }}
              >
                TitleOfProject1
              </CardTitle>
              <CardText className="f6 fw4" style={{fontSize: "16px"}}>This is a test project for Project Showcase</CardText>
              <CardText style={{fontSize: "10px"}}>Languages</CardText>
              <CardActions border>
                <Button color="#121a2f"><i className="fab fa-github f4"></i></Button>
                <Button color="#121a2f"><i className="fas fa-globe f4"></i></Button>
                <Button color="#121a2f" className="fr"><i className="fas fa-heart f4 font-red"></i> 129</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton className="icon" name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", border: "2px solid white", margin: '20px'}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "170px",
                  backgroundColor: "#121a2f"
                }}
              >
                TitleOfProject2
              </CardTitle>
              <CardText style={{fontSize: "16px"}}>This is a test project for Project Showcase</CardText>
              <CardText style={{fontSize: "10px"}}>Languages</CardText>
              <CardActions border>
                <Button color="#121a2f"><i className="fab fa-github f4"></i></Button>
                <Button color="#121a2f"><i className="fas fa-globe f4"></i></Button>
                <Button color="#121a2f" className="fr"><i className="fas fa-heart f4 font-red"></i> 129</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton className="icon" name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", border: "2px solid white", margin: '20px'}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "170px",
                  backgroundColor: "#121a2f"
                }}
              >
                TitleOfProject3
              </CardTitle>
              <CardText style={{fontSize: "16px"}}>This is a test project for Project Showcase</CardText>
              <CardText style={{fontSize: "10px"}}>Languages</CardText>
              <CardActions border>
                <Button color="#121a2f"><i className="fab fa-github f4"></i></Button>
                <Button color="#121a2f"><i className="fas fa-globe f4"></i></Button>
                <Button color="#121a2f" className="fr"><i className="fas fa-heart f4 font-red"></i> 143</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton className="icon" name="share" />
              </CardMenu>
            </Card>
          </div>
      </div>
      </div>
      
    );
  }
}

export default Projects;