import React, { useState, createContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ArtistListView from "./presentation/components/artists/artists-list/ArtistsListView";
import ArtistDetailView from "./presentation/components/artists/artist-detail/artist-detail-view/ArtistDetailView";
import Button from "./presentation/components/ui/button/Button";

const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export const ThemeContext = createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={theme}>
        <div className="btn-wrapper">
          <Button
            onClick={toggleTheme}
            label={theme === themes.dark ? "Dark Theme" : "Light Theme"}
          />
        </div>
        <Switch>
          <Route strict exact path="/" component={ArtistListView} />
          <Route path="/artist/:mbid" component={ArtistDetailView} />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
