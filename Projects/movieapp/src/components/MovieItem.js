import React from "react";

export default function MovieItem(props) {
  //console.log(props.movie);
  return (
    <div className="movieItem">
      <h3>{props.movie.Title}</h3>
      <h6>{props.movie.Year}</h6>
      <img src={props.movie.Poster} alt="poster" />
    </div>
  );
}
