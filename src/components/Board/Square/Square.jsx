import React from "react";
import Cross from "./Cross.jsx";
import Circle from "./Circle.jsx";
import '../../../App.css';

function Square(props){
    return (
        <div className="cell m-0">
           {props.turno % 2 === 0 ? <Cross /> : <Circle />} 
        </div>
    )
    
}

export default Square;