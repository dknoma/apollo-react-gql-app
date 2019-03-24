import React from 'react'
import { Redirect } from 'react-router-dom'

// Home component
class Home extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      redirect: false
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