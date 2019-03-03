import * as React from "react";

interface Props {
  stationId: string;
}

export default class Dashboard extends React.Component<Props, {}> {
  render() {
    const { stationId } = this.props;
    return <div>Dashboard for {stationId}</div>;
  }
}
