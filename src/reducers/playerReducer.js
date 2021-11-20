import { JUGADOR_X, JUGADOR_O, TURNO} from '../helpers/actionTypes';

const initialState = {
    j1: 'X',
    j2: 'O',
    turn: 'j1'
}

export function playerReducer(state = initialState, action){

    switch (action.type){
        case JUGADOR_X:
            const newXState = {...state}
            
            if(action.jugador === 'j1'){
                newXState.j1 = 'X'
                newXState.j2 = 'O'
            }else{
                newXState.j1 = 'O'
                newXState.j2 = 'X'
            }
            return newXState
        
        case JUGADOR_O:
            const newOState = {...state}
            
            if(action.jugador === 'j1'){
                newOState.j1 = 'O'
                newOState.j2 = 'X'
            }else{
                newOState.j1 = 'X'
                newOState.j2 = 'O'
            }
            return newOState
        
        case TURNO:
            const newState = {...state}

            if(newState.turn === 'j1'){
                newState.turn = 'j2'
            }else{
                newState.turn = 'j1'
            }
            return newState
        
        default:
            return state

    }
}