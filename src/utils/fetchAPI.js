import axios from "axios";

export const fetchFromAPI = async (searchQuery) => {
  const response = await axios.get(
    `${import.meta.env.VITE_OMDB_URL}?apikey=${import.meta.env.VITE_API_KEY}&t=${searchQuery}`
  );

  const data = { ...response.data };

  const tempMovieObj = {
    title: data.Title,
    imdbRating: data.imdbRating,
    plot: data.Plot,
    posterSrc: data.Poster,
    imdbID: data.imdbID,
  };

  return tempMovieObj;
};

export const fetchMultipleMovie = async (searchQuery) => {
  const response = await axios.get(
    `${import.meta.env.VITE_OMDB_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${searchQuery}`
  );

  const tempMovieList = [];
  const searchResponse = [...response.data.Search];

  for (let i = 0; i < searchResponse.length; i++) {
    const imdbResponse = await axios.get(
      `${import.meta.env.VITE_OMDB_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${searchResponse[i].imdbID}`
    );

    tempMovieList.push({
      title: imdbResponse.data.Title,
      imdbRating: imdbResponse.data.imdbRating,
      plot: imdbResponse.data.Plot,
      posterSrc: imdbResponse.data.Poster,
      imdbID: imdbResponse.data.imdbID,
    });
  }

  return tempMovieList;
};
