import {X_GANA, O_GANA, EMPATE} from '../helpers/actionTypes';
import { checkVictory } from '../helpers/resultHelper';

export function checkResultAction(board){
    if(checkVictory(board, 'X')){
        return {
            type: X_GANA
        }
    }else if(checkVictory(board, 'O')){
        return {
            type: O_GANA
        }
    }else{
        return {
            type: EMPATE
        }
    }
}