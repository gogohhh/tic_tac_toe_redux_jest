import React from "react";
import { connect } from 'react-redux';
import Cross from "./Cross.jsx";
import Circle from "./Circle.jsx";
import '../../../App.css';

import {tirarXAction} from '../../../actions/boardActions'; //importamos las funciones de tirar

function Square(props){
    const {turno, index, tirar} = props 

    return (
        
        <div className="cell m-0" onClick={() => tirar(index)}> {/* Al hacer click pasamos la prop tirar que manda la action de tirarXAction*/}
           {turno ? (turno === 'X' ? <Cross /> : <Circle /> ) : '' }  {/*Ahora se pasa solo el turno y los square quedan nulos */} 
        </div>
    )
    
}

export default connect(null, dispatch => ({  //* Agregamos un dispatch para que conect pueda enviar la funcion Square al store de Redux
    
    tirar: (cellIndex) => {
        dispatch(tirarXAction(cellIndex))
    }

    })) (Square)