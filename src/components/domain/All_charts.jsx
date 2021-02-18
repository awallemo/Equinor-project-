import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,
} from 'recharts';




export default class AllChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/28w9fud3/1/';

  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <ComposedChart
      
        width={800}
        height={560}
        data={this.props.data}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend 
        wrapperStyle={{
        paddingTop: "30px"
    }} />

        <XAxis scale="log" domain={['auto', 'auto']} dataKey="x_axis" type="number" label={{ value: this.props.data[0]["name"][0], position: 'insideBottom', offset: -10 }} />
        <YAxis scale="log" domain={['auto', 'auto']} type="number" label={{ value: this.props.data[0]["name"][1], angle: -90, position: 'insideLeft', offset:-10 }} />
        
        <Scatter name={this.props.data[0]["plot_types"][2]} dataKey="y_value_all" fill="grey"/>
        <Scatter name="Own input"  dataKey="input_y_value" fill="black"/>

        
        <Line name={this.props.data[0]["equation"][0]} dataKey="regLine_all" stroke="lightcoral" strokeWidth={3} dot={false} activeDot={false}  />
        
        <Line name="Prediction Lower Boundary" dataKey="y_lower_bound" stroke="green" strokeDasharray= "5 5" dot={false} activeDot={false}  />
        <Line name="Prediction Upper Boundary" dataKey="y_upper_bound" stroke="green" strokeDasharray= "5 5" dot={false} activeDot={false}  />
      </ComposedChart>
    );
  }
}