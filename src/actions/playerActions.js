import { JUGADOR_X, JUGADOR_O, TURNO} from '../helpers/actionTypes';

export function selectXJugadorAction(jugador){
    return{
        type: JUGADOR_X,
        jugador
    }
}

export function selectOJugadorAction(jugador){
    return{
        type: JUGADOR_O,
        jugador
    }
}

export function toggleturnAction(){
    return {
        type: TURNO
    }
}