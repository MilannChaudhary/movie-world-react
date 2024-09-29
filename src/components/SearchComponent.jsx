import axios from "axios";
import React, { useRef, useState } from "react";
import { fetchFromAPI, fetchMultipleMovie } from "../utils/fetchAPI";

export const SearchComponent = (updateSearchResult) => {
  const searchInput = useRef();

  const onSubmitSearch = async (event) => {
    event.preventDefault();
    const searchQuery = searchInput.current.value;
    const tempMovieList = await fetchMultipleMovie(searchQuery);
    updateSearchResult(tempMovieList);
  };

  return (
    <div>
      <div>
        <p>Search Millions of Movies FInd about the move more in details before watching them ...</p>
        <div>
          <form onSubmit={onSubmitSearch}>
            <input
              type="text"
              placeholder="search movie by title"
              name="searchmovie"
              ref={searchInput}
              className="search-input"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};
