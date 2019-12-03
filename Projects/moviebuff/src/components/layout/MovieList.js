import React, { Component } from "react";
import { fetchData } from "../../actions";
import { connect } from "react-redux";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchData();
    // console.log(this.props.topRated);
  }
  render() {
    //console.log(this.props.topRated[0]);
    if (!this.props.topRated) {
      return <div>Loading...</div>;
    } else {
      return <div>{this.props.topRated.map(movie => movie.title)}</div>;
    }
  }
}

const mapStateToProps = state => {
  //   console.log(state.fetchData.topRated);
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
