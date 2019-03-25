import React, {Component}  from 'react';


class Stats extends Component {
  render() {
    const pStyle = {
	  color: '#d74a4a',
	};  
	  
    return (
      <article class="mt2" data-name="slab-stat">
        <dl class="dib mr3">
          <dd class="f2 f5-ns b mid-gray">Connections</dd>
          <dd class="fw1 f5 ml0 b tc" style={pStyle}>4</dd>
        </dl>
        <dl class="dib mr3">
          <dd class="f2 f5-ns b mid-gray">Featured Projects</dd>
          <dd class="fw1 f5 b tc" style={pStyle}>3</dd>
        </dl>
        <dl class="dib mr3">
          <dd class="f2 f5-ns b ml1 mid-gray">Lines of code</dd>
          <dd class="fw1 f5 ml0 b tc" style={pStyle}>92,193</dd>
        </dl> 
      </article>
    );
  }
}

export default Stats;
