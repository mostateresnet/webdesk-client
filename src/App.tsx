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

interface Props {}
interface State {
  studentSearch: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      studentSearch: "",
    };
  }

  private onStudentSearch = (s: string) => {
    this.setState({ studentSearch: s });
  };

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
              <Header
                searchValue={this.state.studentSearch}
                onStudentSearch={this.onStudentSearch}
              />
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
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
