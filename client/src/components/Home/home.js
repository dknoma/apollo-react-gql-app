import React, { Component } from 'react';
import UserCard from '../UserCard/usercard'
import CurrentUserInfo from '../CurrentUserInfo/currentUserInfo';

class Home extends Component {
  constructor(props) {
      super(props)
      
      this.state = {
      }
  }
  // get images and names from query
  // this.props.userImage
  // this.props.username
  render() {
    return (
    <div className="w-80 center">		
	  <div className="flex">
        <div className="w-20 w-30-m">
          <CurrentUserInfo/>
        </div>
        <div className="w-80 w-70-m pa3 mr2">
          <UserCard
            userId="0"
            userImage="https://media.licdn.com/dms/image/C5603AQEzDobK9kQ_ow/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=ADTJOYvDlT5mTl3Ncz97-bwDAVJE4FXwykRh0RDOt60"
            username="Teean Ronson" 
            tag="@teeanronson"
          />
	        <UserCard 
            userId="1"
            userImage="https://media.licdn.com/dms/image/C5103AQFUDEb2cNAa2w/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=vT3AyR_DCCHg2iIHGtiK6uEsEeegnPqDcpPkUj6i26U&quot)"
            username="Song PengFei" 
            tag="@songpengfei"
          />
          <UserCard 
            userId="2"
            userImage="https://avatars2.githubusercontent.com/u/26971233?v=4"
            username="Drew Noma" 
            tag="@dknoma"
          />
        </div>
      </div>
    </div>  
    )
  }
}

export default Home;
