import React from "react";

import { drawRegressionLine_all_x, drawBoundaries_x} from "../../utils/Predict_x_from_y";

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




export default class PredictionFormX extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      y: '',
      p50:'',
      p90_min:'',
      p90_max:'',
      data:''
    };

      this.handle_y_Change = this.handle_y_Change.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handle_y_Change(event) {
      this.setState({
        y: event.target.value,
        p50: parseFloat(drawRegressionLine_all_x(this.props.data[0]["name"], event.target.value)).toFixed(2),
        p90_min: parseFloat(drawBoundaries_x(this.props.data[0]["name"], event.target.value)[0]).toFixed(2),
        p90_max: parseFloat(drawBoundaries_x(this.props.data[0]["name"], event.target.value)[1]).toFixed(2)

      });
    }

  
    handleSubmit(event) {
  
      event.preventDefault();

      this.props.onNewPointX(this.state.y)
      //Kaller på en ny funksjon inne i denne.
      //Denne funksjonen blir tatt inn som input fra page1-komp.
      //Denne funksjonen skal: ta inn to argumenter.
      //Funksjonen skal bare ta inn disse to argumentene og returnere disse ved onSubmit.
    }
  
    render() {
      return (
        <Wrapper>
        <form onSubmit={this.handleSubmit}>
          
          <legend>Predict x from y:</legend>
                <br></br>
            <label htmlFor="y-value">
            <TextField
                    type="text"
                    value={this.state.y}
                    onChange={this.handle_y_Change}
                    label="Y-value"
                    helperText="Insert y-value to predict an x-value"
                    style={{backgroundColor:"white", border:"1px solid"}}
                    />
            </label>
          <br></br>
            <TextField
                    type="text"
                    value={this.state.p50}
                    label="X-value"
                    readOnly
                    />
            <br></br>
          
            <TextField
                    type="text"
                    value={this.state.p90_min}
                    label="X P95 low value"
                    readOnly
                    />
            <br></br>
          
            <TextField
                    type="text"
                    value={this.state.p90_max}
                    label="X P95 high value"
                    readOnly
                    />
          <br></br>
          
        </form>
        </Wrapper>
      );
    }
  }