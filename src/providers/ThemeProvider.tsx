import React, {useState, useEffect, createContext} from "react";
import {ETheme, themeClass} from "../@types/ETheme";
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys";

export const ThemeContext = createContext({
    theme: ETheme.LIGHT,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children } : {children: React.ReactElement}) => {
    const [theme, setTheme] = useState<ETheme>(ETheme.LIGHT);

    useEffect(() => {
        const savedTheme = localStorage.getItem(ELocalStorageKeys.THEME) === 'dark' ? ETheme.DARK : ETheme.LIGHT;
        const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ETheme.DARK
            : ETheme.LIGHT
        );
        setTheme(initialTheme);
        document.body.className = themeClass[initialTheme];
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(ELocalStorageKeys.THEME, newTheme);
        document.body.className = themeClass[newTheme];
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
