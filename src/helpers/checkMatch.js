export function checkMatch(squares){
    // prefill lines
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let isTie = true;

    // check all lines for game match
    for(let i = 0; i < lines.length; ++i){
        // get the current line
        const [a, b, c] = lines[i];
        
        // if any values are null, no game ending scenario
        if(!squares[a] || !squares[b] || !squares[c]){
            isTie = false;
            continue;

        // else if all cells in line match, player wins
        } else if(squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return isTie ? "Tie" : null;
}