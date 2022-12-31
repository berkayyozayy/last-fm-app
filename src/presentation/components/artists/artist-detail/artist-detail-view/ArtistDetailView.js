import TopAlbums from "../albums/TopAlbums";
import TopTracks from "../tracks/TopTracks";
import styles from "./ArtistDetailView.module.css";

function ArtistDetailView() {
  return (
    <div className={styles.container}>
      <div className={styles["album-list"]}>
        <TopAlbums />
      </div>
      <div className={styles["track-list"]}>
        <TopTracks />
      </div>
    </div>
  );
}

export default ArtistDetailView;
