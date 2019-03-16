import React from 'react'
import { Mutation } from 'react-apollo';
import { SignUpForAccount } from '../../mutations/mutations'

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
        const { firstname, lastname, email, password, firstnameValid, lastnameValid, emailValid, passwordValid } = this.state;
        const isEnabled = emailValid && firstnameValid && lastnameValid && passwordValid; // Disable submit button if form not valid
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