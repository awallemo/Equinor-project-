import { Typography } from '@equinor/eds-core-react'
import React from 'react'
import './MTDContent.css'
import ImgCalc from '../images/ImgCalculations.png'
import StudyAreaMTD from '../images/StudyAreaMTD.png'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export const MTDContent = (props) =>{
    return (
    <div className="Body">
          <Typography className="Header" variant="h1">Mass-transport deposits(MTDs) </Typography>

          <Typography variant="body_short">
          <br></br>

        <Typography onClick={(e)=>{props.pageSelection(5);}} variant="body_short" link>
            Area vs. Length​ </Typography> <br></br>
        <Typography onClick={(e)=>{props.pageSelection(6);}} variant="body_short" link>
            Thickness vs. Volume​ </Typography><br></br>
        <Typography onClick={(e)=>{props.pageSelection(7);}} variant="body_short" link>
            Area vs. Volume​ </Typography><br></br>
        <br></br>

        <b>Mass-transport deposits (MTDs)</b> can also be defined as subaqueous landslides. In the context 
          of oil and gas exploration, these units can play an important role in three main areas:  
        <ul>
            <li>As seals and/or baffles within reservoir units influencing the movement and trapping of hydrocarbons. </li>
            <li>The surface topography of MTDs can also influence the distribution of reservoir units linked to other gravity-driven deposits such as turbidites</li>
            <li>From a geohazards perspective MTDs can pose risks for seafloor infrastructure, as well as to complicate drilling operations</li>
        </ul>
  ​     <br></br>
        
        <b>Attached and detached mass-transport deposits </b>

        Moscardelli and Wood (2008) classified MTDs in two categories: 1) attached MTDs, which sit in a position relatively proximal to 
        the shelf and upper-slope depositional systems and are sourced from those areas; and 2) detached MTDs, which sit in a position distal from any shelf 
        break and are sourced from a variety of distal topographies. They further postulated that attached MTDs could be “shelf attached” and thus fed as multiple, 
        semi-continuous events coming from a constantly replenished shelf-edge sediment source (i.e., delta, shoreface, storm-induced shelf flows), or that the MTDs 
        could be “slope attached” and fed by submarine failures of the slope. Alternative to being fed downslope by over-supplied shelf feeders, slope-attached MTDs 
        were believed to be triggered by regional events (e.g., earthquakes, meteorite impacts, etc.) that have the capacity to destabilize large areas of the outer 
        shelf and/or upper slope, this causing the collapse of huge volumes of sediments that are transported downslope. In contrast to these processes, detached MTDs 
        were described as detached from active shelf or slope sedimentation systems and are associated with localized triggering mechanisms that oftentimes are linked 
        to gravitational instabilities affecting the flanks of mud volcano ridges, mini-basins, and deep-water levees. The bimodal distributions of MTD dimensions are 
        clearly visible in the presented charts and this suggests that the attached versus detached classification of MTDs as proposed by Moscardelli and Wood (2008) 
        can be applied as a valid approach to try to narrow potential causal mechanisms associated with MTD genesis. 
        </Typography>

        <br></br>

        <Typography className="Header" variant="h1">Study areas:​</Typography>
        <Typography variant="body_short">World map showing the location of mass-transport deposit (MTD) in different localities</Typography>
 ​       <img src={StudyAreaMTD} alt="Img for representation" className="photo"/>

        <br></br>
        <br></br>

            <Container>
                <Row>
                    <Col>
                    <Typography variant="body_short"><b>Terminology and measurement methods:</b> <br></br>
                        Most of the MTDs were characterized based on bathymetric, towed ocean bottom instrument (TOBI), side-scan sonar, seismic data and field 
                        data(outcrops). Measurements that met the following criteria were included 1) morphometric measurements encompassed the entire area affected 
                        by the MTD (including source areas and depolocations), and 2) the deposits were confidently identified as the product of mass-wasting processes 
                        (slides, slumps, and debris flows). The dimensional parameters are illustrated in the fire below. ​ <br></br>
                        <br></br>
                        <b>MTD length:</b> <br></br>
                        Distance measured from headscarp to downslope limit of deposit This might exclude the evacuation area and is also different from the run-out distance.​ <br></br>
                        <br></br>
                        <b>MTD width:</b> <br></br>
                        Maximum mappable width measured orthogonal to the deposit length. <br></br>
                        <br></br>
                        <b>MTD volume:</b> <br></br>
                        Methods applied to calculate the volume area: 1) estimation of the missing volume from a scar, 2) measured scar dimensions (volume = 1/2 × area × height) 
                        and 3) based on the measurements of the landslide deposit itself. In such a scenario, volume is determined as a function of landslide thickness and area 
                        (in case of lower measured value volume = area × 2/3).​ <br></br>
                        <br></br>
                        <b>MTD Area:</b> <br></br>
                        The basic approach used for the calculation of areas and thicknesses of MTDs is maps and cross-sections if it is not reported directly in literature.​ <br></br>
                        <br></br></Typography>
                        <br></br>

                        <Typography variant="body_short" link> Link to master spreadsheet</Typography>
                    </Col>
                    <Col>
                        <img src={ImgCalc} alt="Img for calculations ov data" />  
                    </Col>
                </Row>
            </Container> 

            <br></br>     
    </div>
    )
}

 



