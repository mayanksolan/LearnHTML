import React from 'react';
import {Row,Grid, Col,Table, Container,Button,Form,ButtonToolbar} from 'react-bootstrap'
import Datetime from 'react-datetime';
import '../styles/innerHome.css';
import '../styles/react-datetime.css';
import CustomTable from './customTable';
export default class Stats extends React.Component{
    render(){
        return(
          <React.Fragment>
          <Container>
            <Row className="body-custom">
                <Col lg={3} className="center-item">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select Game</Form.Label>
                    <Form.Control as="select">
                      <option>Choose Game Format</option>
                      <option>one</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={3} className="center-item">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select Stats Arena</Form.Label>
                    <Form.Control as="select">
                      <option>Choose Stats Arena</option>
                      <option>one</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={3} className="center-item">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>From Date</Form.Label>
                    {/*<input name="dateTime"
                      className="form-control" placeholder="Time" type="datetime-local" onChange={this.handleChange}/>*/}
                      <Datetime />
                    </Form.Group>
                </Col>
                <Col lg={3} className="center-item">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>To Date</Form.Label>
                    {/*<input name="dateTime"
                      className="form-control" placeholder="Time" type="datetime-local" onChange={this.handleChange}/>*/}
                      <Datetime />
                  </Form.Group>
                </Col>
            </Row>
          </Container>
      
          <Container>
            <Row className="body-custom">
              <Col lg={3} className="rating-item">
                <Form.Group as={Col} controlId="formGridState">
                  <ButtonToolbar>
                    <Button variant="primary" className="btn-width">Team Having Player</Button>
                  </ButtonToolbar>
                  </Form.Group>
              </Col>

              <Col lg={3} className="rating-item">
                <Col>
                  <Form.Control placeholder="Logged In" />
                </Col>
              </Col>
              <Col lg={3} className="center-item">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select">
                    <option>Opposition Player</option>
                    <option>one</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={3} className="rating-item">
                <Col>
                  <Form.Control placeholder="Search Opposition Player" />
                </Col>
              </Col>
            </Row>
        </Container>
        <Container>
          <Row className="body-custom">
            <Col lg={6} className="rating-item">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Batting or Feilding First DropDown</Form.Label>
                  <Form.Control as="select">
                    <option>Batting</option>
                    <option>Feilding</option>
                  </Form.Control>
              </Form.Group>
            </Col>
            </Row>
        </Container>
        <Container>
          <Row>
          <Col lg={12}>
              <Col className={"custome-strip"}>
                <Table striped bordered hover>
                    <thead className={"customise-table"}>
                      <tr>
                        <th>ID</th>
                        <th>Terms</th>
                        <th>City</th>
                        <th>Date and Time</th>
                        <th>Scorecard</th>
                      </tr>
                    </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>abc bcd</td>
                          <td>Gurgaon</td>
                          <td>18-05-19, 12:30</td>
                          <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>abc bcd</td>
                          <td>Gurgaon</td>
                          <td>18-05-19, 12:30</td>
                          <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>abc bcd</td>
                          <td>Gurgaon</td>
                          <td>18-05-19, 12:30</td>
                          <td><a href="#">View</a></td>
                        </tr>
                      </tbody>
                </Table> 
              </Col>
            </Col>
          </Row>
        </Container>
      
    </React.Fragment>
        )
    }
}