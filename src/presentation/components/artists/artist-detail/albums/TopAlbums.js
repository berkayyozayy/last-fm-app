import useHttp from "presentation/hooks/use-http";
import { useLocation } from "react-router-dom";
import { apiDataRoutes } from "api-routes";
import Error from "presentation/components/common/error/Error";
import Loading from "presentation/components/common/loading/Loading";
import ListView from "presentation/components/ui/list-view/ListView";
import styles from "./TopAlbums.module.css";

function TopAlbums() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const albumsUrl = apiDataRoutes.albums(name);

  const { data, loading, error } = useHttp(albumsUrl);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const albumList = data?.topalbums?.album;

  return (
    <div className={styles["albums-wrapper"]}>
      {albumList.map((album) => {
        return (
          <ListView
            key={album.mbid + album.name}
            name={album.artist.name}
            label={album.name}
            count={album.playcount}
            image={album.image[2]["#text"]}
            listeners={album.listeners}
          />
        );
      })}
    </div>
  );
}

export default TopAlbums;
