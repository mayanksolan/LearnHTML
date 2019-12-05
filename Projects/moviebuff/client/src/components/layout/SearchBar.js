import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchText, setSearchMovieResults } from "../../actions";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      movieResult: []
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState(
      {
        searchText: e.target.value
      }
      //,() => console.log(this.state)
    );
  };
  formSubmit = e => {
    e.preventDefault();
    console.log(this.state.searchText);
    this.props.setSearchText(this.state.searchText);
    this.fetchMovieData();
  };

  fetchMovieData = () => {
    const api_key = "71e765571755f062e48dd627663cb94b";
    const query = this.state.searchText;
    const baseUrl = "https://api.themoviedb.org/3/search/movie";
    const url = `${baseUrl}?api_key=${api_key}&query=${query}`;
    axios.get(url).then(response =>
      this.setState({ movieResult: response.data.results }, () => {
        console.log(this.state);
        this.props.setSearchMovieResults(this.state.movieResult);
      })
    );
  };

  render() {
    return (
      <div className="search">
        <div className="title">Search for a movie or show</div>
        <div>
          <form onSubmit={this.formSubmit}>
            <input
              type="text"
              name="searchMovie"
              id="searchText"
              placeholder="Type any Movie or show"
              onChange={this.handleChange}
              value={this.state.searchText}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText,
    topRated: state.fetchData.topRated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: searchText => {
      dispatch(setSearchText(searchText));
    },
    setSearchMovieResults: searchData => {
      dispatch(setSearchMovieResults(searchData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
