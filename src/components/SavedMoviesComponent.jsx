import React, { useState } from "react";
import { SwitchComponent } from "./SwitchComponent";
import { MovieListComponent } from "./MovieListComponent";

export const SavedMoviesComponent = ({ movieList = [], deleteFromSavedMovieList }) => {
  const [movieType, setMovieType] = useState("All");

  const filteredMovieList = movieList.filter((item) => {
    return movieType === "All" || item.type === movieType;
  });

  return (
    <div className="saved-movies">
      SAVED MOVIES
      <SwitchComponent setMovieType={setMovieType} movieNumber={filteredMovieList.length} />
      <MovieListComponent
        movieList={filteredMovieList}
        movieType={movieType}
        deleteFromSavedMovieList={deleteFromSavedMovieList}
      />
    </div>
  );
};
