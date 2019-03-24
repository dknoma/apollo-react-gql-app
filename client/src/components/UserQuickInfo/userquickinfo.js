import React, {Component} from 'react';



class UserQuickInfo extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src="https://i.ytimg.com/vi/2XAeTk2fctc/hqdefault.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                        <h1 className="f3 mb2">Luke Skywalker</h1>
                        <h2 className="f5 fw4 gray mt0">Jedi</h2>
                        <h2 className="f5 fw4 gray mt0">Tattooine</h2>
                    </div>
                </article>
            </div>
        )
    }
}

export default UserQuickInfo;