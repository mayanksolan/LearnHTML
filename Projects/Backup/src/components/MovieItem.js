import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  const { movie, onSubmitButton } = props;
  //console.log(movie);
  return (
    <div className="movieItem" onClick={() => onSubmitButton(movie.imdbID)}>
      <Link className="link" to={`/movie/${movie.imdbID}`}>
        <h3 className="movieTitle">{movie.Title}</h3>
        <h5 className="movieYear">Year of Release: {movie.Year}</h5>
        <img className="movieImage" src={movie.Poster} alt="poster" />
      </Link>
    </div>
  );
}
