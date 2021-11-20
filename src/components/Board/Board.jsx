import React from "react";
import Square from "./Square/Square.jsx";
import Tablero from "../Tablero/Tablero.jsx";
import '../../App.css';
import { connect } from 'react-redux';
import { Fragment } from "react";

function Board(props){
    const {board} = props//Ahora le estamos pasando el board de redux
    return(
        <Fragment>
            <Tablero />
            <div id="board" className="centrado d-flex flex-wrap">
                {
                    board.map((simbolo , i) => <Square key={i} index={i} simbolo={simbolo} />)
                }
            </div>
            
        </Fragment>
    );
}

export default connect( ({board}) => ({board}))(Board)