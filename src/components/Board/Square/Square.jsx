import React from "react";
import Cross from "./Cross.jsx";
import Circle from "./Circle.jsx";
import '../../../App.css';

function Square(props){
    return (
        <div className="cell m-0">
           {props.turno}  {/*Ahora se pasa solo el turno y los square quedan nulos */} 
        </div>
    )
    
}

export default Square;