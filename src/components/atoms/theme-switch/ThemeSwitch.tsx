import {useContext} from "react";
import {ThemeContext} from "../../../providers/ThemeProvider.tsx";
import {ETheme} from "../../../@types/ETheme.ts";
import sunIcon from "../../../../public/icons/sun.svg";
import moonIcon from "../../../../public/icons/moon.svg";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    theme === ETheme.DARK
      ? <img width={24} height={24} src={sunIcon} onClick={toggleTheme} alt="sun"/>
      : <img width={24} height={24} src={moonIcon} onClick={toggleTheme} alt="moon"/>
  );
};