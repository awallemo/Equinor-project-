import React from "react";
import { drawRegressionLine_a_d, drawBoundaries} from "../../utils/CsvParser";

import {
  Icon,
  TextField,
} from '@equinor/eds-core-react'
import styled from 'styled-components'
import { checkbox } from '@equinor/eds-icons'
import './inputForm.css'
Icon.add({ checkbox })
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-width;
  padding: 32px;
  padding-bottom: 8rem;
  grid-gap: 2rem;
  position: relative;
  transition: all 0.36s;
`

export default class PredictionFormYAtt extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      x: '',
      p50:'',
      p90_min:'',
      p90_max:'',
      data:''
    };

      this.handle_x_Change = this.handle_x_Change.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handle_x_Change(event) {
      console.log("HER ER DATA",this.props.data)
      this.setState({
        x: event.target.value,
        p50: parseFloat(drawRegressionLine_a_d(this.props.data[0]["name"], event.target.value),1).toFixed(2),
        p90_min: parseFloat(drawBoundaries(this.props.data[0]["name"], event.target.value,1)[0]).toFixed(2),
        p90_max: parseFloat(drawBoundaries(this.props.data[0]["name"], event.target.value,1)[1]).toFixed(2)
      });
    }

  
    handleSubmit(event) {
  
      event.preventDefault();

      this.props.onNewPointY(this.state.x)
      //Kaller på en ny funksjon inne i denne.
      //Denne funksjonen blir tatt inn som input fra page1-komp.
      //Denne funksjonen skal: ta inn to argumenter.
      //Funksjonen skal bare ta inn disse to argumentene og returnere disse ved onSubmit.
    }
  
    render() {
      return (
        <Wrapper>
        <form onSubmit={this.handleSubmit}>
          
          <legend>Predict y from x:</legend>
                <br></br>
            <label htmlFor="x-value">
            <TextField
                    type="text"
                    value={this.state.x}
                    onChange={this.handle_x_Change}
                    label="X-value"
                    helperText="Insert x-value to predict a y-value"
                    style={{backgroundColor:"white", border:"1px solid"}}
                    />
            </label>
          <br></br>
            <TextField
                    type="text"
                    value={this.state.p50}
                    label="Y-value"
                    readOnly
                    />
            <br></br>
          
            <TextField
                    type="text"
                    value={this.state.p90_min}
                    label="Y P95 low value"
                    readOnly
                    />
            <br></br>
          
            <TextField
                    type="text"
                    value={this.state.p90_max}
                    label="Y P95 high value"
                    readOnly
                    />
          <br></br>
          
        </form>
        </Wrapper>
      );
    }
  }