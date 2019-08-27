import React from "react";

export default function MovieItem(props) {
  //console.log(props.movie);
  return (
    <div className="movieItem">
      <h3 className="movieTitle">{props.movie.Title}</h3>
      <h5 className="movieYear">Year of Release: {props.movie.Year}</h5>
      <img className="movieImage" src={props.movie.Poster} alt="poster" />
      <button className="movieButton">Click for more details</button>
    </div>
  );
}
