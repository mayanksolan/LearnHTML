import React, { Component } from "react";
import { fetchInitialData } from "../../actions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }
  render() {
    if (!this.props.topRated) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="movieListGrid">
          {this.props.topRated.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    topRated: state.fetchData.topRated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialData: name => {
      dispatch(fetchInitialData(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
