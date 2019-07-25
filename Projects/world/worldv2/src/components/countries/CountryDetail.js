import React from "react";
import axios from "axios";

class CountryDetail extends React.Component {
  state = {
    country: []
  };
  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${
          this.props.match.params.name
        }?fullText=true`
      )
      .then(response => {
        this.setState({
          country: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.props.match.params, this.state);
    //const { name, population } = this.props.country;
    return (
      <div>
        <h1>Hello</h1>
        <h3>There</h3>
      </div>
    );
  }
}

export default CountryDetail;
