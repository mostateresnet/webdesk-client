import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./App.scss";
import StudentDetails from "./views/StudentDetails";
import EquipmentDetails from "./views/EquipmentDetails";
import { ToastContainer, Flip } from "react-toastify";
import { client } from "./client";
import { SideNav } from "./components/SideNav";
import { navItems, DEFAULT_VIEW } from "./navitems";
import { Header } from "./components/Header";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <ToastContainer
              transition={Flip}
              position="top-center"
              autoClose={5000}
              closeOnClick
              hideProgressBar
              draggable
              pauseOnHover
            />
            <div className="app">
              <SideNav navItems={navItems} />
              <Header />
              <div className="main-content">
                <Route exact path="/" render={() => <Redirect to={DEFAULT_VIEW} />} />
                <Route
                  path="/students/:id"
                  render={({ match }) => <StudentDetails id={match.params.id} />}
                />
                <Route
                  path="/equipment/:id"
                  render={({ match }) => <EquipmentDetails id={match.params.id} />}
                />
              </div>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
