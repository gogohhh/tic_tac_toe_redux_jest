import React from "react";
import Square from "./Square/Square.jsx";
import '../../App.css';
import { connect } from 'react-redux';
import { Fragment } from "react";

function Board(props){
    const {board, players} = props//Ahora le estamos pasando el board y players de redux
    return(
        <Fragment>
            <div className="mt-5 centered">
                <div className="row">
                    <p><strong>Jugador 1: </strong>{players.j1}</p>
                </div>
                <div className="row">
                    <p><strong>Jugador 2: </strong>{players.j2}</p>
                </div>
            </div>
            <div className="turno">
            <p><strong>Turno de: </strong>{players.turn === 'j1' ? 'Jugador 1' : 'Jugador 2'}</p>
            </div>
            <div id="board" className="centrado d-flex flex-wrap">
                {
                    board.map((simbolo , i) => <Square key={i} index={i} simbolo={simbolo} />)
                }
            </div>
            
        </Fragment>
    );
}

export default connect( ({board, players}) => ({board, players}))(Board)