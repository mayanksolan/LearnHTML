import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class CountryCard extends React.Component {
  render() {
    const { name, capital, flag, population } = this.props.country;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={flag} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Capital City: {capital}</Card.Text>
            <Card.Text>Population: {population}</Card.Text>
            <Link
              to={`/country/${name}`}
              params={{ country: this.props.country }}
              className="btn btn-dark btn-sm my-1"
            >
              More Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CountryCard;
