import React from 'react'
import './MTDContent.css'
import { Typography } from '@equinor/eds-core-react'
import ChannelsStudyArea from '../images/Study_areas_Channel_and_Fans.jpg'
import Dimensions from '../images/320px-Fan_dimensions.png'
import { Container, Row, Col } from 'react-bootstrap'




export const FanContent = (props) => {
    return (
    <div className="Body">
        <Typography variant="h1">Fan deposits</Typography>
        <br></br>
        <Typography variant="body_short">
            <Typography onClick={(e)=>{props.pageSelection(11);}} variant="body_short" link>
                Width vs. Length​ </Typography><br></br>
            <Typography onClick={(e)=>{props.pageSelection(12);}} variant="body_short" link>
                Width vs. Thickness​ </Typography><br></br>
            <Typography onClick={(e)=>{props.pageSelection(13);}} variant="body_short" link>
                Area vs. Width and Length​ </Typography><br></br>
            <Typography onClick={(e)=>{props.pageSelection(14);}} variant="body_short" link>
                Area vs. Thickness </Typography>
            <br></br><br></br>

         Distributive systems in deep water consist of conduits and sheet-like fan-shaped deposits, 
         often called fans, lobe-complexes, splays or lobe elements. These elements can be, to a 
         certain degree, distinguished from each other based on a combination of pattern, shape and size 
         (read more  <Typography onClick={event =>  window.location.href='https://wiki.equinor.com/wiki/index.php/GCP:Quantitative_analogues_and_concepts/SHARP3/Fansystems'} variant="body_short" link>
         here</Typography>). 
         Although the size of the different ‘fan’ types overlaps, their length, width, thickness and area 
         are all well related which allows for a relatively easy prediction of their size. 
         <br></br>
         <br></br>
         <Typography variant="h2">Database description </Typography>
         <br></br>
         <ul>
            <li>The dimensions, lithology and various additional information of fans and fan elements were 
                 collected from more than 200 publications, from two Statoil sponsored consortium databases 
                 (TRG and GAIA), and from in-house data.</li>
            <li>The GAIA consortium data contains abundant (483 data points) width and thickness data for 
                small elements with an average (maximum) thickness of 2.14 m (0.2 m to 19.4 m) and an average 
                width of 0.35 km (0.04 to 2.9 km). These are named “lobes” by GAIA but as will be discussed 
                below the naming of fan elements exerts a major challenge when comparing results between studies. 
                Most of these data points would probably fit better in the “lobe element” category in most peoples 
                understanding. The data is collected from outcrops (Brushy Canyon Fm) and is therefore biased 
                towards small elements. </li>
            <li>The TRG consortium data that contain at least two of the measures thickness, length or width 
                per element are included here (37 data points only). These range in thickness from 2 to 244 m, 
                0.4-80 km long and 0.04 to 17 km wide (average values of 47m, 11km and 5 km). The elements are 
                uniformly named “sheets” by TRG, but would fall in several different categories according to the 
                scheme presented here. The few number of data points and their scatter across several (undefined) 
                element types makes the dataset of little value. </li>
         </ul>
         <br></br>
         <Typography variant="h2">Study areas (Channel and fan systems) </Typography>
         <br></br>
        See master spreadsheet for detailed locations and references.
        <br></br>
        <br></br>
        <img src={ChannelsStudyArea} alt="Img for representation" className="ImageStudy"/>
        <br></br>
        <br></br>

        <Container>
                <Row>
                    <Col>
                    <Typography variant="body_short"><b>Measured dimensions </b>
                    Width, length and planform area have been calculated for all included fans and fan elements (n=276). 
                    Thickness is a dimension that is hard to constrain in distributive systems and has only been measured for 139 examples.  
                    <br></br>
                    <br></br>
                    <b>Width</b> and <b>length</b> of fans and their elements was measured by projecting a rectangle over the element (Figure 3).  
                    <br></br>
                    <br></br>
                    <b>Planform area</b> was measured as the area within the observable boundaries of the depositional element.  
                    <br></br>
                    <br></br>
                    <b>Thickness</b> was considered as the maximimum vertical relief of the fan/fan element and was measured in a cross-section. 
                    </Typography>
                    </Col>
                    <Col>
                    <img src={Dimensions} alt="Img for representation" className="ImgDim"/>
                    </Col>
                </Row>
        </Container>
       
       <br></br>
        <Typography variant="h2">Data Limitations </Typography>
        <br></br>
        <Typography variant="body_short"><ul>
            <li>Fan shape and dimensions: The biggest data gap is in the fan thickness, because many fans lack well penetrations. 
            There are some uncertainty in the fan outlines, which is demonstrated by the (sometimes) different shapes and sizes 
            published by different authors. The fan fringe to basin plain is a gradual transition which will appear very subtle, 
            and the exact placement of the fan outline is therefore in many cases debatable. </li>
            <li>Fan element shape and dimensions: It is very challenging to ensure a consistent definition of fan elements at 
            various hierarchical levels across the many published studies and the large volume of data utilized in this study. 
            The reasons are probably 1) the general lack of data resolution and the variation in both data resolution and data 
            type (side-scan sonar, shallow seismic, deep seismic etc.) between different studies; and 2) the variable size, geological 
            complexity and number of hierarchical levels that are needed to effectively describe the stacking pattern of architectural 
            elements within individual fans; and 3) the different understanding of workers regarding how to identify and name the architectural 
            elements. For a specific study seen in isolation this is less problematic, but when considering several studies together one 
            will likely be comparing apples and oranges. </li>
            <li>Fan and fan element detailed morphology: Detailed morphology can only be viewed properly in high resolution data. A geological 
            feature will appear different in datasets of different resolutions, something which may ad bias to the description and 
            interpretation of architectural elements. The apparent absence of some features (e.g. channels) in one element may mean 
            they are not there or they are not resolved in the data. Variable geological (or geophysical) contrasts and post-depositional 
            deformation may also affect the details possible to see in the data. For example, lobes or lobe complexes deposited in salt 
            evacuation basins may have had their fringes uplifted along with the basin flanks. </li>
            <li>Grain size classification: It is difficult to assess the overall sandstone-mudstone proportions of fans and fan systems 
            (being on the seabed or in the subsurface) due to a common scarcity of data. For example, some fans on the present-day seabed 
            may only have gravity core data from the upper few meters which may only represent the latest Pleistocene and/or the Holocene. 
            Some sub-surface fans may only have one well penetration and it may not be in an optimal location. Reading & Richards (1994) 
            is the most complete compilation of submarine fan lithologies, but they do not inform what type of data the sand-mud ratio is 
            based on, nor do they refer specifically to previous work. Lithology classifications are therefore to some extent uncertain. </li>
        </ul> </Typography>

</Typography>
    </div>
    )
}