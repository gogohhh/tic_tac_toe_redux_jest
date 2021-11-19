import React from "react";
import Square from "./Square/Square.jsx";
import '../../App.css';

function Board(props){
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return(
        <div id="board" className="centrado d-flex flex-wrap">
            {
                board.map((turn , i) => <Square key={i} turno={turn} />)
            }
        </div>
    );
}

export default Board;