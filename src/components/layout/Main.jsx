import "./Main.css";

import React from "react";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="Main">{this.props.children}</div>;
  }
}

export default Main;
