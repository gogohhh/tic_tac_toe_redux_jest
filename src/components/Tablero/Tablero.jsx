import React from "react";
import { connect } from 'react-redux';
import {checkResultAction} from '../../actions/resultActions.js';

function Tablero(props){
    const {board, players, result, checkResultAction} = props;

    if(!(result.empate || result.win )){
        checkResultAction(board);
    }
    

    if(result.empate){
        return <div className="alert alert-info mt-2"> EMPATE </div>

    }else if(result.win === 'X') {
        const player = players.j1 === 'X' ? 'Jugador 1' : 'Jugador 2'
        return <div className="alertaGanador alert alert-success mt-2"> {player} gano! </div>

    }else if(result.win === 'O') {
        const player = players.j1 === 'O' ? 'Jugador 1' : 'Jugador 2'
        return <div className="alertaGanador alert alert-success mt-2"> {player} gano! </div>
    }

    return (
        <div>
            <div className="centered">
                <div className="row">
                    <p className="jugadorTag"><strong>Jugador 1: </strong>{players.j1}</p>
                </div>
                <div className="row">
                    <p className="jugadorTag"><strong>Jugador 2: </strong>{players.j2}</p>
                </div>
            </div>

            <div className="turno">
                <p className="turnoTag"><strong>Turno de: </strong>{players.turn === 'j1' ? 'Jugador 1' : 'Jugador 2'}</p>
            </div>
        </div>
    )
}

export default connect( 
    ({board, players, result}) => ({board, players, result}),
    dispatch => ({ checkResultAction: (board)  => dispatch(checkResultAction(board)) })
)(Tablero)