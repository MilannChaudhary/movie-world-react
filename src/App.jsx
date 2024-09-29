import { useEffect, useState } from "react";

import "./App.css";
import { Title } from "./components/Title";
import { SearchComponent } from "./components/SearchComponent";
import { ResultComponent } from "./components/ResultComponent";
import { HeroComponent } from "./components/HeroComponent";
import { SavedMoviesComponent } from "./components/SavedMoviesComponent";
import netflix from "./assets/1-0a55fccd.jpg";
import { fetchFromAPI, fetchMultipleMovie } from "./utils/fetchAPI";
import { randomChar } from "./utils/getRandomQuery";

function App() {
  const [resultObj, setResultObj] = useState({});
  const [resultList, setResultList] = useState([]);

  const updateSearchResult = (inputList) => {
    // setResultObj(inputObj);
    setResultList(inputList);
  };

  const [movieList, setMovieList] = useState([]);

  const updateSavedMovieList = (inputObj) => {
    const foundMovie = movieList.find((item) => item.imdbID == inputObj.imdbID);

    if (!foundMovie) {
      const tempMovieList = [...movieList, inputObj];
      setMovieList(tempMovieList);
      localStorage.setItem("movieList", JSON.stringify(tempMovieList));
    }
  };

  const deleteFromSavedMovieList = (imdbID) => {
    let tempMovieList = [...movieList];

    tempMovieList = tempMovieList.filter((item) => item.imdbID != imdbID);

    setMovieList(tempMovieList);
    localStorage.setItem("movieList", JSON.stringify(tempMovieList));
  };

  const fetchMovie = async () => {
    const searchQuery = randomChar();
    const tempMovieObj = await fetchFromAPI(searchQuery);

    const tData = await fetchMultipleMovie("poster");

    updateSearchResult(tData);
  };

  const fetchMoviesFromLocalStorage = () => {
    const tempMovieList = JSON.parse(localStorage.getItem("movieList"));

    setMovieList(tempMovieList);
  };

  useEffect(() => {
    fetchMovie();
    fetchMoviesFromLocalStorage();
  }, []);

  return (
    <>
      <Title />
      <SearchComponent updateSearchResult={updateSearchResult} />
      <ResultComponent movieObj={resultObj} movieList={resultList} updateSavedMovieList={updateSavedMovieList} />
      <HeroComponent moviePoster={resultList[0] ? resultList[0].posterSrc : ""} />
      <SavedMoviesComponent movieList={movieList} deleteFromSavedMovieList={deleteFromSavedMovieList} />
    </>
  );
}

export default App;
