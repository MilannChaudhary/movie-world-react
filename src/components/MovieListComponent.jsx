import React from "react";
import { CardComponent } from "./CardComponent";

export const MovieListComponent = ({ movieList, movieType, deleteFromSavedMovieList }) => {
  return (
    <div className="movie-list">
      {movieList.map((item) => {
        return <CardComponent movieObj={item} deleteFromSavedMovieList={deleteFromSavedMovieList} />;
      })}
    </div>
  );
};
