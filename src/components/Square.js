import React from "react";
import useThemes from "../contexts/themes/useThemes";
import "../css/Square.css"

const Square = ({value, onClick}) => {
    const { state: {theme} } = useThemes();

    return (
        <button 
            className="Square"
            onClick={onClick}
            style={theme.squares}
        >
            {value}
        </button>
    );
};

export default Square;