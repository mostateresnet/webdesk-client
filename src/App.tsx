import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./App.scss";
import Dashboard from "./views/Dashboard";
import StudentDetails from "./views/StudentDetails";
import { ToastContainer, Flip } from "react-toastify";
import { client } from "./client";
import { SideNav } from "./components/SideNav";
import { navItems } from "./navitems";
import { Header } from "./components/Header";

function getCurrentUsersStation(): string {
  return "1";
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <ToastContainer
              transition={Flip}
              position="top-center"
              autoClose={5000}
              closeOnClick
              hideProgressBar
              draggable
              pauseOnHover
            />
            <SideNav navItems={navItems} />
            <Header title={"Hello"} />
            <div className="main-content">
              <Route
                path="/"
                exact
                render={() => <Dashboard stationId={getCurrentUsersStation()} />}
              />
              <Route
                path="/students/:id"
                render={({ match }) => <StudentDetails id={match.params.id} />}
              />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
