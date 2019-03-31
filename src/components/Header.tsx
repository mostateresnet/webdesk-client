import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { InputGroup, Button } from "@blueprintjs/core";

import { navItemMap, makeStudentDetailsURL } from "../navitems";

let currentHeaderTitle = "";
let mountedHeader: React.Component | null = null;

interface Props extends RouteComponentProps {}

interface State {
  search: string;
}

class HeaderNoRouter extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    registerMountedHeaderComponent(this);
  }

  componentWillUnmount() {
    unregisterMountedHeaderComponent();
  }

  private onStudenSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ search: e.currentTarget.value });
  };

  private onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.onSearch();
    }
  };

  private onSearch = () => {
    this.props.history.push(makeStudentDetailsURL(this.state.search));
    this.setState({ search: "" });
  };

  render() {
    const currentNavItem = navItemMap[this.props.location.pathname];
    const title = currentNavItem ? currentNavItem.title : currentHeaderTitle;

    const searchButton = <Button icon="arrow-right" minimal={true} onClick={this.onSearch} />;

    return (
      <div className="header">
        <div className="title">{title}</div>
        <InputGroup
          className="searchbox"
          large={true}
          leftIcon="search"
          onChange={this.onStudenSearch}
          onKeyDown={this.onSearchKeyDown}
          placeholder="Student ID"
          value={this.state.search}
          rightElement={searchButton}
        />
      </div>
    );
  }
}

export const Header = withRouter(HeaderNoRouter);

export function setHeaderTitle(title: string) {
  // Note that this function and this whole "set the header title"
  // thing is pretty hacky. For one, it expects that only one Header
  // exists, which should always be the case, but other things could
  // possibly go wrong?
  currentHeaderTitle = title;
  if (mountedHeader && currentHeaderTitle !== title) {
    mountedHeader.forceUpdate();
  }
}

function registerMountedHeaderComponent(header: React.Component) {
  mountedHeader = header;
}

function unregisterMountedHeaderComponent() {
  mountedHeader = null;
}
