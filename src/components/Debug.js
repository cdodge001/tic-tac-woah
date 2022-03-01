import React from "react";
import useSettings from "../contexts/settings/useSettings";

const Debug = () => {
    const {
        state: {
            gameType
        }
    } = useSettings();
    return (
        <div>
            <div>GameType:&nbsp;{gameType}</div>
        </div>
    );
};

export default Debug;