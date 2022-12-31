import { Link } from "react-router-dom";
import Card from "../../ui/card/Card";
import styles from "./ArtistsListView.module.css";
import config from "../../../../config/config";
import useHttp from "../../../hooks/use-http";
import Error from "../../common/error/Error";
import Loading from "../../common/loading/Loading";
import ArtistDetailView from "../artist-detail/artist-detail-view/ArtistDetailView";

function ArtistListView({ image, label, count, listeners }) {
  const url = `${config.defaultUrl}`;
  const { data, loading, error } = useHttp(url);

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
                image={artist.image[3]["#text"]}
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
