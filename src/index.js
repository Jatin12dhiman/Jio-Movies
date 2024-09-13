import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
// import App from "./App";
import Card from "./Cards"
import Sdata from './Sdata'

// console.log(Sdata[0].sname) 

// function ncard(val){
//   console.log(val);

// }

// Wrapping multiple <Card> components inside a React Fragment <>
ReactDOM.render(
  <>

    <h1 className="heading_style"> Jio Cinema Super Hit Movies </h1>
    {Sdata.map((val) =>{ //Fat arrow function 
      return (
        <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })};


  </>,
  document.getElementById('root')
);

