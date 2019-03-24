import React, { Component } from 'react';
import { MDBCol,MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import UserCard from '../UserCard/usercard'
import UserQuickInfo from '../UserQuickInfo/userquickinfo';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <UserQuickInfo/>
        </div>
        <div>
            <UserCard 
            userImage="https://media.licdn.com/dms/image/C5603AQEzDobK9kQ_ow/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=ADTJOYvDlT5mTl3Ncz97-bwDAVJE4FXwykRh0RDOt60"
            username="Teean Ronson" 
            tag="@teeanronson"/>
            <UserCard 
            userImage="https://media.licdn.com/dms/image/C5103AQFUDEb2cNAa2w/profile-displayphoto-shrink_800_800/0?e=1557964800&amp;v=beta&amp;t=vT3AyR_DCCHg2iIHGtiK6uEsEeegnPqDcpPkUj6i26U&quot)"
            username="Song PengFei" 
            tag="@songpengfei"/>
        </div>
      </div>
      
    )
  }
}

export default Home;
