import Papa from "papaparse";

export function parseCsvToJson(url, callback) {
  return Papa.parse(url, {
    download: true,
    complete: function (results) {
      console.log("Finished:", results.data);
      callback(results.data);
    },
  });
}

//Create a funtion that decides which equation to be used 
//based on the data.


export function drawRegressionLine_all(name, x_value) {
  let y_value 

  if(name[0].includes("Area") && name[1].includes("Length")){

    if(name[3].includes("MTD")){
      y_value = 1.4107*x_value**(0.5126)
    }else{
      y_value = 2.1428*x_value**(0.4561)
    }
  }

  if(name[0].includes("Area") && name[1].includes("Volume")){
    y_value = 0.0256*x_value**(1.1439)
  }

  if(name[0].includes("Thickness") && name[1].includes("Volume")){
    y_value = 0.0009*x_value**(2.1445)
  }

  
  if(name[0].includes("Length") && name[1].includes("Width")){
    y_value = 0.4287*x_value**(1.029)
  }

  if(name[0].includes("Width") && name[1].includes("Thickness")){
    if(name[3].includes("Fan")){
      y_value = 5.7446*x_value**(0.7938)
    }else{
      y_value = 0.3355*x_value**(0.7907)
    }
  }

  if(name[0].includes("Area") && name[1].includes("Width")){
    if(name[3].includes("Fans")){
      y_value = 0.7815*x_value**(0.51)
    }else{
      y_value = 4.8874*x_value**(0.508)
    }
    
  }

  if(name[0].includes("Area") && name[1].includes("Thickness")){
    y_value = 0.45*x_value**(0.48)
  }

  if(name[0].includes("Area") && name[1].includes("Depth")){
    y_value = 0.4562*x_value**(0.4829)
  }
  


  return y_value
}

export function drawRegressionLine_a_d(name, x_value, attachedbool) {
  let y_value 
  if(name[0].includes("Area") && name[1].includes("Length")){
  if(attachedbool === 1){
    y_value = 2.1984*x_value**(0.4534)
  }else{
    y_value = 1.2477*x_value**(0.5415)
  }
}

if(name[0].includes("Area") && name[1].includes("Volume")){
  if(attachedbool === 1){
    y_value = 0.018*x_value**(1.1845)
  }else{
    y_value = 0.0249*x_value**(1.1766)
  }
}
if((name[0].includes("Thickness") && name[1].includes("Volume"))){
  if(attachedbool === 1){
    y_value = 0.045*x_value**(1.6921)
  }else{
    y_value = 0.0014*x_value**(1.6233)
  }
}

  return y_value
}

