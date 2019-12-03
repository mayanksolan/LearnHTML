import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    console.log(this.props.movie);
    // const [
    //   //   popularity,
    //   //   vote_count,
    //   poster_path,
    //   //   id,
    //   //   original_language,
    //   title,
    //   vote_average
    //   //   overview,
    //   //   release_date
    // ] = this.props.movie;
    const movieUrl =
      "https://image.tmdb.org/t/p/original/" + this.props.movie.poster_path;
    return (
      <div className="card">
        <div className="container">
          <img src={movieUrl} alt="Avatar" className="imageProp" />
        </div>
        <h4>
          <b>{this.props.movie.title}</b>
        </h4>
        <p>{this.props.movie.vote_average}</p>
      </div>
    );
  }
}

export default MovieCard;
