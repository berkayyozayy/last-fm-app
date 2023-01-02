import React, { useState } from "react";
import "./App.css";
import Routes from "./routes/Routes";
import { ThemeToggle, themes } from "./presentation/theme/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <div className="App" style={theme}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Routes />
    </div>
  );
}

export default App;
