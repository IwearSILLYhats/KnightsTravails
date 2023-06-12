function buildBoard (){
    const board = document.querySelector('.board');
    for (i = 0; i < 8; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < 8; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

function findMoves ([x,y]){
    const potentialMoves = [[2,1], [2,-1], [1,2], [-1,2], [-2,1], [-2,-1], [1,-2], [-1,-2]];
    let possibleMoves = [];
    potentialMoves.forEach(move =>{
        let newX = x + move[0];
        let newY = y + move[1];
        if (newX >= 0 && newX <= 8 && newY >= 0 && newY <= 8 ) {
            possibleMoves.push([newX, newY]);
        }
    });
    if (possibleMoves.length === 0) {
        console.log('no valid moves');
    }
    else{
        return possibleMoves;
    }
}

function travail ([x1,y1], [x2, y2]){

}

buildBoard();