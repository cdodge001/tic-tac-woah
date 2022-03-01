import React, { useEffect, useState } from "react";
import useSettings from "../contexts/settings/useSettings";
import useThemes from "../contexts/themes/useThemes";
import "../css/MenuScreen.css";
import GameTypes from "../helpers/GameTypes";
import ScreenTypes from "../helpers/ScreenTypes";

const MenuScreen = ({show, onClick}) => {
    let showClassName = "MenuScreen";
    let hideClassName = showClassName + " display-none";
    let initialClassName = show === ScreenTypes.MenuScreen ? showClassName : hideClassName;
    const [displayClassName, setDisplayClassName] = useState(initialClassName);
    const {
        actions: {
            setGameType
        }
    } = useSettings();
    const {
        state: {theme}
    } = useThemes();

    function startGame(gameType){
        setGameType(gameType);
        onClick();
    }

    useEffect(() => {
        let newDisplayClassName = show === ScreenTypes.MenuScreen ? showClassName : hideClassName;
        setDisplayClassName(newDisplayClassName);
    }, [show]);

    return (
        <div
            className={displayClassName}
            style={theme.menuScreen}
        >
            <div className="MenuScreen-inner">
                <ul>
                    <li>
                        <button 
                            style={theme.button}
                            onClick={() => {startGame(GameTypes.ai)}}
                        >Single Player</button>
                    </li>
                    <li>
                        <button
                            style={theme.button}
                            onClick={() => {startGame(GameTypes.pvp)}}
                        >Multiplayer</button>
                    </li>
                    {/* <li>
                        <button>Online</button>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default MenuScreen;