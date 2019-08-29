import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  handleChange = e => {
    //console.log(e.target.value);
    this.setState({ term: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.runMeOnSubmit(this.state.term);
  };
  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name="Search Movie"
            id="searchText"
            placeholder="Type Movie Name"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
