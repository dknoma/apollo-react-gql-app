import React, {Component}  from 'react';


class Stats extends Component {
  render() {
    const pStyle = {
	  color: '#d74a4a',
	};  
	  
    return (
      <article className="mt2" data-name="slab-stat">
        <dl className="dib mr3">
          <dd className="f2 f5-ns b mid-gray">Connections</dd>
          <dd className="fw1 f5 ml0 b tc" style={pStyle}>{this.props.user.connections}</dd>
        </dl>
        <dl className="dib mr3">
          <dd className="f2 f5-ns b mid-gray">Featured Projects</dd>
          <dd className="fw1 f5 b tc" style={pStyle}>{this.props.user.featured}</dd>
        </dl>
        <dl className="dib mr3">
          <dd className="f2 f5-ns b ml1 mid-gray">Public Repositories</dd>
          <dd className="fw1 f5 ml0 b tc" style={pStyle}>{this.props.user.public_repos}</dd>
        </dl>
      </article>
    );
  }
}

export default Stats;
