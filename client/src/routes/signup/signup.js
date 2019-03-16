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
            password: '',
            firstnameValid: false,
            lastnameValid: false,
            emailValid: false,
            passwordValid: false,
        }
      }
      
    // 4 separate input fields & mutate button
    render() {
        const { firstname, lastname, email, password, firstnameValid, lastnameValid, emailValid, passwordValid } = this.state
        const isEnabled = emailValid && firstnameValid && lastnameValid && passwordValid
        // console.log(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        return (
            <div>
                <center> Welcome to the sign up page.</center>
                <center><div>
                    <div className="flex flex-column mt3">
                    <input
                        value={firstname}
                        onChange={e => {
                            this.setState({ firstname: e.target.value })
                            this.setState({ firstnameValid: e.target.value.match(/(?=.*[a-z]|[A-Z])^(?!.*[0-9])^(?!.*[`~!@#$%^&*()_+=[\]\\{}|;':",./<>?])/g)})
                        }}
                        type="text"
                        placeholder="First name."
                    /><br />
                    <input
                        value={lastname}
                        onChange={e => {
                            this.setState({ lastname: e.target.value })
                            this.setState({ lastnameValid: e.target.value.match(/(?=.*[a-z]|[A-Z])^(?!.*[0-9])^(?!.*[`~!@#$%^&*()_+=[\]\\{}|;':",./<>?])/g)})
                        }}
                        type="text"
                        placeholder="Last name."
                    /><br />
                    <input
                        value={email}
                        onChange={e => {
                            this.setState({ email: e.target.value })
                            this.setState({ emailValid: e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)})
                        }}
                        type="text"
                        placeholder="Email."
                    /><br />
                    <input
                        value={password}
                        onChange={e => {
                            this.setState({ password: e.target.value })
                            this.setState({ passwordValid: e.target.value.match(/(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])^(?!.*[&*()[\]{}\\|,.<>;:'"`~])/g)})
                        }}
                        type="text"
                        placeholder="Password"
                    />
                    </div>
                    <Mutation mutation={SignUpForAccount} variables={{ firstname, lastname, email,  password }}>
                        {
                            signup => <button disabled={!isEnabled} onClick={signup}>Submit</button>
                        }
                    </Mutation>
                </div></center>
            </div>
        )
        // TODO: redirect to same page, but give error message that fields cant be empty
    }
}

export default SignUp;