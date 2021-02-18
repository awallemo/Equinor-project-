import "./Page.css";

import { additionalDataManipulationExample, parseCsvToJson } from "../utils/CsvParser";

import { Button } from "@equinor/eds-core-react";
import Content from "../components/layout/Content";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Menu from "../components/layout/Menu";
import React from "react";


import InputForm from '../components/domain/InputForm'
import FanChart from "../components/domain/Fan_chart";

// COMMENT: All "/components/layouts" components are reusable for each page (belong to all the pages). Style them nicely

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      data: null,
      data2: null,
      data3:null,
      data4:null    
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
    parseCsvToJson("./datasets/Fans/Fan_AreavsWidthTest.csv", (data)=>{
      console.log("Parsed data", data);

      // COMMENT: Modify data to fit the chart, or make additional computations (regression lines etc.)
      data = additionalDataManipulationExample(data);
      console.log("Modified data", data);

      
  
      this.setState({
        data,
      });
    });

    parseCsvToJson("./datasets/Fans/Fan_LengthvsWidthTest.csv", (data2)=>{
        console.log("Parsed data", data2);
  
        // COMMENT: Modify data to fit the chart, or make additional computations (regression lines etc.)
        data2 = additionalDataManipulationExample(data2);
        console.log("Modified data", data2);
  
        
    
        this.setState({
          data2,
        });
      });
      parseCsvToJson("./datasets/Fans/Fan_WidthvsThickTest.csv", (data3)=>{
        console.log("Parsed data", data3);
  
        // COMMENT: Modify data to fit the chart, or make additional computations (regression lines etc.)
        data3 = additionalDataManipulationExample(data3);
        console.log("Modified data", data3);
  
        
    
        this.setState({
          data3,
        });

        parseCsvToJson("./datasets/Fans/Fan_AreavsLengthTest.csv", (data4)=>{
            console.log("Parsed data", data4);
      
            // COMMENT: Modify data to fit the chart, or make additional computations (regression lines etc.)
            data4 = additionalDataManipulationExample(data4);
            console.log("Modified data", data4);
      
            
        
            this.setState({
              data4,
            });
          });
      });
    
  }
  

  render() {
    return (
      <div className="Page Page4">
        <Header></Header>
        <Main>
          <Menu
            pageSelection={(e) => {
              this.props.pageSelection(e);
            }}
          ></Menu>
          <Content>
            Sample content
            <Button variant="ghost" color="secondary">
              Secondary
            </Button>
            <Button>Primary</Button>
            {this.state.data !== null &&
              <FanChart data={this.state.data}></FanChart>
            }
            {this.state.data2 !== null &&
              <FanChart data={this.state.data2}></FanChart>
            }
            {this.state.data3 !== null &&
              <FanChart data={this.state.data3}></FanChart>
            }
            {this.state.data4 !== null &&
              <FanChart data={this.state.data4}></FanChart>
            }
            <InputForm onNewPoint={(x,y) => {this.populateData(x,y)}}></InputForm>
            

          </Content>
        </Main>
      </div>
    );
  }
}

export default Page4;