import React from "react";
import Square from "./Square/Square.jsx";
import '../../App.css';

function Board(props){
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return(
        <div className="centrado row">
            {
                board.map((el , i) => <Square key={i} />)
            }
        </div>
    );
}

export default Board;