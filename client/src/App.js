import React, { Component } from "react";
import "./App.css";
import { Link } from 'react-router-dom'
import {
  Layout,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";
import Footer from "./components/Footer/footer";
import AppRouter from "./routes";
import { ErrorBoundary } from './components/ErrorHandlers/errorboundary'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="demo-big-content">
          <Layout>
          <Drawer>
              <Navigation>
                <Link to="/">
                  <i className="fas fa-home mr4"></i>
                  Home
                </Link>
              </Navigation>
              <Navigation>
                <Link to="/Explore">
                  <i className="fas fa-star mr4"></i>
                  Explore
                </Link>
              </Navigation>
              <Navigation>
                <Link to="/Explore">
                  <i className="fas fa-fire mr4"></i>
                  Trending
                </Link>
              </Navigation>
              <Navigation>
                <Link to="/Explore">
                  <i className="far fa-paper-plane mr4"></i>
                  Connections
                </Link>
              </Navigation>
              <Navigation>
                <Link to="/Explore">
                  <i className="fas fa-users mr4"></i>
                  Groups
                </Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <AppRouter />
            </Content>
            <Footer />
          </Layout>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
