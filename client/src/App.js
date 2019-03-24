import React, { Component } from "react";
import "./App.css";
import { Link } from 'react-router-dom'
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  HeaderRow,
  Textfield
} from "react-mdl";
import Footer from "./components/Footer/footer";
// import ResponsiveDrawer from './components/ResponsiveDrawer/responsivedrawer'
// import { AppBar } from "@material-ui/core";
// import { SearchAppBar } from './components/appbar/appbar';
import AppRouter from "./routes";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="db dt-l w-100 border-box pa3 ph5-l">
              <HeaderRow
                title={
                  <Link style={{ textDecoration: "none", color: "white" }} to="/">
                    Showcase
                  </Link>
                }
              >
                <Link style={{ margin: `10px`, textDecoration: "none", color: "white" }} to="/signup">
                  {" "}
                  Sign Up{" "}
                </Link>
                <Link style={{ margin: `10px`, textDecoration: "none", color: "white" }} to="/">
                  {" "}
                  Log In{" "}
                </Link>
                <Textfield
                  value=""
                  onChange={() => {}}
                  label="Search2"
                  expandable
                  expandableIcon="search"
                />
              </HeaderRow>
          </Header>
          <Drawer title="TeeanRonson">
              <Navigation>
                <Link to="/MyProfile">MyProfile</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <AppRouter />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
