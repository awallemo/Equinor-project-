import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Menu">
       <ul>
         <li onClick={(e)=>{
           this.props.pageSelection(1);
         }}>Home</li>
         <li onClick={(e)=>{
           this.props.pageSelection(2);
         }}>MTD description page</li>
         <li onClick={(e)=>{
           this.props.pageSelection(3);
         }}>Channel Deposits page</li> 
         <li onClick={(e)=>{
           this.props.pageSelection(4);
         }}>Fan description page</li>
         <li onClick={(e)=>{
           this.props.pageSelection(5);
         }}>MTD area vs length</li>
         <li onClick={(e)=>{
           this.props.pageSelection(6);
         }}>MTD thickness vs volume</li>
         <li onClick={(e)=>{
           this.props.pageSelection(7);
         }}>MTD area vs volume</li>
         <li onClick={(e)=>{
           this.props.pageSelection(8);
         }}>Page 4</li>
         <li onClick={(e)=>{
           this.props.pageSelection(9);
         }}>Area vs thickness</li>
         <li onClick={(e)=>{
           this.props.pageSelection(10);
         }}>Area vs length</li>
       </ul>
      </div>
    );
  }
}

export default Menu;

/* Remove when ale pages are good*/


       
        