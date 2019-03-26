import React, {Component} from 'react';
import { Query } from 'react-apollo';
import { GetGitHubUser } from '../../queries/queries';

export class CurrentUserInfo extends Component {
    render() {
        // Tokens stored for dev
        // localStorage.clear()
		// var myData = localStorage.getItem('data');
        // console.log("mytok: " + myData)
        // console.log("null?: " + myData === null)

        // if(myData === null || myData === undefined) {
            return (
                <div>
                    <article className="center bg-white br3 pa3 mv3 ba b--black-10">
                        <div className="tc">
                            <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" 
                                className="br-100 h4 w4 dib ba b--black-05 pa2" 
                                title="Photo of a kitty staring at you"
                                alt="thing"/>
                            <h1 className="f3 mb2">Your Name</h1>
                            <h2 className="f5 fw4 gray mt0">Don't have an account?</h2>
                            <h2 className="f5 fw4 gray mt0">Signup for one!</h2>
                        </div>
                    </article>
                </div>
            )
        // } else {
            // return (
            //     <div>
            //         <Query query={GetGitHubUser} variables={{ jwt: myData }}>
            //             {
            //                 ({loading, error, data}) => {
            //                     if(loading) {
            //                         return <p>Loading...</p>;
            //                     }
            //                     // if(data === null) {
            //                     //     localStorage.clear();
            //                     //     // this.props.history.push('/')
            //                     //     throw new Error('404 Not Found');
            //                     // }
            //                     if(error) {
            //                         localStorage.clear();
            //                         // this.props.history.push('/')
            //                         throw error;
            //                         // return {error};
            //                     }
            //                     const profile = data.getGitHubUser;
            //                     console.log("aaa - " + profile.email)
            //                     return (
            //                         <article className="center bg-white br3 pa3 mv3 ba b--black-10">
            //                             <div className="tc">
            //                                 <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" 
            //                                     className="br-100 h4 w4 dib ba b--black-05 pa2" 
            //                                     title="Photo of a kitty staring at you"
            //                                     alt="thing"/>
            //                             <h1 className="f3 mb2">{profile.username}</h1>
            //                                 <h2 className="f5 fw4 gray mt0">{profile.company}</h2>
            //                                 <h2 className="f5 fw4 gray mt0">{profile.location}</h2>
            //                             </div>
            //                         </article>
            //                     );
            //                 }
            //             }
            //         </Query>
            //     </div>
            // )
        // }
    }
}

export default CurrentUserInfo;