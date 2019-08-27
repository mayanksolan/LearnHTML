import React, { Component } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  state = {
    movieList: []
  };
  componentDidMount() {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?s=lord&apikey=${apikey}`)
      .then(res => {
        console.log(res.data.Search, this.props.movieList);
        if (this.props.movieList.length === 0) {
          this.setState({
            movieList: res.data.Search
          });
        } else {
          this.setState({
            movieList: this.props.movieList
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const movies = this.state.movieList.map(movie => {
      return <MovieItem key={movie.imdbID} movie={movie} />;
    });
    return (
      <div className="container">
        <div className="movieList">{movies}</div>
      </div>
    );
  }
}

export default MovieList;
