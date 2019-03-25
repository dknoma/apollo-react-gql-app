import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { MainColumns } from '../styles/mainStyle'

// Routes
import Home from './home'
import { Profile, Profiles } from './profile/profile'
import BadRequest from './badrequest'
import { SignUp } from './signup/signup';
import { Login } from './login/login';
import { ErrorBoundary } from '../components/ErrorHandlers/errorboundary'
// import { Sidebar } from '../components/sidebar'
import MyProfile from '../components/MyProfile/MyProfile';
import { NavBar } from "../components/NavBar/navbar"

// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
class AppRouter extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Route component={NavBar} /* Always render this component*//>
          <Switch>
            <Route exact path={'/'} component={Home} /* Home route *//>
            <Route exact path={'/profiles'} component={Profiles} /* Profile list route *//>
            <Route exact path={'/profiles/:id(\\d+)'} component={Profile} /* Profile route *//>
            <Route exact path={'/signup'} component={SignUp} /* Profile route *//>
            <Route exact path={'/login'} component={Login} /* Profile route *//>
            <Route exact path="/MyProfile" component={MyProfile}/>
            <Route path="*" component={BadRequest} />
          </Switch>
        </div>
      </ErrorBoundary>
    )
  }
}
export default AppRouter;