let visited;

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
    try {        
        const potentialMoves = [[2,1], [2,-1], [1,2], [-1,2], [-2,1], [-2,-1], [1,-2], [-1,-2]];
        let possibleMoves = [];
        potentialMoves.forEach(move =>{
            let newX = x + move[0];
            let newY = y + move[1];
            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7 ) {
                if (visited[newX][newY] === 0) {
                    possibleMoves.push([newX, newY]);
                    visited[newX][newY] = 1;
                }
            }
        });
        if (possibleMoves.length === 0) {
            console.log('no valid moves for this square',[x,y]);
            return false
        }
        else{
            return possibleMoves;
        }
    } catch (error) {
        console.error('findmoves input', [x,y]);
    }
}
function clearVisited (){
    visited = [];
    for (i = 0; i < 8; i++){
        visited.push(Array(8).fill(0,0));
    }
}
function travail (start, dest){

    let q = [[start]];

    while (q[0]){
        let temp = q.shift();
        const last = temp[temp.length-1];
        if (last[0] === dest[0] && last[1] === dest[1]) {
            return temp;
        }

        let moves = findMoves(last);
        if (moves){
            moves.forEach((move) => {
                let copy = temp.map((x) => x);
                copy.push(move);
                q.push(copy);
            });
        }
    }
    console.log('no valid path');
}

buildBoard();
clearVisited();
console.log(travail([0,0], [5,3]));