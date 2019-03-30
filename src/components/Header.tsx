import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { InputGroup } from "@blueprintjs/core";

import { navItemMap } from "../navitems";

interface Props extends RouteComponentProps {
  searchValue: string;

  onStudentSearch: (search: string) => void;
}

class HeaderNoRouter extends React.PureComponent<Props, {}> {
  private onStudenSearch = (e: React.ChangeEvent<HTMLElement>) => {
    this.props.onStudentSearch(e.currentTarget.nodeValue || "");
  };

  render() {
    const currentNavItem = navItemMap[this.props.location.pathname];
    const title = currentNavItem ? currentNavItem.title : "";
    return (
      <div className="header">
        <div className="title">{title}</div>
        <InputGroup
          className="searchbox"
          large={true}
          leftIcon="search"
          onChange={this.onStudenSearch}
          placeholder="Student ID"
          value={this.props.searchValue}
        />
      </div>
    );
  }
}

export const Header = withRouter(HeaderNoRouter);
