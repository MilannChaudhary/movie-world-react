import React from "react";

export const HeroComponent = ({ moviePoster }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(" + moviePoster + ")",
      }}
    >
      Hero
    </div>
  );
};
