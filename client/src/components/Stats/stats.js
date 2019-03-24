import React, {Component}  from 'react';

class Stats extends Component {
  render() {
    return (
      <article class="pa3 pa3-ns ml0" data-name="slab-stat">
        <dl class="dib mr3">
          <dd class="f2 f5-ns b ml1">Closed Issues</dd>
          <dd class="f3 f2-ns b ml0">1,024</dd>
        </dl>
        <dl class="dib mr3">
          <dd class="f6 f5-ns b ml0">Open Issues</dd>
          <dd class="f3 f2-ns b ml0">993</dd>
        </dl>
        <dl class="dib mr3">
          <dd class="f6 f5-ns b ml0">Next Release</dd>
          <dd class="f3 f2-ns b ml0">10-22</dd>
        </dl>
        <dl class="dib mr3">
          <dd class="f6 f5-ns b ml0">Days Left</dd>
          <dd class="f3 f2-ns b ml0">4</dd>
        </dl>
      </article>
    );
  }
}

export default Stats;
