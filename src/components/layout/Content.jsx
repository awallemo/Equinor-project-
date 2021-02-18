

import React from "react";

class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="Content">{this.props.children}</div>;
  }
}

export default Content;
 