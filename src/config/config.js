const urls = {
  defaultUrl: `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
  albumsUrl: `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums`,
  tracksUrl: `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist`,
};

export default urls;
