import { Route, Switch } from "react-router-dom";
import {
  ArtistListView,
  ArtistDetailView,
} from "../presentation/components/index";

function Home() {
  return (
    <Switch>
      <Route strict exact path="/" component={ArtistListView} />
      <Route path="/artist/:mbid" component={ArtistDetailView} />
    </Switch>
  );
}

export default Home;
