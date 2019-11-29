import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <div className="title">Search for a movie or show</div>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Type any Movie or show" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
