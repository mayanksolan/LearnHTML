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
            <h2>Rating: {this.state.movieData.imdbRating}</h2>
            <h5>Votes: {this.state.movieData.imdbVotes}</h5>
          </div>
        </div>
        <div className="image">
          <div className="imageLeft">
            <img src={this.state.movieData.Poster} alt="Movie Image" />
          </div>
          <div className="imageRight">
            <h2>Rating: {this.state.movieData.imdbRating}</h2>
            <h5>Votes: {this.state.movieData.imdbVotes}</h5>
          </div>
        </div>
        <div>{this.state.movieData.Year}</div>
        <div>{this.state.movieData.Rated}</div>
        <div>{this.state.movieData.Released}</div>
      </div>
    );
  }
}
