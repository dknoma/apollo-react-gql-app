import React, { Component } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import Summary from "../Summary/summary";
import AboutHeader from "../AboutHeader/aboutheader";
import Technologies from "../Technologies/technologies";
import Skills from "../Skills/skills";
import Experience from "../Experience/experience";
import Projects from "../Projects/projects";
import { Query } from "react-apollo"
import { GetGitHubUser } from '../../queries/queries';

// TODO: Query profile here, pass as props to rest of components
class SingleProfile extends Component {
  render() {
    const userId = parseInt(this.props.match.params.id);
    console.log("userId: " + userId);
    return (
      <div>
        <Query query={GetGitHubUser} variables={{ id: userId}}>
          {
              ({loading, error, data}) => {
                  if(loading) {
                      return <p>Loading...</p>;
                  }
                  // console.log("DOOO : " + data)
                  if(data == null || data.getGitHubUser == null) {
                      throw new Error('404 Not Found');
                  }
                  if(error) {
                      return {error};
                  }
                  const gitHubUser = data.getGitHubUser
                  return(
                    <div>
                      <AboutHeader user={gitHubUser}/>
                      <Summary user={gitHubUser}/>
                      <Skills user={gitHubUser}/>
                      <Projects user={gitHubUser}/>
                    </div>
                  )
                }
          }
        </Query>
      </div>
    );
    // if(this.props.location.state === undefined || this.props.location.state === null) {
    //   //TODO: query by the userid
    //   console.log("Need to query user id");
    //   return (
    //     <div>
    //       <div>
    //         <AboutHeader userImage={this.props.location.state.userImage}/>
    //         <Summary/>
    //         <Skills/>
    //         <Projects/>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   console.log("reeee: " + this.props.location.state.userId); 
    // }
  }
}
export default SingleProfile;
