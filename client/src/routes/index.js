import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routes
import Home from './home'
import { Profile, Profiles } from './profile/profile'
import BadRequest from './badrequest'
import { SignUp } from './signup/signup';
import ErrorBoundary from '../components/errorboundary'

// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
class AppRouter extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home} /* Home route *//>
            <Route exact path={'/profiles'} component={Profiles} /* Profile list route *//>
            <Route exact path={'/profiles/:id(\\d+)'} component={Profile} /* Profile route *//>
            <Route exact path={'/signup'} component={SignUp} /* Profile route *//>
            <Route path="*" component={BadRequest} />
          </Switch>
        </Router>
      </ErrorBoundary>
    )
  }
}
export default AppRouter;