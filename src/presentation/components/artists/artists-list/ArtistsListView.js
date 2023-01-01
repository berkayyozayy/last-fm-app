import React from "react";
import { Link } from "react-router-dom";
import Card from "../../ui/card/Card";
import styles from "./ArtistsListView.module.css";
import config from "../../../../config/config";
import useHttp from "../../../hooks/use-http";
import Error from "../../common/error/Error";
import Loading from "../../common/loading/Loading";

function ArtistListView() {
  const url = `${config.defaultUrl}`;
  const { data, loading, error } = useHttp(url);
  const title = "Artist";

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const artistList = data?.artists?.artist;

  return (
    <div className={styles["list-view"]}>
      {artistList.map((artist) => {
        return (
          <div key={artist.mbid + artist.name}>
            <Link
              to={`/artist/${artist.mbid}?name=${artist.name}`}
              className={styles["link"]}
            >
              <Card
                key={artist.mbid}
                title={title}
                image={artist.image[4]["#text"]}
                label={artist.name}
                count={artist.playcount}
                listeners={artist.listeners}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ArtistListView;
