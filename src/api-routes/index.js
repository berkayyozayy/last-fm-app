import config from "config/config";

const apiDataRoutes = {
  albums: (name) => {
    return `${config.albumsUrl}&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&limit=20&format=json`;
  },
  tracks: (name) => {
    return `${config.tracksUrl}&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&limit=20&format=json`;
  },
};

export { apiDataRoutes };
