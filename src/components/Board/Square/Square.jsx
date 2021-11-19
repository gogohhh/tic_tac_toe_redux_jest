import React from "react";
import Cross from "./Cross.jsx";
import '../../../App.css';

function Square(props){
    return (
        <div className="col-4 col-md-4 m-0">
           <Cross />
        </div>
    )
    
}

export default Square;