import React, { useState } from "react";
import "./App.css";
import Home from "./presentation/index";
import { ThemeToggle, themes } from "./presentation/theme/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <div className="App" style={theme}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
