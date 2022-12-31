import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./presentation/components/ui/header/Header";
import ArtistListView from "./presentation/components/artists/artists-list/ArtistsListView";
import ArtistDetailView from "./presentation/components/artists/artist-detail/artist-detail-view/ArtistDetailView";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route strict exact path="/" component={ArtistListView} />
        <Route path="/artist/:mbid" component={ArtistDetailView} />
      </Switch>
    </div>
  );
}

export default App;
