import React from "react";
import Square from "./Square/Square.jsx";
import '../../App.css';
import { connect } from 'react-redux';

function Board(props){
    const board = props.board //Ahora le estamos pasando el board de redux
    return(
        <div id="board" className="centrado d-flex flex-wrap">
            {
                board.map((turno , i) => <Square key={i} turno={turno} />)
            }
        </div>
    );
}

export default connect( ({board}) => ({board}))(Board)