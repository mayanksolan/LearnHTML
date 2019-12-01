import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchText } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState(
      {
        searchText: e.target.value
      },
      () => console.log(this.state)
    );
  };
  formSubmit = e => {
    e.preventDefault();
    console.log(this.state.searchText);
    this.props.setSearchText(this.state.searchText);
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
    searchText: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: searchText => {
      dispatch(setSearchText(searchText));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
