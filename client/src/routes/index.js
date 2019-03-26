import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { MainColumns } from '../styles/mainStyle'

// Routes
import Home from '../components/Home/home'
import { Profile, Profiles } from './profile/profile'
import BadRequest from './badrequest'
import { SignUp } from './signup/signup';
import { Login } from './login/login';
import { NavBar } from "../components/NavBar/navbar"
import SingleProfile from '../components/SingleProfile/singleprofile';
import MyProfile from '../components/MyProfile/MyProfile';
import Explore from '../components/Explore/explore';
import { ErrorBoundary } from '../components/ErrorHandlers/errorboundary'
import { GitHubAuth } from '../components/AuthPage/authpage'

// <Route exact path={'/profiles'} component={Profiles} /* Profile list route *//>
// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
class AppRouter extends React.Component {
  render() {
    const data = localStorage.getItem("data");
    return (
        <div>
          <Route component={NavBar} /* Always render this component*//>
            <ErrorBoundary>
              <Switch>
                  <Route exact path={'/'} component={Home} /* Home route *//>
                  <Route path={'/profiles/:id(\\d+)'} component={SingleProfile} /* Profile route *//>
                  <Route path={'/signup'} component={SignUp} /* Profile route *//>
                  <Route path={'/login'} component={Login} /* Profile route *//>
                  <Route path={'/githubauth'} component={GitHubAuth} /* GitHubAuth route *//>
                  <Route path={'/MyProfile'} component={MyProfile}/>
                  <Route path={'/Explore'} component={Explore}/>
                  <Route path={'/gitauth'} component={ () => { window.location = 'http://localhost:8080/login/github?token=' + data; return null; } }/>
                  <Route path="*" component={BadRequest} />
              </Switch>
            </ErrorBoundary>
        </div>
    )
  }
}
export default AppRouter;