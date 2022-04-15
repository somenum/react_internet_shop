import React, { useState, useEffect, useMemo } from "react";
import ThemeContext, { initialThemeState } from "../context/themeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  const { localStorage } = window;

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if (savedThemeLocal) {
      setTheme(savedThemeLocal);
    }
  }, [localStorage]);

  useEffect(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme, localStorage]);

  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
