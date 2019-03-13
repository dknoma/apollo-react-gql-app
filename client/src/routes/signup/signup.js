import React from 'react'
import { Mutation } from 'react-apollo';

import { SignUpForAccount } from '../../mutations/mutations'

// state = {
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: ''
// }

// const SignUpUser = ({
//     firstname,
//     lastname,
//     email,
//     password
// } = this.state) => (
//     <center><div>
//         <div className="flex flex-column mt3">
//         <input
//             className="mb2"
//             value={firstname}
//             onChange={e => this.setState({ firstname: e.target.value })}
//             type="text"
//             placeholder="First name."
//         /><br />
//         <input
//             className="mb2"
//             value={lastname}
//             onChange={e => this.setState({ lastname: e.target.value })}
//             type="text"
//             placeholder="Last name."
//         /><br />
//         <input
//             className="mb2"
//             value={email}
//             onChange={e => this.setState({ email: e.target.value })}
//             type="text"
//             placeholder="Email."
//         /><br />
//         <input
//             className="mb2"
//             value={password}
//             onChange={e => this.setState({ password: e.target.value })}
//             type="text"
//             placeholder="Password"
//         />
//         </div>
//         <Mutation mutation={SignUpForAccount} variables={{ firstname, lastname, email,  password }}>
//             { signup => 
//                 <button onClick={signup}>Submit</button>
//             }
//         </Mutation>
//     </div></center>
// );

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
      }
      
      render() {
        const { firstname, lastname, email, password } = this.state
        return (
          <div>
           <center> Welcome to the sign up page.</center>
            {/* 4 separate input fields & mutate button */}
            <center><div>
                <div className="flex flex-column mt3">
                <input
                    className="mb2"
                    value={firstname}
                    onChange={e => this.setState({ firstname: e.target.value })}
                    type="text"
                    placeholder="First name."
                /><br />
                <input
                    className="mb2"
                    value={lastname}
                    onChange={e => this.setState({ lastname: e.target.value })}
                    type="text"
                    placeholder="Last name."
                /><br />
                <input
                    className="mb2"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    type="text"
                    placeholder="Email."
                /><br />
                <input
                    className="mb2"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="text"
                    placeholder="Password"
                />
                </div>
                <Mutation mutation={SignUpForAccount} variables={{ firstname, lastname, email,  password }}>
                    { signup => 
                        <button onClick={signup}>Submit</button>
                    }
                </Mutation>
            </div></center>
         </div>
        )
      }
}

export default SignUp;