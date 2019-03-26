import * as React from "react";
import { Link } from "react-router-dom";

interface SideNavProps {
  navItems: NavItemProps[];
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
    return this.props.navItems.map(item => <NavItem to={item.to} title={item.title} />);
  }
}

interface NavItemProps {
  to: string;
  title: string;
}

export class NavItem extends React.Component<NavItemProps, {}> {
  render() {
    return (
      <div className="nav-item">
        <Link to={this.props.to}>{this.props.title}</Link>
      </div>
    );
  }
}
