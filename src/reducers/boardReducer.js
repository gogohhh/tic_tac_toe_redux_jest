//Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. 
//Esto es trabajo de los reducers.

import { DRAW_X, DRAW_O } from '../helpers/actionTypes.js';

const initialState = [  //El estado inicial para el array pero desde el reducer
    null, null, null,
    null, null, null,
    null, null, null
]

export function boardReducer(state = initialState, action){
    switch (action.type) {
        case DRAW_X:

            const newXState = [...state]
            newXState[action.cellIndex] = newXState[action.cellIndex] ? newXState[action.cellIndex] : 'X'
            return newXState

        case DRAW_O:

            const newOState = [...state]
            newOState[action.cellIndex] = newOState[action.cellIndex] ? newOState[action.cellIndex] : 'O'
            return newOState

        default:
            return state
    }
}