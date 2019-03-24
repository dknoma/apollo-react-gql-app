import React from 'react'
import { Mutation } from 'react-apollo';
import { SignUpForAccount } from '../../mutations/mutations'
import { Redirect } from 'react-router-dom'

export class SignUp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            firstnameValid: false,
            lastnameValid: false,
            emailValid: false,
            passwordValid: false,
            validAccount: false,
            nameReg: /(?=.*[a-z]|[A-Z])^(?!.*[0-9])^(?!.*[`~!@#$%^&*()_+=[\]\\{}|;':",./<>?])/g,
            emailReg: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
            passReg: /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])^(?!.*[&*()[\]{}\\|,.<>;:'"`~])/g,
        }
    }

    // onSubmit = ({ firstname, lastname, email, password}) => {
    //     this.props.signup({firstname, lastname, email, password}, ()  => {
    //       this.props.router.push("/");
    //     });
    // };

    // handleSubmit = () => {
    //     const { password, confirmPassword } = this.state;
    //     // perform all neccassary validations
    //     if (password !== confirmPassword) {
    //         alert("Passwords don't match");
    //     } else {
    //         // make API call
    //     }
    // }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     const { password } = this.state;
    //     // var pass = event.target.value;
    //     var reg = /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^])^(?!.*[&*()[\]{}\\|,.<>;:'"`~])/g;
    //     var testPass = reg.test(password);
    //     if (testPass) {
    //         alert('pass');
    //         // this.setState({value: pass});
    //     } else{ 
    //         alert('fail');
    //     }        
    // }


    confirm = async data => {

        if(this.state.nameReg.test(this.state.firstname) && this.state.nameReg.test(this.state.lastname)
            && this.state.emailReg.test(this.state.email) && this.state.confirmPassword === this.state.password) {
            // const { token } = this.state.login ? data.login : data.signup
            // this._saveUserData(token)
            // this.state.validAccount = true;
            // this.props.history.push(`/`)
            return true;
        } else {
            // this.state.validAccount = false;
            console.log("Username or password was invalid. These are the only special characters allowed in a password: !@#$%^-=+_");
            return false;
        }
    }

    // 4 separate input fields & mutate button
    render() {
        const { firstname, lastname, email, password, confirmPassword, firstnameValid, lastnameValid, emailValid, passwordValid } = this.state;
        const isEnabled = emailValid && firstnameValid && lastnameValid && passwordValid && this.state.password === this.state.confirmPassword; // Disable submit button if form not valid
        // const isEnabled = true;
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
                            // console.log(password === confirmPassword)
                            this.setState({ passwordValid:  e.target.value.match(this.state.passReg)})
                        }}
                        type="text"
                        placeholder="Password"
                    /><br />
                    <input
                        value={confirmPassword}
                        onChange={e => {
                            this.setState({ confirmPassword: e.target.value })
                            // console.log("pc: pass - "+password)
                            // console.log("pc: confirm - "+confirmPassword)
                            // console.log(password === confirmPassword)
                            // this.setState({ passwordValid:  this.state.passReg.test(e.target.value)})
                        }}
                        type="text"
                        placeholder="Confirm password"
                    />
                    </div>
                    <Mutation 
                        mutation={SignUpForAccount}
                        variables={{ firstname, lastname, email,  password }}
                        onCompleted={data => this.confirm(data)}
                        >
                        {
                            signup => 
                                // <form  onSubmit={
                                //     // signup
                                //     (data) => {
                                //         console.log(signup)
                                //         if(this.confirm(data)) {
                                //             this.props.history.push(`/`)
                                //             signup.
                                //         }
                                //     }
                                // }>
                                <button disabled={!isEnabled} onClick={signup}>Submit</button>
                                // </form>
                        }
                    </Mutation>
                </div></center>
            </div>
        )
        // TODO: redirect to same page, but give error message that fields cant be empty
        // onCompleted will redirect history over to homepage

    }
}

export default SignUp;