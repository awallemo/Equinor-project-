import React from "react";
import {FanPage} from "../components/layout/FanPage";



class FanDep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Page">
        <FanPage pageSelection={(e)=>{this.props.pageSelection(e)}}></FanPage>
      </div>
    );
  }
}

export default FanDep;