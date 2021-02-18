import "./Page.css";

import React from "react";
import {ChannelPage} from "../components/layout/ChannelPage";



class ChannelDep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Page">
        <ChannelPage pageSelection={(e)=>{this.props.pageSelection(e)}}></ChannelPage>
      </div>
    );
  }
}

export default ChannelDep;