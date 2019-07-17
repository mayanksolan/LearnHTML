import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; //define what we entered in the input

  onFormSubmit = event => {
    event.preventDefault();
    this.props.runMeOnSubmit(this.state.term);
  };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
