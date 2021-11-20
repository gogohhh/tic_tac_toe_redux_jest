//Pasamos las acciones de dibujar x y O a una nueva accion Board, esta es la que llegara al reducer
import { DRAW_X, DRAW_O } from '../helpers/actionTypes.js';

export function tirarXAction(cellIndex){
    return (dispatch) => {
        return new Promise(resolve => {
            dispatch({
                type: DRAW_X,
                cellIndex
            })
            resolve()
        })
    }
}

export function tirarOAction(cellIndex){
    return (dispatch) => {
        return new Promise(resolve => {
            dispatch({
                type: DRAW_O,
                cellIndex
            })
            resolve()
        })
    }
}
