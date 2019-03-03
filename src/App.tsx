import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import Dashboard from "./views/Dashboard";
import StudentDetails from "./views/StudentDetails";
import { ToastContainer, Flip } from "react-toastify";
import { client } from "./client";

function getCurrentUsersStation(): string {
  return "1";
}

class App extends Component {
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
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
