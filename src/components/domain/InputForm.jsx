import React from "react";
import {
  Icon,
  Typography,
  Button,
  TextField,
  Dialog,
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
const { Actions, CustomContent } = Dialog
// const { register, handleSubmit, watch, errors } = useForm()

const TempButtonWrapper = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: repeat(2, fit-content(100%));
  justify-content: end;
  justify-self: end;
`
const CUSTOM_CONTENT_CHOICES = {
  none: null,
  description: (
    <Typography variant="body_short">* If you wish to submit your data to the database, 
    please contact Lorena Moscardelli, 
    or Michal Janocko.
    </Typography>
  ),
}

const ACTION_CHOICES = {
  none: null,
  buttons: (
    <TempButtonWrapper>
      <Button onClick={(e) => {
    e.preventDefault();
    window.location.href='mailto:mjan@equinor.com';
    }} variant="ghost">Michal Janocko</Button>
      <Button onClick={(e) => {
    e.preventDefault();
    window.location.href='mailto:lmosc@equinor.com';
    }} variant="ghost">Lorena Moscardelli</Button>
    </TempButtonWrapper>
  ),
}

export default class inputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {x: '',
    y: ''};

      this.handle_x_Change = this.handle_x_Change.bind(this);
      this.handle_y_Change = this.handle_y_Change.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handle_x_Change(event) {
      this.setState({x: event.target.value});
    }

    handle_y_Change(event) {
        this.setState({y: event.target.value});
    }
  
    handleSubmit(event) {
  
      event.preventDefault();

      this.props.onNewPoint(this.state.x, this.state.y)
      this.setState({
        x: '',
        y:''
      })
      //Kaller på en ny funksjon inne i denne.
      //Denne funksjonen blir tatt inn som input fra page1-komp.
      //Denne funksjonen skal: ta inn to argumenter.
      //Funksjonen skal bare ta inn disse to argumentene og returnere disse ved onSubmit.
    }
  
    render() {
      return (
        <Wrapper>
        <form onSubmit={this.handleSubmit}>
        <legend>Compare data to dataset</legend>
                <br></br>
            <label htmlFor="x-value">
            <TextField
                    type="number"
                    value={this.state.x}
                    onChange={this.handle_x_Change}
                    label="X-value"
                    helperText="Insert x-value you wish to compare"
                    style={{backgroundColor:"white", border:"1px solid"}}
                    />
            </label>
          <br></br>
            <label htmlFor="y-value">
            <TextField
                    type="number"
                    value={this.state.y}
                    onChange={this.handle_y_Change}
                    label="Y-value"
                    helperText="Insert y-value you wish to compare"
                    style={{backgroundColor:"white", border:"1px solid"}}
                    />
            </label>
          <br></br>
          <input
            type="submit"
            id="submit_form"
            style={{ display: 'none' }}
            multiple
          />
          <label htmlFor="submit_form">
            <Button as="span">Submit</Button>
          </label>
          <br></br>
          <br></br>
                <Dialog>
                    <CustomContent>
                    {CUSTOM_CONTENT_CHOICES['description']}
                    </CustomContent>
                    <Actions>{ACTION_CHOICES['buttons']}</Actions>
                </Dialog>
        </form>
        </Wrapper>
      );
    }
  } 