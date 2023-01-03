import React from "react";
import { useLocation } from "react-router-dom";

import TopAlbums from "presentation/components/artists/artist-detail/albums/TopAlbums";
import TopTracks from "presentation/components/artists/artist-detail/tracks/TopTracks";
import styles from "./ArtistDetailView.module.css";

function ArtistDetailView() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");

  return (
    <>
      <h1 className={styles.title}>{name} 's Best Tracks & Albums</h1>
      <div className={styles.container}>
        <div className={styles["album-list"]}>
          <TopAlbums />
        </div>
        <div className={styles["track-list"]}>
          <TopTracks />
        </div>
      </div>
    </>
  );
}

export default ArtistDetailView;
