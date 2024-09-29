import React from "react";

export const SwitchComponent = ({ setMovieType, movieNumber = 0 }) => {
  return (
    <div>
      <button
        onClick={() => {
          setMovieType("All");
        }}
      >
        ALL
      </button>
      <button
        onClick={() => {
          setMovieType("Drama");
        }}
      >
        Drama
      </button>
      <button
        onClick={() => {
          setMovieType("Action");
        }}
      >
        Action
      </button>
      <div> {movieNumber} is listed</div>
    </div>
  );
};
