import React from "react";
import { connect } from 'react-redux';
import Cross from "./Cross.jsx";
import Circle from "./Circle.jsx";
import {toggleturnAction} from '../../../actions/playerActions.js';
import '../../../App.css';

import {tirarXAction, tirarOAction} from '../../../actions/boardActions'; //importamos las funciones de tirar

function Square(props){
    const {simbolo, index, tirar, players} = props 
    const disabled = simbolo ? 'disabled' : ''

    return (
        
        <div className={'cell '+ disabled} onClick={() => tirar(players, index)}> {/* Al hacer click pasamos la prop tirar que manda la action de tirarXAction*/}
           {simbolo ? (simbolo === 'X' ? <Cross /> : <Circle /> ) : '' }  {/*Ahora se pasa solo el turno y los square quedan nulos */} 
        </div>
    )
    
}

const mapStateToProp = ({players}) => ({players})

const mapDispatchToProp = dispatch => ({ //* Agregamos un dispatch para que conect pueda enviar la funcion Square al store de Redux
    tirar: (players, cellIndex) => {
        if(players.turn === 'j1'){
            if(players.j1 === 'X'){
                dispatch(tirarXAction(cellIndex))
            }else{
                dispatch(tirarOAction(cellIndex))
            }
        }else{
            if(players.j2 === 'X'){
                dispatch(tirarXAction(cellIndex))
            }else{
                dispatch(tirarOAction(cellIndex))
            }
        }
        dispatch(toggleturnAction())
    }
})

export default connect(mapStateToProp, mapDispatchToProp) (Square)