import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import { NavItem as INavItem } from "../navitems";

interface SideNavProps {
  navItems: INavItem[];
}

export class SideNav extends React.Component<SideNavProps, {}> {
  render() {
    return (
      <div className="side-nav">
        <div className="logo">MSU</div>
        <div className="items">{this.renderItems()}</div>
      </div>
    );
  }

  renderItems() {
    return this.props.navItems.map(item => (
      <NavItem key={item.to} to={item.to} title={item.title} />
    ));
  }
}

interface NavItemProps extends RouteComponentProps {
  to: string;
  title: string;
}

class NavItemNoRouter extends React.Component<NavItemProps & RouteComponentProps, {}> {
  render() {
    const className = this.props.location.pathname.startsWith(this.props.to) ? "selected" : "";
    return (
      <div className="nav-item">
        <Link className={className} to={this.props.to}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}

const NavItem = withRouter(NavItemNoRouter);
