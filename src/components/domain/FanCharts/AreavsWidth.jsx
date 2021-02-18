import React from "react";
import InputForm from '../InputForm';
import { parseCsvToJson, additionalDataManipulationExample } from "../../../utils/CsvParser";
import FanChart from "../Fan_chart";

import PredictionFormY from "../PredictionForm_y"
import PredictionFormX from "../PredictionForm_x"
import { Typography } from "@equinor/eds-core-react";

// COMMENT: All "/components/layouts" components are reusable for each page (belong to all the pages). Style them nicely

class FanAreavsWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      data: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  //Hent inn data hit fra input-form
  //Funksjon som henter verdiene fra inputForm og populerer datasettet. 

  populateData(x, y){
    
    this.setState({
      data: [...this.state.data, {x_axis:x, input_y_value: y}]
    })
  }


  loadData() {
    // COMMENT: Parse data from CSV
    parseCsvToJson("./datasets/Fans/Fan_AreavsWidth.csv", (data)=>{
      console.log("Parsed data", data);

      // COMMENT: Modify data to fit the chart, or make additional computations (regression lines etc.)
      data = additionalDataManipulationExample(data);
      console.log("Modified data", data);

      
  
      this.setState({
        data,
      });
    });
    
  }
  

  render() {
    return (
      <div className="Charts" style={{textAlign:"center"}}>
        <Typography className="Header" variant="h1">Fan deposits Area VS Width </Typography>
            <div style={{display:"inline-block"}}>
            {this.state.data !== null &&
            <FanChart data={this.state.data}></FanChart>
            }
            </div>         
            <br></br>
            <div style= {{display:"inline-block"}}>
            <div style= {{display:"flex"}}>
                <InputForm onNewPoint={(x,y) => {this.populateData(x,y)}}></InputForm>
                <div>
                  <fieldset>                
                  <legend style= {{paddingTop:33}}>Predict Dimensions</legend>
                  <div style= {{display:"flex"}}>
                  <PredictionFormY data={this.state.data} ></PredictionFormY>
                  <PredictionFormX data={this.state.data}></PredictionFormX>
                  </div>
                  </fieldset>
                </div>
              </div>
              </div>
      </div>
      
    );
  }
}

export default FanAreavsWidth;