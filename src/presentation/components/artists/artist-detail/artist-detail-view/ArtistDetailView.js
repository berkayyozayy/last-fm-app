import React, { useContext } from "react";
import { ThemeContext } from "../../../../../App";
import TopAlbums from "../albums/TopAlbums";
import TopTracks from "../tracks/TopTracks";
import styles from "./ArtistDetailView.module.css";

function ArtistDetailView() {
  const theme = useContext(ThemeContext);
  console.log("theme from detail", theme);
  return (
    <div className={styles.container} style={theme}>
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
