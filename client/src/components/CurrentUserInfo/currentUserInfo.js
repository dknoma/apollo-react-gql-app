import React, {Component} from 'react';
import { graphql, Query } from 'react-apollo';
import { GetUser } from '../../queries/queries';

export class CurrentUserInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {

		var myData = localStorage.getItem('data');
        console.log("sotage: " + localStorage);
        console.log("mytok: " + myData)
        console.log("null?: " + myData === null)

        if(myData === null || myData === undefined) {
            return (
                <div>
                    <article className="center bg-white br3 pa3 mv3 ba b--black-10">
                        <div className="tc">
                            <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" 
                                className="br-100 h4 w4 dib ba b--black-05 pa2" 
                                title="Photo of a kitty staring at you"
                                alt="thing"/>
                            <h1 className="f3 mb2">CurrentUserName</h1>
                            <h2 className="f5 fw4 gray mt0">CurrentUserTitle</h2>
                            <h2 className="f5 fw4 gray mt0">CurrentUserLocation</h2>
                        </div>
                    </article>
                </div>
            )
        } else {
            return (
                <div>
                    <Query query={GetUser} variables={{ jwt: myData}}>
                        {
                        ({loading, error, data}) => {
                            if(loading) {
                                return <p>Loading...</p>;
                            }
                            if(data == null || data.getUser == null) {
                                throw new Error('404 Not Found');
                            }
                            if(error) {
                                return {error};
                            }
                            const profile = data.getUser;
                            console.log("aaa - " + profile.email)
                            return (
                                <article className="center bg-white br3 pa3 mv3 ba b--black-10">
                                    <div className="tc">
                                        <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" 
                                            className="br-100 h4 w4 dib ba b--black-05 pa2" 
                                            title="Photo of a kitty staring at you"
                                            alt="thing"/>
                                    <h1 className="f3 mb2">{profile.firstname + " " + profile.lastname}</h1>
                                        <h2 className="f5 fw4 gray mt0">CurrentUserTitle</h2>
                                        <h2 className="f5 fw4 gray mt0">CurrentUserLocation</h2>
                                    </div>
                                </article>
                            );
                        }
                        }
                    </Query>
                </div>
            )
        }
    }
}

export default CurrentUserInfo;