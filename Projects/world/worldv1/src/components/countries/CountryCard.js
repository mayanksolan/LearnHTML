import React from "react";
import { Card, Button } from "react-bootstrap";

class CountryCard extends React.Component {
  render() {
    const { name, capital, flag } = this.props.country;
    return (
      <div style={{ gridRowEnd: `span 2` }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={flag} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Capital City: {capital}</Card.Text>
            <Button variant="primary">More Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CountryCard;
