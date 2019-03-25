import React, {Component} from 'react';

class CurrentUserInfo extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <article className="center bg-white br3 pa3 mv3 ba b--black-10">
                    <div className="tc">
                        <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                        <h1 className="f3 mb2">CurrentUserName</h1>
                        <h2 className="f5 fw4 gray mt0">CurrentUserTitle</h2>
                        <h2 className="f5 fw4 gray mt0">CurrentUserLocation</h2>
                    </div>
                </article>
            </div>
        )
    }
}

export default CurrentUserInfo;