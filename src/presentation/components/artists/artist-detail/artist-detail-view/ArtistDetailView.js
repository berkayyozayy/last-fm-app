import ListView from "../../../ui/list-view/ListView";
import TopAlbums from "../albums/TopAlbums";
import styles from "./ArtistDetailView.module.css";

function ArtistDetailView() {
  return (
    <div className={styles.container}>
      <div className={styles["album-list"]}>
        <TopAlbums />
      </div>
    </div>
  );
}

export default ArtistDetailView;
