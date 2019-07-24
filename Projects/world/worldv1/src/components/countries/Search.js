import React from "react";
import { Form } from "react-bootstrap";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasic">
            <Form.Control
              type="text"
              placeholder="Enter country to be searched"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Search;
