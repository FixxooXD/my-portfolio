import React from "react";
import { useTheme } from "../context/UseTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/Buttom";
import { cn } from "@/lib/utils";

const ThemeToggler = () => {
  // use the custom hook to access theme context
  const { setTheme, isDarkMode } = useTheme();

  const handleThemeChange = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    // setIsDarkMode(!isDarkMode);
    // console.log("Theme changed to:", newTheme);
  };
  return (
    <>
      <Button
        className={cn()}
        onClick={handleThemeChange}
        variant="ghost"
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default ThemeToggler;
