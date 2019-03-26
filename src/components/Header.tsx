import * as React from "react";
import { Route } from "react-router";
import { navItems } from "../navitems";

interface Props {
  title: string;
}

export class Header extends React.Component<Props, {}> {
  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <div className="title">
          {navItems.map(item => (
            <Route key={item.to} exact path={item.to} render={() => item.title} />
          ))}
        </div>
        <div className="searchbox">Search...</div>
      </div>
    );
  }
}
