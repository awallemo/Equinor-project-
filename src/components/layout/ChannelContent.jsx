import React from 'react'
import './MTDContent.css'
import { Typography } from '@equinor/eds-core-react'
import ChannelsStudyArea from '../images/Study_areas_Channel_and_Fans.jpg'
import Dimensions from '../images/Conduit_dimensions.png'
import { Container, Row, Col } from 'react-bootstrap'


export const ChannelContent = (props) => {

    return (
    <div className="Body">
        <Typography variant="h1">Deep-water Channel Deposits</Typography>
        <Typography variant="body_short">
            <br></br>
            <Typography onClick={(e)=>{props.pageSelection(8);}} variant="body_short" link>
                Width vs. Thickness </Typography><br></br>
            <Typography onClick={(e)=>{props.pageSelection(9);}} variant="body_short" link>
                Area vs. Width and Thickness​  </Typography>
            <br></br><br></br>

            <b>Deep-water channel deposits</b> can occur in a variety of settings and come in different shapes 
            and sizes. Typically, we divide channel deposits (or fills) into types based on the character 
            of the conduit in which the deposits were deposited. Conduit types can be classified into 
            three main categories: 1) canyons, 2) valleys, and 3) channels. In addition, repeated channelization 
            can result in stacking of these elements, producing complexes (e.g., channel complex, valley-complex). 
            The conduit types and their fills can be distinguished from each other based on a combination 
            of pattern, shape and size (read more <Typography onClick={event =>  window.location.href='https://wiki.equinor.com/wiki/index.php/GCP:Quantitative_analogues_and_concepts/SHARP3/Channelsystems'} variant="body_short" link>
            here</Typography>). 
            Although the size of the different conduit types overlaps, their width and thickness (or depth), 
            as well as cross-sectional area, are all mutually related, which allows for easy prediction of 
            their size. 
            <br></br>
            <br></br>
            <Typography variant="h2">Database description</Typography>
            <br></br>
            <Typography variant="body_short"><ul>
                <li> 1161 cross-sections have been quantified in terms of conduit(-fill)/complex width and depth (thickness) 
                and 241 cross-section for cross-sectional area. The data comes from a wide range of geological settings, 
                latitudes and covers a large spectrum of scales (see <a href="#Study_area_link"><Typography variant="body_short" link>Study Areas</Typography></a>).</li>
                <li>Data type varies between 3D seismic (most common), bathymetry grids and sonar images combined with shallow 
                seismic profiles. The data results show no data type bias. </li>
                <li>Data from Statoil-sponsored consortia (GAIA, D-MAKS, QCL) and publications (Clark and Pickering, 1992) 
                have also been gathered and displayed together with the data from the present study but due to uncertainty 
                associated with this data it has not been used to draw conclusions about the observed trends. It is worth 
                mentioning that the amount of data collected in the present study is higher than that of all consortium 
                databases combined. </li>
            </ul> </Typography>

            <Typography variant="h2"><a id="Study_area_link"> Study areas (Channel and fan systems)</a> </Typography>

            <Typography variant="body_short">See master spreadsheet for detailed locations and references. 
            <br></br>
            <br></br>
            <img src={ChannelsStudyArea} alt="Img for representation" className="ImageStudy"/>
            <br></br>
            <br></br>

            <Container>
                <Row>
                    <Col>
                    <Typography variant="body_short"> 
                    <b>Measured dimensions </b>
                    Width and depth (thickness) have been measured for all included conduits(-fills) and complexes (n=1161). 
                    Cross-sectional area has been calculated for 241 elements. However, cross-sectional area has also been estimated 
                    by the multiplication of width and depth (thickness). Width, depth and cross-sectional area are defined as follows: 
                    <br></br>
                    <br></br>
                    <ul>
                        <li>Conduit(-fill)/complex width: considered to be the maximum local distance between the conduit(-fill)/complex 
                        shoulders (banks) </li>
                        <li>Conduit(-fill)/complex depth (thickness): measured as the vertical relief from the conduit(-fill)/complex base 
                        to the top in axial zone. The top is considered as a straight-line tangent to the conduit(-fill)/complex shoulders </li>
                        <li>Conduit(-fill)/complex cross-sectional area: the area bounded by the conduit(-fill)/complex boundaries and a 
                        straight-line tangent to the conduit(-fill)/complex shoulders in a cross-section </li>
                    </ul>
                    </Typography>
                    </Col>
                    <Col>
                        <img src={Dimensions} alt="Img for representation" className="ImageStudy"/>
                    </Col>
                </Row>
        </Container>
            
    </Typography>
</Typography>
    </div>
    )
}