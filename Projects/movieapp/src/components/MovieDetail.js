import React from "react";
import axios from "axios";
import "./styles/MovieDetail.css";

export default class MovieDetail extends React.Component {
  state = {
    movieData: {}
  };
  movieApiCall() {
    let apikey = "9866420e";
    axios
      .get(
        `http://www.omdbapi.com/?i=${this.props.match.params.imdbId}&apikey=${apikey}`
      )
      .then(res => {
        //console.log(res.data);
        this.setState(
          {
            movieData: res.data
          },
          () => {
            console.log(this.state.movieData);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.movieApiCall();
  }
  render() {
    //console.log(this.state.movieData);
    return (
      <div className="container">
        <div className="head">
          <div className="headLeft">
            <h1>{this.state.movieData.Title}</h1>
          </div>
          <div className="headRight">
            <h2>
              IMDB Rating: <span>{this.state.movieData.imdbRating}</span>
            </h2>
            <h5>
              IMDB Votes: <span>{this.state.movieData.imdbVotes}</span>
            </h5>
          </div>
        </div>
        <div className="image">
          <div className="imageLeft">
            <img src={this.state.movieData.Poster} alt="Movie" />
          </div>
          <div className="imageRight">
            <div className="imageRight1">
              <p>
                Released: <strong>{this.state.movieData.Released}</strong>
              </p>
              <p>
                Rated: <strong>{this.state.movieData.Rated}</strong>
              </p>
              <p>
                Runtime: <strong>{this.state.movieData.Runtime}</strong>
              </p>
              <p>
                Genre: <strong>{this.state.movieData.Genre}</strong>
              </p>
            </div>
            <div className="imageRight2">
              <p>
                Plot: <strong>{this.state.movieData.Plot}</strong>
              </p>
            </div>
            <div className="imageRight3">
              <p>
                Director: <strong>{this.state.movieData.Director}</strong>
              </p>
              <p>
                Actors: <strong>{this.state.movieData.Actors}</strong>
              </p>
            </div>
            <div className="imageRight4">
              <p>
                Awards: <strong>{this.state.movieData.Awards}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
