import React from 'react'
import { Redirect } from 'react-router-dom'
import { graphql, Query } from 'react-apollo';
import { isNumberValue } from 'apollo-utilities';
import { GetUser } from '../../queries/queries'
import ErrorBoundary from '../../components/ErrorHandlers/errorboundary'

// Home component
class Home extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      redirect: false,
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/signup' />
    }
  }
  
  render() {
    var tok = localStorage.getItem('u');
    console.log("tokeywokey: " + tok)
    return (
      <div>
        <center>
          Welcome Home, Anon!
        </center>
     </div>
    )
  }
};

export default Home;