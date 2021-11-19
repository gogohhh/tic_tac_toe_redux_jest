//Pasamos las acciones de dibujar x y O a una nueva accion Board, esta es la que llegara al reducer
import { DRAW_X, DRAW_O } from '../helpers/actionTypes,js';

export function drawXAction(cellIndex){
    return {
        type: DRAW_X,
        cellIndex
    }
}

export function drawOAction(cellIndex){
    return {
        type: DRAW_O,
        cellIndex
    }
}
