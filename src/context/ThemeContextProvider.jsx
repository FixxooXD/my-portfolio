import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const TheContextProvider = ({ children, defaultTheme = "system" }) => {
  const [theme, setTheme] = useState(defaultTheme);
  // const [isDarkMode, setIsDarkMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    //Removing old theme classes cause it may cause conflicting styles
    root.classList.remove("light", "dark");

    //Adding new theme classes according to system preference
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      // Update the theme state to match the system theme
      setTheme(systemTheme);
      console.log("System theme applied:", systemTheme);
      return;
    }
    console.log("Custom theme applied:", theme);
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    isDarkMode: theme === "dark",
    setTheme: (newTheme) => {
      if (newTheme === "dark") {
        console.log(newTheme, "hapenning black");
        setTheme("dark");
      } else if (newTheme === "light") {
        console.log(newTheme, "hapenning white");
        setTheme("light");
      }
    },
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// custom hook to use the ThemeContext
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
