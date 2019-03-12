import React from 'react'
// import { gql } from 'apollo-boost';
import { graphql, Query } from 'react-apollo';

import { GetProfileQuery, GetProfileListQuery } from '../../queries/queries'

// const ChannelsList = (({ data: {loading, channels, error }}) => {
// const ProfileList = () => (
//   <Query query={GetProfileQuery}>
//     {
//       ({loading, error, channels}) => {
//         if(loading) {
//           return <p>Loading...</p>;
//         }
//         if(error) {
//           return <p>{error.message}</p>;
//         }
//         return (
//           <ul>
//             { channels.map(channel => {
//               return <li key={channel.id}>
//                   {channel.name}
//                 </li>
//               }) 
//             }
//           </ul>
//         );
//       }
//     }
//   </Query>
// );

const UserProfile = () => (
  <Query query={GetProfileQuery} /*variables={ id }*/>
    {/* {
      ({loading, error, profile}) => {
        if(loading) {
          return <p>Loading...</p>;
        }
        if(error) {
          return <p>{error.message}</p>;
        }
        return (
          <ul>{ 
            profile => {
              return (
                <li>
                    {profile.firstname}
                </li>,
                <li>
                    {profile.lastname}
                </li>,
                <li>
                    {profile.email}
                </li>
                )
            } 
          }</ul>
        );
      }
    } */}
  </Query>
);

/* grants access to a Query component, which takes a query as prop and executes it when its rendered */
const UserProfileList = () => (
  <Query query={GetProfileListQuery}>   
    {
      ({loading, error, profiles}) => {
        if(loading) {
          return <p>Loading...</p>;
        }
        if(error) {
          return <p>{error.message}</p>;
        }
        return (
          <ul>{ 
            profiles.map(profile => {
              return <ul><li key={profile.id}>
                {profile.firstname}
              </li>,
              <li key={profile.id}>
                {profile.lastname}
              </li>,
              <li key={profile.id}>
                {profile.email}
              </li></ul>
            })
          }</ul>
        );
      }
    }
  </Query>
);

const ProfileWithData = graphql(GetProfileQuery)(UserProfile);
const ProfileListWithData = graphql(GetProfileListQuery)(UserProfileList);

// Home component
export class Profiles extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
    }
  }
  
  render() {
    // console.log(this.props)
    // const { channels = [] } = this.props.data
    return (
      <div>
        <ProfileListWithData />
        {/* <ProfileWithData /> */}
     </div>
    )
  }
};

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
    }
  }
  
  render() {
    // console.log(this.props)
    // const { channels = [] } = this.props.data
    return (
      <div>
        {<ProfileWithData />}
     </div>
    )
  }
};

export default Profiles;