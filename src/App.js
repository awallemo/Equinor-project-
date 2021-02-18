// COMMENT: Use this page only for the selection of the pages

import "./App.css";


import MTDThicknessvsVolume from "./pages/MTDThicknessvsVolume";
import MTDAreavsVolume from "./pages/MTDAreavsVolume";
import Channel_AreavsDepth from "./pages/Channel_AreavsDepth"

import React from "react";
import Home from "./pages/Home";
import ChannelDep from "./pages/ChannelDep";
import FanDep from "./pages/FanDep";
import MTDdescription from "./pages/MTDdesctiption";
import MTDAreavsLength from "./pages/MTDAreavsLength";

import Channel_AreavsWidth from "./pages/Channel_AreavsWidth";

import Fan_LengthvsWidth from "./pages/Fan_LengthvsWidth";
import Fan_WidthvsThickness from "./pages/Fan_WidthvsThickness";
import Fan_AreavsWidth from "./pages/Fan_AreavsWidth";
import Fan_AreavsLength from "./pages/Fan_AreavsLength";
import Channel_WidthvsDepth from "./pages/Channel_WidthvsDepth";

 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  // COMMENT: This is a very simple way how to change "pages". You can use React Router to make it better
  pageSelection(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.currentPage === 1 && (

          <Home
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Home>
        )}
        {this.state.currentPage === 2 && (
          <MTDdescription
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></MTDdescription>
        )}
        {this.state.currentPage === 3 && (
          <ChannelDep
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></ChannelDep>
        )}
        {this.state.currentPage === 4 && (
          <FanDep
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></FanDep>
        )}
        {this.state.currentPage === 6 && (
          <MTDAreavsLength
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></MTDAreavsLength>
        )}
        {this.state.currentPage === 7 && (
          <MTDThicknessvsVolume
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></MTDThicknessvsVolume>
        )}
        {this.state.currentPage === 8 && (
          <MTDAreavsVolume
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></MTDAreavsVolume>
        )}

        {this.state.currentPage === 9 && (
          <Channel_WidthvsDepth 

            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Channel_WidthvsDepth>
        )}

        {this.state.currentPage === 10 && (
          <Channel_AreavsWidth

            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Channel_AreavsWidth>
        )}

        {this.state.currentPage === 11 && (
          <Channel_AreavsDepth
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Channel_AreavsDepth>
        )}

        {this.state.currentPage === 12 && (
          <Fan_LengthvsWidth
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Fan_LengthvsWidth>
        )}
        {this.state.currentPage === 13 && (
          <Fan_WidthvsThickness
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Fan_WidthvsThickness>
        )}
        {this.state.currentPage === 14 && (
          <Fan_AreavsWidth
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Fan_AreavsWidth>
        )}
        {this.state.currentPage === 15 && (
          <Fan_AreavsLength
            pageSelection={(e) => {
              this.pageSelection(e);
            }}
          ></Fan_AreavsLength>
        )}
      </div>
    );
  }
}

export default App;
