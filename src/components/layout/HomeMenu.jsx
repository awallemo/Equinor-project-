import React from "react";
import { Typography, Card } from '@equinor/eds-core-react'
import './ContentHome.css'
import MTDimage from '../images/MTD_thumbnail_frontpage.png'
import ChannelsImg from '../images/Channels_thumbnail_frontpage.png'
import FansImg from '../images/Fans_thumbnail_frontpage.png'
import MTDspread from "../Master_spreadsheets/MTDs.zip"
import Fanspread from "../Master_spreadsheets/Fans.zip"
import Channelspread from "../Master_spreadsheets/Channels.zip"

const { CardHeader, CardHeaderTitle, CardMedia} = Card

const MTDMedia = () => (
    <CardMedia fullWidth>
      <img src={MTDimage} alt="MTD img for home menu"/>
    </CardMedia>
  )

  const ChannelsMedia = () => (
    <CardMedia fullWidth>
      <img src={ChannelsImg} alt="Channels img for home menu"/>
    </CardMedia>
  )

  const FansMedia = () => (
    <CardMedia fullWidth>
      <img src={FansImg} alt="Fans img for home menu"/>
    </CardMedia>
  )

class HomeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div tabIndex="0" className="Wrapper BodyGrid Grid">
        <Card>
            <MTDMedia/>
            <CardHeader>
            <CardHeaderTitle>
                <Typography variant="h5">Mass-transport deposits</Typography>
            </CardHeaderTitle>
            </CardHeader>
            <Typography onClick={(e)=>{this.props.pageSelection(6);}} variant="body_short" link>
                Area vs. Length​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(7);}} variant="body_short" link>
                Thickness vs. Volume​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(8);}} variant="body_short" link>
                Area vs. Volume​ </Typography>
            <br></br>
            <Typography onClick={(e)=>{this.props.pageSelection(2);}} variant="body_short" link>
                Terminology and methods​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(1);}} variant="body_short" link>
                <a href={MTDspread} download="MTDs">Master spreadsheet download</a>
            </Typography>
        </Card>
        <Card>
            <ChannelsMedia/>
            <CardHeader>
                <CardHeaderTitle>
                    <Typography variant="h5">Channel deposits​</Typography>
                </CardHeaderTitle>
            </CardHeader>
            <Typography onClick={(e)=>{this.props.pageSelection(9);}} variant="body_short" link>
                Width vs. Depth </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(10);}} variant="body_short" link>
                Area vs. Width​  </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(11);}} variant="body_short" link>
                Area vs. Depth  </Typography>    
            <br></br>
            <Typography onClick={(e)=>{this.props.pageSelection(3);}} variant="body_short" link>
                Terminology and methods​  </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(1);}} variant="body_short" link>
            <a href={Channelspread} download="Channels">Master spreadsheet download</a>
            </Typography>
        </Card>
        <Card>
            <FansMedia/>
            <CardHeader>
                <CardHeaderTitle>
                    <Typography variant="h5">Fan deposits​</Typography>
                </CardHeaderTitle>
            </CardHeader>
            <Typography onClick={(e)=>{this.props.pageSelection(12);}} variant="body_short" link>
                Length vs. Width​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(13);}} variant="body_short" link>
                Width vs. Thickness​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(14);}} variant="body_short" link>
                Area vs. Width​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(15);}} variant="body_short" link>
                Area vs. Length </Typography>
            <br></br>
            <Typography onClick={(e)=>{this.props.pageSelection(4);}} variant="body_short" link>
                Terminology and methods​ </Typography>
            <Typography onClick={(e)=>{this.props.pageSelection(1);}} variant="body_short" link>
            <a href={Fanspread} download="Fans">Master spreadsheet download</a>
            </Typography>
        </Card>
        </div>
    )
  }
}

export default HomeMenu;
