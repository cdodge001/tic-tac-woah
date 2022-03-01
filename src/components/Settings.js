import React, { useEffect, useState } from "react";
import useThemes from "../contexts/themes/useThemes";
import DarkTheme from "../themes/DarkTheme";
import LightTheme from "../themes/LightTheme";
import "../css/Settings.css";
import ScreenTypes from "../helpers/ScreenTypes";

const Settings = ({ show }) => {
    let showClassName = "Settings";
    let hideClassName = showClassName + " display-none";
    let initialClassName = show === ScreenTypes.Settings ? showClassName : hideClassName;
    const [displayClassName, setDisplayClassName] = useState(initialClassName);
    const [darkTheme, setDarkTheme] = useState(false);
    const {
        state: {theme},
        actions: {setTheme}
    } = useThemes();

    useEffect(() => {
        let newDisplayClassName = show === ScreenTypes.Settings ? showClassName : hideClassName;
        setDisplayClassName(newDisplayClassName);
    }, [show]);

    return (
        <div className={displayClassName} style={theme.menuScreen}>
            <div className="Settings-inner">
                <button 
                    style={theme.button}
                    onClick={() => {
                        setTheme(!darkTheme ? DarkTheme : LightTheme);
                        setDarkTheme(!darkTheme);
                    }}
                >
                    Dark Theme: {darkTheme ? "On" : "Off"}
                </button>
            </div>
        </div>
    );
};

export default Settings;