import React, { useState } from "react";
import useThemes from "../contexts/themes/useThemes";
import Game from "./Game";
import Nav from './Nav';
import "../css/View.css";
import Debug from "./Debug";
import MenuScreen from "./MenuScreen";
import ScreenTypes from "../helpers/ScreenTypes";
import GameOverScreen from "./GameOverScreen";
import Settings from "./Settings";

const View = () => {
    const [currentScreen, setCurrentScreen] = useState(ScreenTypes.MenuScreen);
    const [previousScreen, setPreviousScreen] = useState(null);
    const [gameOverMessage, setGameOverMessage] = useState("");
    const {state: {theme}} = useThemes();

    return (
        <div
            className="View"
            style={theme.view}
        >
            <Nav settingsClick={() => {
                if(currentScreen !== ScreenTypes.Settings){
                    setPreviousScreen(currentScreen);
                    setCurrentScreen(ScreenTypes.Settings);
                } else {
                    setCurrentScreen(previousScreen);
                    setPreviousScreen(null);
                }
            }}/>
            <Game 
                show={currentScreen}
                onGameOver={(message) => {
                    setGameOverMessage(message);
                    setCurrentScreen(ScreenTypes.GameOverScreen);
                }}
            />
            <MenuScreen 
                show={currentScreen}
                onClick={() => {setCurrentScreen(ScreenTypes.GameScreen)}}
            />
            <GameOverScreen 
                message={gameOverMessage}
                show={currentScreen}
                onClick={(nextGameType) => {
                    if(nextGameType !== null && nextGameType !== undefined){
                        setCurrentScreen(ScreenTypes.GameScreen);
                    } else {
                        setCurrentScreen(ScreenTypes.MenuScreen);
                    }
                }}
            />
            <Settings
                show={currentScreen}
            />
        </div>
    );
};

export default View;