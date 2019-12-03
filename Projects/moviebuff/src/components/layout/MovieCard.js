import React, { Component } from "react";

class MovieCard extends Component {
  onClickHandler = e => {
    console.log(e.target.value);
  };
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
        <div className="card-front">
          <img src={movieUrl} alt="Avatar" className="imageProp" />
        </div>
        <div className="card-back">
          <div className="card-back-inside">
            <h4>
              Movie Name: <b>{this.props.movie.title}</b>
            </h4>
            <div className="card-details">
              <div>
                <h4>Rating: {this.props.movie.vote_average}</h4>
                <h4>Released: {this.props.movie.release_date}</h4>
              </div>
              <p className="card-overview">
                Overview: {this.props.movie.overview.substring(0, 50)}
              </p>
              <button
                onClick={this.onClickHandler}
                style={{ textDecoration: "underline" }}
              >
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
