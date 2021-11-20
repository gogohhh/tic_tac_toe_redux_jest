import {X_GANA, O_GANA, EMPATE} from '../helpers/actionTypes';

//Rducer para el resultado

const initialState = {
    win: null,
    empate: false
}

export function resultReducer(state = initialState, action){
    switch(action.type){
        case X_GANA:
            return {
                win: 'X',
                empate: false
            }
        case O_GANA:
            return {
                win: 'O',
                empate: false
            }
        case EMPATE:
            return {
                win: null,
                empate: true
            }
        default:
            return state  //state manda lo que contiene initialState
    }
}