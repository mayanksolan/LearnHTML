import React from "react";
import { Form } from "react-bootstrap";

class Search extends React.Component {
  state = { term: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.runMeOnSubmit(this.state.term);
  };
  onChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <Form onChange={this.onSubmit}>
          <Form.Group controlId="formBasic">
            <Form.Control
              type="text"
              value={this.state.term}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Search;