export function drawBoundaries(name, x_value, attachedbool){
  let boundarieslist = []
  let y_lower_bound
  let y_upper_bound
  if ((name[0].includes("Area") && name[1].includes("Length"))) {
    if(name[3].includes("MTD")){
      if(attachedbool === 1){
        y_lower_bound = 0.8458*x_value**(0.4525)
        y_upper_bound = 5.7141*x_value**(0.4543)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else if(attachedbool === 0){
        y_lower_bound = 0.4736*(x_value)**(0.5522)
        y_upper_bound = 3.2615*x_value**(0.5498)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else{
        y_lower_bound = 0.5393*x_value**(0.5126)
        y_upper_bound = 3.6897*x_value**(0.5126)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }
    }else{
        y_lower_bound = 1.118*x_value**(0.4559)
        y_upper_bound = 4.1074*x_value**(0.4563)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
    }
  }
  if ((name[0].includes("Thickness") && name[1].includes("Volume"))) {
    if(attachedbool === 1){
      y_lower_bound = 0.0003*x_value**(1.6839)
      y_upper_bound = 5.8293*x_value**(1.7003)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else if(attachedbool === 0){
      y_lower_bound = 1E-05*(x_value)**(1.6328)
      y_upper_bound = 0.1928*x_value**(1.6118)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else{
      y_lower_bound = 0.000007*x_value**(2.1433)
      y_upper_bound = 0.1253*x_value**(2.)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }
  }
  if ((name[0].includes("Area") && name[1].includes("Volume"))) {
    if(attachedbool === 1){
      y_lower_bound = 0.0025*x_value**(1.1826)
      y_upper_bound = 0.1291*x_value**(1.1864)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else if(attachedbool === 0){
      y_lower_bound = 0.0035*(x_value)**(1.1679)
      y_upper_bound = 0.183*x_value**(1.1647)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else{
      y_lower_bound = 0.0035*x_value**(1.1436)
      y_upper_bound = 0.1855*x_value**(1.1442)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }
  }
  if ((name[0].includes("Width") && name[1].includes("Thickness"))) {
    if(name[3].includes("Fan")){
        y_lower_bound = 1.2412*x_value**(0.7935)
        y_upper_bound = 26.592*x_value**(0.7908)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
    }else{
        y_lower_bound = 0.1338*x_value**(0.7906)
        y_upper_bound = 0.8407*x_value**(0.7941)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
    }
  }
  if ((name[0].includes("Length") && name[1].includes("Width"))) {
      y_lower_bound = 0.1388*x_value**(1.0283)
      y_upper_bound = 1.3243*x_value**(1.0297)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
  }
  if ((name[0].includes("Area") && name[1].includes("Width"))) {
    if(name[3].includes("Fans")){
      y_lower_bound = 0.4065*x_value**(0.5098)
      y_upper_bound = 1.5023*x_value**(0.5102)    
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else{
      y_lower_bound = 2.668*x_value**(0.5081)
      y_upper_bound = 8.9541*x_value**(0.5071)    
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }
  }
  if ((name[0].includes("Area") && name[1].includes("Thickness"))) {
    if(name[3].includes("Channel")){
      y_lower_bound = 0.2217*x_value**(0.483)
      y_upper_bound = 0.9389*x_value**(0.4828)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }else{
      y_lower_bound = 1.5023*x_value**(0.5102)
      y_upper_bound = 0.4065*x_value**(0.5098)
      boundarieslist.push(y_lower_bound)
      boundarieslist.push(y_upper_bound)
    }
  }
  
  
  return boundarieslist
}






export function additionalDataManipulationExample(data) {
  if (!(data && data.length > 0)) {
    return [];
  }
  
  let manipulatedData = [];
  let plot_types = [];
  let equation = [] ;

  plot_types.push(data[1][4])
  plot_types.push(data[2][4])
  plot_types.push(data[3][4])

  equation.push(data[1][5])
  equation.push(data[2][5])
  equation.push(data[3][5])

  
  for (var i = 1; i < data.length; i++) {
    var item = data[i];
    
    let x_value = parseFloat(item[0]);
    let y_value = parseFloat(item[1]);
    let isAttached = parseInt(item[2]);
    let name = data[0];

      

    if(!isAttached){  
      
      manipulatedData.push({
        name: name,
        x_axis: x_value,
        y_value_all: y_value,    
        regLine_all: drawRegressionLine_all(name, x_value),
        
        
        y_axis_d: y_value,      
        regLine_d: drawRegressionLine_a_d(name, x_value,isAttached),
        
        equation:equation,
        plot_types:plot_types,

        y_lower_bound:drawBoundaries(name, x_value)[0],
        y_upper_bound:drawBoundaries(name, x_value)[1],
        
        y_lower_bound_d:drawBoundaries(name, x_value, isAttached)[0],
        y_upper_bound_d:drawBoundaries(name, x_value, isAttached)[1]
      });
    }
    
    if(isAttached === 1){  //Endre denne if-løkka til egen funskjon
    
      manipulatedData.push({
        name: name,
        x_axis: x_value,
        y_value_all: y_value,
        regLine_all: drawRegressionLine_all(name, x_value),
        
        y_axis_a: y_value,
        regLine_att: drawRegressionLine_a_d(name,x_value,isAttached),
        
        equation:equation,
        plot_types:plot_types,
        
        y_lower_bound:drawBoundaries(name, x_value)[0],
        y_upper_bound:drawBoundaries(name, x_value)[1],

        y_lower_bound_a:drawBoundaries(name, x_value, isAttached)[0],
        y_upper_bound_a:drawBoundaries(name, x_value, isAttached)[1]
      });
    }
    
    if(isAttached === 2){
      manipulatedData.push({
        name: name,
        x_axis: x_value,
        y_value_all: y_value,
        regLine_all: drawRegressionLine_all(name, x_value),

        y_axis_channel:y_value,

        equation:equation,
        plot_types:plot_types,
        
        y_lower_bound:drawBoundaries(name, x_value)[0],
        y_upper_bound:drawBoundaries(name, x_value)[1],

        y_lower_bound_a:drawBoundaries(name, x_value, isAttached)[0],
        y_upper_bound_a:drawBoundaries(name, x_value, isAttached)[1]
      })
    }
    
    
  }
  return manipulatedData;
}


