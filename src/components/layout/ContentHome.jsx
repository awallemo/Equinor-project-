import { Typography } from '@equinor/eds-core-react'
import React from 'react'
import './ContentHome.css';
import HomeMenu from './HomeMenu';



function ContentHome(props) {
  return (
      <div className="Body">
            <br></br>
            <Typography variant="h1">Deep-water morphometric database </Typography>

            <br></br>

            <Typography variant="body_short">This database front-end shows scaling relationships between deep-water element 
            dimensions and lets the user i) input their own data into the charts for comparison, and ii) predict dimensions 
            of elements with limited input. The morphometric data has been compiled from published literature and in-house 
            studies, mostly based on seismic data, and as of today forms the most comprehensive database of deep-water element dimensions 
            available in Equinor. For an in-depth analysis of the presented and additional data, the user is referred to the publication 
            of Moscardelli & Wood (2016, Morphometry of mass-transport deposits as a predictive tool, Geological Society of America Bulletin, 
            128, 47–80) for mass-transport deposits and to the <Typography onClick={event =>  window.location.href='https://wiki.equinor.com/wiki/index.php/GCP:Quantitative_analogues_and_concepts/SHARP3/Element_type_all'} variant="body_short" link>
            Quantitative Reservoir Prediction webpages in the Subsurface portal on Wiki for channel and fan deposits.</Typography>

            <br></br>
            <br></br>
            <Typography variant="body_short">Contact persons: Lorena Moscardelli <a href="mailto:lmosc@equinor.com"><Typography variant="body_short" link>(lmosc@equinor.com)</Typography></a>, 
            Michal Janocko <a href="mailto:mjan@equinor.com"><Typography variant="body_short" link>(mjan@equinor.com)</Typography></a> </Typography>
            </Typography>
            
            <HomeMenu pageSelection={(e)=>{props.pageSelection(e)}}></HomeMenu>
        </div>
  ) 
}


//Remember to export
export default ContentHome;

