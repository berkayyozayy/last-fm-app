import Card from "../ui/card/Card";
import styles from "./ArtistsListView.module.css";
import config from "../../../config/config";
import useHttp from "../../hooks/use-http";

function ArtistListView({ image, label, count, listeners }) {
  const url = `${config.defaultUrl}`;
  const { data, loading, error } = useHttp(url);

  if (error) {
    return <p>Someting went wrong broo</p>;
  }

  if (loading) {
    return <p>Cool down it s coming...</p>;
  }

  const artistList = data?.artists?.artist;

  return (
    <div className={styles["list-view"]}>
      {artistList.map((artist) => {
        return (
          <div key={artist.mbid + artist.name}>
            <Card
              key={artist.mbid}
              image={artist.image[3]["#text"]}
              label={artist.name}
              count={artist.playcount}
              listeners={artist.listeners}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ArtistListView;
