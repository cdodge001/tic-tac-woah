import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const useThemes = () => {
    return useContext(ThemeContext);
};

export default useThemes;