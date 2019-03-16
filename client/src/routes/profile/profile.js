import React from 'react'
// import { gql } from 'apollo-boost';
import { graphql, Query } from 'react-apollo';
import { GetProfileQuery, GetProfileListQuery } from '../../queries/queries'

const UserProfile = ({id}) => (
  <Query query={GetProfileQuery} variables={{ id: id}}>
    {
      ({loading, error, data}) => {
        if(loading) {
          return <p>Loading...</p>;
        }
        if(error) {
          return <p>{error.message}</p>;
        }
        const profile = data.getProfile;
        return (
          <ul>
            <li>
                {profile.firstname}
            </li>
            <li>
                {profile.lastname}
            </li>
            <li>
                {profile.email}
            </li>
          </ul>
        );
      }
    }
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

// Profile List component
export class Profiles extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
    }
  }
  
  render() {
    // console.log("PL log: " + this.props)
    return (
      <div>
        <ProfileListWithData />
     </div>
    )
  }
};

// Regular profile component
export class Profile extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
    }
  }
  
  render() {
    const id = this.props.match.params.id;
    // console.log(this.props.match.params);
    // console.log(id);
    const profileId = parseInt(id);
    return (
      <div>
        {<ProfileWithData id={profileId}/>}
     </div>
    )
  }
};

export default Profiles;