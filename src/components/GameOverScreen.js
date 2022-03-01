import React, { useEffect, useState } from "react";
import useSettings from "../contexts/settings/useSettings";
import useThemes from "../contexts/themes/useThemes";
import "../css/GameOverScreen.css";
import GameTypes from "../helpers/GameTypes";
import ScreenTypes from "../helpers/ScreenTypes";

const GameOverScreen = ({message, show, onClick}) => {
    let showClassName = "GameOverScreen";
    let hideClassName = showClassName + " display-none";
    let initialClassName = show === ScreenTypes.GameOverScreen ? showClassName : hideClassName;
    const [displayClassName, setDisplayClassName] = useState(initialClassName);
    const [previousGameType, setPreviousGameType] = useState(null);
    const {
        state: {
            gameType
        },
        actions: {
            setGameType
        }
    } = useSettings();
    const { 
        state: {theme}
    } = useThemes();
   
    useEffect(() => {
        let newDisplayClassName = hideClassName;

        if(show === ScreenTypes.GameOverScreen){
            newDisplayClassName = showClassName;
            setPreviousGameType(gameType);
            setGameType(null);
        }

        setDisplayClassName(newDisplayClassName);


    }, [show]);

    function startGame(){
        setGameType(previousGameType);
        onClick(previousGameType);
    }

    return (
        <div
            className={displayClassName}
            style={theme.menuScreen}
        >
            <div className="GameOverScreen-inner">
                <div 
                    className="header"
                    style={theme.text}
                >Game Over</div>
                <div 
                    className="game-results-text"
                    style={theme.text}
                >{message}</div>
                <ul>
                    <li>
                        <button 
                            style={theme.button}
                            onClick={() => {startGame()}}
                        >Play Again</button>
                    </li>
                    <li>
                        <button
                            style={theme.button}
                            onClick={() => {onClick()}}
                        >Main Menu</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GameOverScreen;