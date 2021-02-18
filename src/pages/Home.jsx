import React from "react";
import { HomePage } from "../components/layout/HomePage";

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="Page Home">
          <HomePage pageSelection={(e)=>{this.props.pageSelection(e)}}></HomePage>
        </div>
      );
    }
  }
  
  export default Home;