
export function drawRegressionLine_all_x(name, y_val){
    let x_val 
  
    if(name[0].includes("Area") && name[1].includes("Length")){
  
      if(name[3].includes("MTD")){
        x_val = (y_val/1.4107)**(1/0.5126)
      }else{
        x_val = (y_val/2.1428)**(1/0.4561)
      }
    }
    if(name[0].includes("Area") && name[1].includes("Volume")){
        x_val = (y_val/0.0256)**(1/1.1439)
      }
    
      if(name[0].includes("Thickness") && name[1].includes("Volume")){
        x_val = (y_val/0.0009)**(1/2.1445)
      }
    
      
      if(name[0].includes("Length") && name[1].includes("Width")){
        x_val = (y_val/0.4287)**(1/1.029)
      }
    
      if(name[0].includes("Width") && name[1].includes("Thickness")){
        if(name[3].includes("Fan")){
          x_val = (y_val/5.7446)**(1/0.7938)
        }else{
          x_val = (y_val/0.3355)**(1/0.7907)
        }
      }
    
      if(name[0].includes("Area") && name[1].includes("Width")){
        if(name[3].includes("Fans")){
          x_val = (y_val/0.7815)**(1/0.51)
        }else{
          x_val = (y_val/4.8874)**(1/0.508)
        }
        
      }
    
      if(name[0].includes("Area") && name[1].includes("Thickness")){
        x_val = (y_val/0.45)**(1/0.48)
      }
    
      if(name[0].includes("Area") && name[1].includes("Depth")){
        x_val = (y_val/0.4562)**(1/0.4829)
      }

    return x_val
}


export function drawRegressionLine_a_d_x(name, y_val, attachedbool) {
    let x_val 
    if(name[0].includes("Area") && name[1].includes("Length")){
    if(attachedbool === 1){
      x_val = (y_val/2.1984)**(1/0.4534)
    }else{
      x_val = (y_val/1.2477)**(1/0.5415)
    }
  }
  
  if(name[0].includes("Area") && name[1].includes("Volume")){
    if(attachedbool === 1){
      x_val = (y_val/0.018)**(1/1.1845)
    }else{
      x_val = (y_val/0.0249)**(1/1.1766)
    }
  }
  if((name[0].includes("Thickness") && name[1].includes("Volume"))){
    if(attachedbool === 1){
      x_val = (y_val/0.045)**(1/1.6921)
    }else{
      x_val = (y_val/0.0014)**(1/1.6233)
    }
  }
  
    return x_val
  }


  export function drawBoundaries_x(name, y_val, attachedbool){
    let boundarieslist = []
    let y_lower_bound
    let y_upper_bound
    if ((name[0].includes("Area") && name[1].includes("Length"))) {
      if(name[3].includes("MTD")){
        if(attachedbool === 1){
          y_lower_bound = (y_val/0.8458)**(1/0.4525)
          y_upper_bound = (y_val/5.7141)**(1/0.4543)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
        }else if(attachedbool === 0){
          y_lower_bound = (y_val/0.4736)**(1/0.5522)
          y_upper_bound = (y_val/3.2615)**(1/0.5498)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
        }else{
          y_lower_bound = (y_val/0.5393)**(1/0.5126)
          y_upper_bound = (y_val/3.6897)**(1/0.5126)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
        }
      }else{
          y_lower_bound = (y_val/1.118)**(1/0.4559)
          y_upper_bound = (y_val/4.1074)**(1/0.4563)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
      }
    }
    if ((name[0].includes("Thickness") && name[1].includes("Volume"))) {
      if(attachedbool === 1){
        y_lower_bound = (y_val/0.0003)**(1/1.6839)
        y_upper_bound = (y_val/5.8293)**(1/1.7003)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else if(attachedbool === 0){
        y_lower_bound = (y_val/1E-05)**(1/1.6328)
        y_upper_bound = (y_val/0.1928)**(1/1.6118)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else{
        y_lower_bound = (y_val/0.000007)**(1/2.1433)
        y_upper_bound = (y_val/0.1253)**(1/2.1445)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }
    }
    if ((name[0].includes("Area") && name[1].includes("Volume"))) {
      if(attachedbool === 1){
        y_lower_bound = (y_val/0.0025)**(1/1.1826)
        y_upper_bound = (y_val/0.1291)**(1/1.1864)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else if(attachedbool === 0){
        y_lower_bound = (y_val/0.0035)**(1/1.1679)
        y_upper_bound = (y_val/0.183)**(1/1.1647)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else{
        y_lower_bound = (y_val/0.0035)**(1/1.1436)
        y_upper_bound = (y_val/0.1855)**(1/1.1442)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }
    }
    if ((name[0].includes("Width") && name[1].includes("Thickness"))) {
      if(name[3].includes("Fan")){
          y_lower_bound = (y_val/1.2412)**(1/0.7935)
          y_upper_bound = (y_val/26.592)**(1/0.7908)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
      }else{
          y_lower_bound = (y_val/0.1338)**(1/0.7906)
          y_upper_bound = (y_val/0.8407)**(1/0.7941)
          boundarieslist.push(y_lower_bound)
          boundarieslist.push(y_upper_bound)
      }
    }
    if ((name[0].includes("Length") && name[1].includes("Width"))) {
        y_lower_bound = (y_val/0.1388)**(1/1.0283)
        y_upper_bound = (y_val/1.3243)**(1/1.0297)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
    }
    if ((name[0].includes("Area") && name[1].includes("Width"))) {
      if(name[3].includes("Fans")){
        y_lower_bound = (y_val/0.4065)**(1/0.5098)
        y_upper_bound = (y_val/1.5023)**(1/0.5102)    
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else{
        y_lower_bound = (y_val/2.668)**(1/0.5081)
        y_upper_bound = (y_val/8.9541)**(1/0.5071)    
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }
    }
    if ((name[0].includes("Area") && name[1].includes("Thickness"))) {
      if(name[3].includes("Channel")){
        y_lower_bound = (y_val/0.2217)**(1/0.483)
        y_upper_bound = (y_val/0.9389)**(1/0.4828)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }else{
        y_lower_bound = (y_val/1.5023)**(1/0.5102)
        y_upper_bound = (y_val/0.4065)**(1/0.5098)
        boundarieslist.push(y_lower_bound)
        boundarieslist.push(y_upper_bound)
      }
    }
    
    
    return boundarieslist
  }










