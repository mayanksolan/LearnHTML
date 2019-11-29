import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleChange = e => {
    this.setState(
      {
        searchText: e.target.value
      },
      () => console.log(this.state)
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
            />
          </form>
        </div>
      </div>
    );
  }
}
