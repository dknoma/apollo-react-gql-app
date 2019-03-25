import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colStyle = { maxWidth: "22rem" };

    return (
      <section className="ba mt1 b--black-10 br3 pa2">
        <main className="mw8 center">
          <article className="dt w-100 b--black-05 pb2 mt2" href="#0">
            <div className="dtc w2 w3-ns v-mid">
              <Link to="/SingleProfile">
                <img
                  className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
                  src={this.props.userImage}
                />
              </Link>
            </div>
            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title mv0">{this.props.username}</h1>
              <p className="f6 fw4 mt0 mb0 black-60"> MS Computer Science, USF </p>
            </div>
            <div className="dtc v-mid">
              <form className="w-100 tr">
                <button
                  className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                  type="submit"
                >
                  + Connect
                </button>
              </form>
            </div>
          </article>
        </main>
      </section>
    );
  }
}

export default UserCard;
