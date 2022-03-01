import React, { useState } from "react";
import LightTheme from "../themes/LightTheme";
import ThemeContext from "../contexts/themes/ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);
    const value = {
        state: { theme },
        actions: { setTheme }
    };

    return (
        <ThemeContext.Provider 
            value={value}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;