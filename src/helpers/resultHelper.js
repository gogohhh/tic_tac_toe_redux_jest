//* Funcion para comprobar las lineas ganadoras mediante el array
export function checkVictory(board, simbolo){
    if(board[0] === simbolo && board[1] === simbolo && board[2] === simbolo){
        return true
    }

    if(board[3] === simbolo && board[4] === simbolo && board[5] === simbolo){
        return true
    }

    if(board[6] === simbolo && board[7] === simbolo && board[8] === simbolo){
        return true
    }

    if(board[0] === simbolo && board[3] === simbolo && board[6] === simbolo){
        return true
    }

    if(board[1] === simbolo && board[4] === simbolo && board[7] === simbolo){
        return true
    }

    if(board[2] === simbolo && board[5] === simbolo && board[8] === simbolo){
        return true
    }

    if(board[0] === simbolo && board[4] === simbolo && board[8] === simbolo){
        return true
    }

    if(board[2] === simbolo && board[4] === simbolo && board[6] === simbolo){
        return true
    }

    return false
}