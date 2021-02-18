import "./Page.css";

import React from "react";
import { Page } from "../components/layout/NavBar";


class MTDdescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Page MTD">
          <Page pageSelection={(e)=>{this.props.pageSelection(e)}}></Page>
      </div>
    );
  }
}

export default MTDdescription;
