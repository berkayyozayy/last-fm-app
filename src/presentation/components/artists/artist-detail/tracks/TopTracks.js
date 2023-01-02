import { useLocation } from "react-router-dom";
import styles from "./TopTracks.module.css";
import { apiDataRoutes } from "../../../../../api-routes";
import useHttp from "../../../../hooks/use-http";
import Error from "../../../common/error/Error";
import Loading from "../../../common/loading/Loading";
import ListView from "../../../ui/list-view/ListView";

function TopTracks() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const tracksUrl = apiDataRoutes.tracks(name);

  const { data, error, loading } = useHttp(tracksUrl);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const trackList = data?.toptracks?.track;

  return (
    <div className={styles["tracks-wrapper"]}>
      {trackList.map((track) => {
        return (
          <ListView
            key={track.mbid + track.name}
            name={track.artist.name}
            label={track.name}
            count={track.playcount}
            image={track.image[2]["#text"]}
            showListeners={true}
            listeners={track.listeners}
          />
        );
      })}
    </div>
  );
}

export default TopTracks;
