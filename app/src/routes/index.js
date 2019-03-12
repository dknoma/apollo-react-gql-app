import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routes
import Home from './home'
import { Profile, Profiles } from './profile/profile'
import NotFound from './notFound'
import { SignUp } from './signup/signup';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} /* Home route *//>
          <Route exact path={'/profiles'} component={Profiles} /* Profile list route *//>
          <Route exact path={'/profile'} component={Profile} /* Profile route *//>
          <Route exact path={'/signup'} component={SignUp} /* Profile route *//>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
export default AppRouter;