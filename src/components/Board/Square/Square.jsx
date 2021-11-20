import React from "react";
import { connect } from 'react-redux';
import Cross from "./Cross.jsx";
import Circle from "./Circle.jsx";
import {toggleturnAction} from '../../../actions/playerActions.js';
//import {checkResultAction} from '../../../actions/resultActions.js';
import '../../../App.css';

import {tirarXAction, tirarOAction} from '../../../actions/boardActions'; //importamos las funciones de tirar

function Square(props){
    const {simbolo, index, tirar, players, board, toggleTurn } = props 
    const disabled = simbolo ? 'disabled' : ''

    return (
        
        <div className={'cell '+ disabled} onClick={() => tirar(board, players, index).then(() => { toggleTurn(); })}> {/* Al hacer click pasamos la prop tirar que manda la action de tirarXAction*/}
           {simbolo ? (simbolo === 'X' ? <Cross /> : <Circle /> ) : '' }  {/*Ahora se pasa solo el turno y los square quedan nulos */} 
        </div>
    )
    
}

const mapStateToProp = ({board, players}) => ({board, players})

const mapDispatchToProp = dispatch => ({ //* Agregamos un dispatch para que conect pueda enviar la funcion Square al store de Redux
    tirar: (board, players, cellIndex) => {
        if(!board[cellIndex]){

            if(players[players.turn] === 'X'){
                return dispatch(tirarXAction(cellIndex))
                }else{
                return dispatch(tirarOAction(cellIndex))
            }
            
        }
    },
    //ckeckResult: (board) => dispatch(checkResultAction(board)),
    toggleTurn: () => dispatch(toggleturnAction())
})

export default connect(mapStateToProp, mapDispatchToProp) (Square)