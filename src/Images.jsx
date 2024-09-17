import  React from 'react'; 
import { ImAndroid } from 'react-icons/im';

const Images =(props) =>{ // Jha se call aa rha h , vha konsi property pass hui , isliye props pass kia h 
    return <img src={props.imgsrc} alt="myPic" className="card__img" />
    
}
export default Images ;