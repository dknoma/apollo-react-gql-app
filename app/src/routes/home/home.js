import React from 'react'
import { gql } from 'apollo-boost';
import { graphql, Query } from 'react-apollo';

// const ChannelsList = ({ data: {loading, error, channels}}) => {
//     if(loading) {
//       return <p>Loading...</p>;
//     }
//     if(error) {
//       return <p>{error.message}</p>;
//     }
//     return <ul>
//             {
//               channels.map( ch => <li key={ch.id}>{ch.name}</li>)
//             }
//           </ul>
// };

const ChannelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsList = () => (
  <Query query={ChannelsListQuery}>
    {
      ({loading, error, channels}) => {
        if(loading) {
          return <p>Loading...</p>;
        }
        if(error) {
          return <p>{error.message}</p>;
        }
        return (
          <ul>
            { channels.map(channel => {
              return <li key={channel.id}>
                  {channel.name}
                </li>
              }) 
            }
          </ul>
        );
      }
    }
  </Query>
);


const ChannelsListWithData = graphql(ChannelsListQuery)(ChannelsList);

// example of a graphql mutation
// const mutation = gql`
//   mutation CreateNotTodo($name: String, $description: String) {
//     createNotTodo(name: $name, description: $description) {
//       name
//       description
//     }
//   }
// `
// @compose(
//   graphql(ChannelsListQuery),
// //   graphql(mutation)
// )

// Home component
class Home extends React.Component {
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
        {/* {
          ChannelsList
        } */}
        <ChannelsListWithData />
     </div>
    )
  }
}

export default Home;