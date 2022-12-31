import "./App.css";
import ArtistsListView from "./presentation/components/artists/ArtistsListView";
import Header from "./presentation/components/ui/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ArtistsListView />
    </div>
  );
}

export default App;
