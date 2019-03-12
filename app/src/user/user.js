import React from 'react'
import { graphql, Mutation } from 'react-apollo';

import { SignUp } from '../../mutations/mutations'

// const User = ({
//     firstname,
//     lastname,
//     email,
//     password
// }) => (
//     <div>
//         <Mutation mutation={SignUp} variables={{ firstname, lastname, email,  password }}>
//             { user => <div></div>}
//         </Mutation>
//     </div>
// );