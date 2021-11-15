import {React, Component } from "react";


export default class Item extends Component{
  render(){
    return <div className="item">
      <img id="itemImage" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
      <button onClick={()=>console.log("sv")}>Hello</button>

    </div>
  }
}