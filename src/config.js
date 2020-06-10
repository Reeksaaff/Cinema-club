// https://developers.themoviedb.org/

const ApiUrl = 'https://api.themoviedb.org/3/';
const ApiKey = 'eb9b5afb1a8821c5c1054ff50503c293';
const BaseImageUrl = 'http://image.tmdb.org/t/p/';
const SearchingBaseUrl = `${ApiUrl}search/movie?api_key=${ApiKey}&query=`;
const DefaultUrl = `${ApiUrl}movie/popular?api_key=${ApiKey}`;
const BackdropSize = 'w1280';
const PosterSize = 'w500';

export { DefaultUrl, SearchingBaseUrl, ApiUrl, ApiKey, BaseImageUrl, BackdropSize, PosterSize };
