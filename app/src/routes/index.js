import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routes
import { Profile, Profiles } from './profile/profile'
import NotFound from './notFound'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'profile'} component={Profile} /* Profile route *//>
          <Route exact path={'profiles'} component={Profiles} /* Profile route *//>
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
export default AppRouter;