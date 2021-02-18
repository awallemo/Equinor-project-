import './NavMenu.css'

import React from 'react'

import {
  Icon,
  Typography,
  List,
} from '@equinor/eds-core-react'

import {
  account_circle,
  accessible,
  notifications,
  fullscreen,
  grid_on,
} from '@equinor/eds-icons'

const icons = {
  account_circle,
  accessible,
  notifications,
  fullscreen,
  grid_on,
}

Icon.add(icons)


class SideMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className="Wrapper">
            <Typography onClick={(e)=>{this.props.pageSelection(1);}} className="btn Child" variant="h3">Home</Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(2);}} className="btn Child" variant="h3">
              Mass-transport deposits</Typography>
              <ul>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(6);}}>Area VS Length</li></Typography>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(7);}}>Thickness VS Volume</li></Typography>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(8);}}>Area VS Volume</li></Typography>
              </ul>
            <Typography onClick={(e)=>{this.props.pageSelection(3);}} className="btn Child" variant="h3">Channel deposits​</Typography>
            <ul>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(9);}}>Width VS Depth</li></Typography>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(10);}}>Area VS Width</li></Typography><br></br>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(11);}}>Area VS Depth</li></Typography>
              </ul>
            <Typography onClick={(e)=>{this.props.pageSelection(4);}} className="btn Child" variant="h3">Fan deposits</Typography>
            <ul>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(12);}}>Length VS Width</li></Typography>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(13);}}>Width VS Thickness</li></Typography>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(14);}}>Area VS Width</li></Typography><br></br>
              <Typography variant="body_short" className="btn Child"><li onClick={(e)=>{this.props.pageSelection(15);}}>Area VS Length</li></Typography>
            </ul>
        </div>
      );
    }
  }
  
  export default SideMenu;