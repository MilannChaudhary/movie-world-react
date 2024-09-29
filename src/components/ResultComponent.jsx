import React from "react";
import { CardComponent } from "./CardComponent";

export const ResultComponent = ({ movieObj, movieList, updateSavedMovieList }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {movieList
        ? movieList.map((movie) => {
            return <CardComponent movieObj={movie} updateSavedMovieList={updateSavedMovieList} cardType="search" />;
          })
        : ""}
    </div>
  );
};
