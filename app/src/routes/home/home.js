import React from 'react'
// // import { gql } from 'apollo-boost';
// import { graphql, Query } from 'react-apollo';

// // import { ChannelsListQuery } from '../../queries/queries'

// // const ChannelsList = ({ data: {loading, error, channels}}) => {
// //     if(loading) {
// //       return <p>Loading...</p>;
// //     }
// //     if(error) {
// //       return <p>{error.message}</p>;
// //     }
// //     return <ul>
// //             {
// //               channels.map( ch => <li key={ch.id}>{ch.name}</li>)
// //             }
// //           </ul>
// // };

// // type Channel = {
// //   id: number,
// //   name: string,
// // }

// // type ChannelList = {
// //   channels: Channel[]
// // }

// // const ChannelsList = () => (
// //   ({ loading, error, channels }) => {
// //     if(loading) {
// //       return <p>Loading...</p>;
// //     }
// //     if(error) {
// //       return <p>{error.message}</p>;
// //     }
// //     return (
// //       <ul>
// //         { channels.map((channel: Channel) => {
// //           return <li key={channel.id}>
// //               {channel.name}
// //             </li>
// //           }) 
// //         }
// //       </ul>
// //     );
// //   }
// // );

// // type ChildProps = ChildDataProps<{}, Response, ChannelList/*, Variables*/>;  // Only need variables if query needs to have variable parameters

// // Note that the first parameter here is an empty Object, which means we're
// // not checking incoming props for type safety in this example. The next
// // example (in the "Options" section) shows how the type safety of incoming
// // props can be ensured.
// // const ChannelsListWithData = graphql<{}, Response, ChildProps>(ChannelsListQuery, {
  
// // });

// // const ChannelsList = (({ data: {loading, channels, error }}) => {
// const ChannelsList = () => (
//   <Query query={ChannelsListQuery}>
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

// const ChannelsListWithData = graphql(ChannelsListQuery)(ChannelsList);

// // example of a graphql mutation
// // const mutation = gql`
// //   mutation CreateNotTodo($name: String, $description: String) {
// //     createNotTodo(name: $name, description: $description) {
// //       name
// //       description
// //     }
// //   }
// // `
// // @compose(
// //   graphql(ChannelsListQuery),
// // //   graphql(mutation)
// // )

// // Home component
// class Home extends React.Component {
//   // constructor(props) {
//   //   super(props)
    
//   //   this.state = {
//   //     name: '',
//   //   }
//   // }
  
//   render() {
//     // console.log(this.props)
//     // const { channels = [] } = this.props.data
//     return (
//       <div>
//         <ChannelsListWithData />
//      </div>
//     )
//   }
// };

// export default Home;