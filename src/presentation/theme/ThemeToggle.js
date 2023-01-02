import React from "react";
import Button from "../components/ui/button/Button";

export const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <div className="btn-wrapper">
      <Button
        onClick={toggleTheme}
        label={theme === themes.dark ? "Dark Theme" : "Light Theme"}
      />
    </div>
  );
}
