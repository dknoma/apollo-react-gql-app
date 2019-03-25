import React from 'react'
import { Mutation } from 'react-apollo';
import { LoginUser } from '../../mutations/mutations'

export class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: '',
            email: '',
            password: '',
            errorMessage: '',
        }
    }

    // 4 separate input fields & mutate button
    render() {
        const { email, password } = this.state;
        // var errorMessage = "KEK";
        return (
            <div>
                <center> Welcome to the login page.</center>
                <center><div>
                    <div className="flex flex-column mt3">
                    <input
                        value={email}
                        onChange={e => {
                            this.setState({ email: e.target.value })
                        }}
                        type="text"
                        placeholder="Email."
                    /><br />
                    <input
                        value={password}
                        onChange={e => {
                            this.setState({ password: e.target.value })
                        }}
                        type="password"
                        placeholder="Password"
                    />
                    </div>
                    <Mutation 
                        mutation={LoginUser}
                        variables={{ email,  password }}
                        onError={ error => { 
                            //An error has ocurred during input most likely
                            console.log(error) 
                            this.setState({ errorMessage: "Email or password was incorrect." });
                            // this.props.history.push('/login')
                        }}
                        onCompleted={ data => {
                            var tok = data.login.Jwt;
                            console.log("setting tok: " + tok)
                            localStorage.setItem('data', tok)
                            this.setState({ data: tok });
                            this.setState({ errorMessage: "" });
                            this.props.history.push('/')
                        }}
                    >
                        {
                            data => (
                                    <button onClick={data}>Submit</button>
                            )
                        }
                    </Mutation>
                    <br />
                    {this.state.errorMessage}
                </div></center>
            </div>
        )
        // TODO: redirect to same page, but give error message that fields cant be empty
        // onCompleted will redirect history over to homepage

    }
}

export default Login;