import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <span className="type">Movie: </span>
              {this.props.movie.title}
            </h4>
            <div className="card-details">
              <div className="card-ratrel">
                <p>
                  <span className="type">Rating: </span>
                  {this.props.movie.vote_average}
                </p>
                <p>
                  <span className="type">Released: </span>
                  {this.props.movie.release_date}
                </p>
              </div>
              <div className="card-ratrel">
                <span className="type">Overview: </span>
                <span className="card-overview-text">
                  {this.props.movie.overview.substring(0, 100)}
                </span>
              </div>
              <Link onClick={this.onClickHandler} className="card-link">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
