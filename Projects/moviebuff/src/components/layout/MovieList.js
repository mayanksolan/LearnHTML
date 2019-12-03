import React, { Component } from "react";
import { fetchData } from "../../actions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchData();
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
    fetchData: name => {
      dispatch(fetchData(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
