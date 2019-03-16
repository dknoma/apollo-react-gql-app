import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Routes
import Home from './home'
import { Profile, Profiles } from './profile/profile'
import NotFound from './notFound'
import { SignUp } from './signup/signup';
import * as Yup from 'yup';
import Location from "react-app-location";

const HomeLocation = new Location('/');
const ProfileListLocation = new Location('/profiles');
const ProfileLocation = new Location('/profiles/:id', { id: Yup.number().integer().positive().required() });
const SignUpListLocation = new Location('/signup');

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={HomeLocation.path} component={Home} /* Home route *//>
          <Route exact path={ProfileListLocation.path} component={Profiles} /* Profile list route *//>
          <Route exact path={ProfileLocation.path} component={Profile} /* Profile route *//>
          <Route exact path={SignUpListLocation.path} component={SignUp} /* Profile route *//>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
// {/* <Route path={`${match.path}/profile/:id`} component={Profile} /* Profile route *//> */}
// {/* <Route exact path={match.path} render={() => "Profile"} /* Profile route *//> */}
export default AppRouter;