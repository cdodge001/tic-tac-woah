export function easyAi(board){
    // go through board and find empty spaces
    var emptySpaces = [];
    for(let i = 0; i < board.length; ++i){
        if(board[i] == null){
            emptySpaces.push(i);
        }
    }

    // use random number generator to pick random slot to fill
    let chosenSpace = Math.floor(Math.random() * (emptySpaces.length - 1));

    // fill slot
    return emptySpaces[chosenSpace];
};