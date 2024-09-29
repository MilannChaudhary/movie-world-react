import React from "react";
import netflix from "./../assets/1-0a55fccd.jpg";

export const CardComponent = ({ movieObj, updateSavedMovieList, deleteFromSavedMovieList, cardType }) => {
  const handleSaveMovie = (movieType) => {
    const tempMovieObj = { ...movieObj, type: movieType };
    updateSavedMovieList(tempMovieObj);
  };
  return (
    <div>
      <div>
        <img src={movieObj.PosterSrc} alt="" width="100px" />
      </div>
      <div>Title : {movieObj.title}</div>
      <div>IMDB : {movieObj.imdbRating}</div>
      <div>Plot : {movieObj.plot?.slice(0, 50)}...</div>
      {cardType === "search" ? (
        <div>
          <button
            onClick={() => {
              handleSaveMovie("Drama");
            }}
          >
            DRAMA
          </button>
          <button
            onClick={() => {
              handleSaveMovie("Action");
            }}
          >
            ACTION
          </button>
        </div>
      ) : (
        <div className="movie-type">{movieObj.type}</div>
      )}

      <div>
        {cardType !== "search" ? (
          <button
            onClick={() => {
              deleteFromSavedMovieList(movieObj.imdbID);
            }}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
