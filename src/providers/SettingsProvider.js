import React, { useState } from "react";
import SettingsContext from "../contexts/settings/SettingsContext";
import GameTypes from "../helpers/GameTypes";

const SettingsProvider = ({ children }) => {
    const [gameType, setGameType] = useState(GameTypes.pvp);
    const [aiType, setAiType] = useState(null);
    const value = {
        state: {
            gameType,
            aiType
        },
        actions: {
            setGameType,
            setAiType
        }
    };

    return (
        <SettingsContext.Provider
            value={value}
        >
            {children}
        </SettingsContext.Provider>
    );
}; 

export default SettingsProvider;