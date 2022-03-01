import React from "react";
import useThemes from "../contexts/themes/useThemes";
import "../css/Nav.css";

const Nav = ({ settingsClick }) => {
    const {
        state: {theme}
    } = useThemes();

    return (
        <div className="Nav" style={theme.nav}>
            <div 
                className="header"
                style={theme.text}
            >Tic-Tac-Toe</div>
            <button 
                onClick={settingsClick}
                className="settings-button"
            >&#9881;</button>
        </div>
    );
};

export default Nav;