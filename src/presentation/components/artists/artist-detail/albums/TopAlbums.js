import useHttp from "../../../../hooks/use-http";
import { useLocation } from "react-router-dom";
import { apiDataRoutes } from "../../../../../api-routes";
import Error from "../../../common/error/Error";
import Loading from "../../../common/loading/Loading";
import ListView from "../../../ui/list-view/ListView";

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
    <div>
      {albumList.map((album) => {
        return (
          <ListView
            key={album.mbid}
            label={album.name}
            count={album.playcount}
            image={album.image[0]["#text"]}
            listeners={album.listeners}
          />
        );
      })}
    </div>
  );
}

export default TopAlbums;
