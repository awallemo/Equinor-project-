import React from "react";
import CatChart from "../Cat_chart";
import InputForm from '../InputForm';
import AllCharts from "../All_charts";

import { parseCsvToJson, additionalDataManipulationExample} from "../../../utils/CsvParser";

import PredictionFormY from "../PredictionForm_y"
import PredictionFormX from "../PredictionForm_x"

import PredictionFormXAtt from "../PredictionForm_x_att"
import PredictionFormYAtt from "../PredictionForm_y_att"

import PredictionFormXDet from "../PredictionForm_x_det"
import PredictionFormYDet from "../PredictionForm_y_det"
import { Typography } from "@equinor/eds-core-react";


// COMMENT: All "/components/layouts" components are reusable for each page (belong to all the pages). Style them nicely

class MTDAreavsLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAttached:false,   
      data: null,
      
    };
  }

  componentDidMount() {
    this.loadData();
    
  }

  
  
  //Funksjon som henter verdiene fra inputForm og populerer datasettet. 

  populateData(x, y){
    console.log(this.state.data)
    this.setState({
      data: [...this.state.data, {x_axis:x, input_y_value: y}]
    })
  }

  handle_attached_change = (event) =>{
    this.setState({
        ...this.state,
        isAttached:!this.state.isAttached
    })
    console.log("isAttached", this.state.isAttached)       
}


  loadData() {
    // COMMENT: Parse data from CSV
    parseCsvToJson("./datasets/MTDs/AreavsLength.csv", (data)=>{
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
      <div className="Charts" style= {{textAlign:"center"}}>
        <Typography className="Header" variant="h1">Mass-transport deposit Area VS Length </Typography>
          <div style= {{display:"inline-block"}}>
            <div style= {{display:"flex"}}>
              {this.state.data !== null &&
              <AllCharts data={this.state.data}></AllCharts>
              }
              
              {this.state.data !== null && 
              <CatChart data={this.state.data}></CatChart>
              }
            </div>
            
          </div>
            <br></br>
          <div style= {{display:"inline-block"}}>    
            <div style= {{display:"flex"}}>
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
              <br></br>
              <div style= {{display:"flex"}}>
                <InputForm onNewPoint={(x,y) => {this.populateData_lower_chart(x,y)}}></InputForm>
                <div >
                <label for= "Attached">
                  Choose Attached or Detached
                  </label>
                  <input id="Attached" type="checkbox" value={this.state.isAttached} onChange={this.handle_attached_change}/>
                  <br/>{
                      this.state.isAttached && <> 
                        <fieldset>
                          <legend> Predict Dimensions (Attached MTDs)</legend>
                            <div style= {{display:"flex"}}>
                              <PredictionFormYAtt data={this.state.data}></PredictionFormYAtt>
                              <PredictionFormXAtt data={this.state.data}></PredictionFormXAtt>
                            </div>
                        </fieldset>
                      </>}{
                      !this.state.isAttached && <>
                      <fieldset>
                          <legend> Predict Dimensions (Detached MTDs)</legend>
                            <div style= {{display:"flex"}}>
                              <PredictionFormYDet data={this.state.data}></PredictionFormYDet>
                              <PredictionFormXDet data={this.state.data}></PredictionFormXDet>
                            </div>
                      </fieldset>
                      </>
                    }
                  
                </div>
              </div>
            </div>
          </div>
           
      </div>
      
    );
  }
}

export default MTDAreavsLength;
