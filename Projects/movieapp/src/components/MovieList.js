import React, { Component } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import "./styles/MovieList.css";

class MovieList extends Component {
  state = {
    movieList: [],
    term: "godfather"
  };
  apiCall(term) {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=${apikey}`)
      .then(res => {
        //console.log(res.data.Search);
        this.setState({
          movieList: res.data.Search
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    console.log(this.props);
    this.apiCall(this.state.term);
  }
  componentDidUpdate() {
    //console.log(`prop=${this.props.term}, state=${this.state.term}`);
    if (this.props.term !== "" && this.state.term !== this.props.term) {
      this.setState({ term: this.props.term }, () => {
        //console.log(this.state.term);
        this.apiCall(this.state.term);
      });
    }
  }
  sortByYear = () => {
    console.log(this.state.movieList);
    let newMovieList = this.state.movieList;
    for (let i = 0; i < newMovieList.length; i++) {
      let min = newMovieList[i].Year;
      let minInd = i;
      for (let j = i + 1; j < newMovieList.length; j++) {
        if (newMovieList[j].Year < min) {
          min = newMovieList[j].Year;
          minInd = j;
        }
      }
      if (min !== newMovieList[i].Year) {
        let swap = newMovieList[i];
        newMovieList[i] = newMovieList[minInd];
        newMovieList[minInd] = swap;
      }
    }
    console.log(newMovieList);
    this.setState({
      movieList: newMovieList
    });
  };
  render() {
    if (this.state.movieList) {
      var movies = this.state.movieList.map(movie => {
        return (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            onSubmitButton={this.props.onSubmitButton}
          />
        );
      });
    }
    return (
      <div className="container">
        <button className="sortByYear" onClick={this.sortByYear}>
          Sort By Year
        </button>
        <div className="movieList">{movies}</div>
      </div>
    );
  }
}

export default MovieList;
