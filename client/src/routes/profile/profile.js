import React from 'react'
import { graphql, Query } from 'react-apollo';
import { isNumberValue } from 'apollo-utilities';
import { GetProfileQuery, GetProfileListQuery } from '../../queries/queries'
import ErrorBoundary from '../../components/ErrorHandlers/errorboundary'

const UserProfile = ({id}) => (
  <Query query={GetProfileQuery} variables={{ id: id}}>
    {
      ({loading, error, data}) => {
        if(loading) {
          return <p>Loading...</p>;
        }
        if(data == null || data.getProfile == null) {
          throw new Error('404 Not Found');
        }
        if(error) {
          return {error};
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
    // When rendering components, can use graphql(<query.js query name>)(<function name>) to create the component that
    //    gets data from graphql
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
      error: null
    }
  }
  
  // When rendering a JSX component(that comes from a funciton), can use <paramname>={<parameter>} inside the
  // JSX tag to pass a parameter to that function. This allows the function to get query URL params and pass
  // them to graphql to parse.
  render() {
    const id = this.props.match.params.id;
    var profileId;
    try {
      console.log(id)
      if(!isNumberValue(id)) {
        profileId = parseInt(id);
        console.log(profileId)
      } else {
        throw new Error('400 Bad Request');
      }
    } catch (error) {
      console.log(error)
      this.setState({ error });
      throw new Error('400 Bad Request');
    }
    return (
      <div>
        <ErrorBoundary>
          <ProfileWithData id={profileId}/>
        </ErrorBoundary>
     </div>
    )
  }
};

export default Profiles;