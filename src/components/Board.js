import React from "react";
import useThemes from "../contexts/themes/useThemes";
import Square from "./Square";
import "../css/Board.css";

const Board = ({squares, onClick}) => {
    const { state: {theme} } = useThemes();

    function renderSquare(value, i){
        return <Square
            key={i}
            value={value}
            onClick={() => onClick(i)}
        />;
    }

    return (
        <div 
            className="Board"
            style={theme.board}
        >
            {squares.map((square, i) => renderSquare(square, i))}
        </div>
    );
};

export default Board;