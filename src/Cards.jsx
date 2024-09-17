import React from 'react'
// import Navbar from './Navbar';
// import Heading from "./Heading"
import Images from './Images';

function Card(props) {
    return (
      <>  
                
        <div className="cards">
          <div className="card">
          <Images imgsrc={props.imgsrc }/>   
          {//Jha se call aa rha h , vha konsi property pass hui , isliye props pass kia h 
          }
            <div className="card__info">
              <span className="card__category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              <a href={props.link} target="_blank" className="text-4xl">
                <button className="">Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  export  default Card;