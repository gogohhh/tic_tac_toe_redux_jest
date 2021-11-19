import { JUGADOR_X, JUGADOR_O, TURNO} from '../helpers/actionTypes';

export function selectXJugador(jugador){
    return{
        type: JUGADOR_X,
        jugador
    }
}

export function selectOJugador(jugador){
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