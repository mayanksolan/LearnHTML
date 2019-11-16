import React from 'react';
import {Row,Grid, Col,Dropdown, Container,Button,Form,FormGroup,ButtonToolbar} from 'react-bootstrap'
import Datetime from 'react-datetime';
import '../styles/innerHome.css';
import '../styles/react-datetime.css';

class BookingGame extends React.Component{
    render(){
        return(
            <div>
							<Container fluid>
                <div className={'selectPlayer'}>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Row>
                          <Col lg={3}>
                            <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>State</Form.Label>
                              <Form.Control as="select">
                                <option>Choose...</option>
                                <option>one</option>
                              </Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={3}>
                            <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>State</Form.Label>
                              <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Two</option>
                              </Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={3}>
                            <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>State</Form.Label>
                              <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Three</option>
                              </Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={3}>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Select Date</Form.Label>
                            {/*<input name="dateTime"
                              className="form-control" placeholder="Time" type="datetime-local" onChange={this.handleChange}/>*/}
                              <Datetime />
                          </Form.Group>
                          </Col>
                        </Form.Row>
                      </Form>
                      <Container>
                        <Row className="customMargin">
                          <Col sm={2} md={2} sm={6} xs={12} className="addBtn">
                            <ButtonToolbar>
                              <Button variant="primary">Add Player</Button>
                              </ButtonToolbar>
                          </Col>
                          <Col lg={5} className="searchBtn">
                            <Form>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Search to add" />
                              </Form.Group>
                            </Form>
                          </Col>
                          <Col lg={5}>
                            <Form>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>
                            </Form>
                          </Col>
                          <Col lg={12} className="paymentBtn">
                            <ButtonToolbar>
                              <Button variant="primary">Make Payment</Button>
                            </ButtonToolbar>
                          </Col>
                        </Row>
                    </Container>
                      </Col>
                    </Row>
                </div>
                </Container>
            </div>
        )
    }
}
export default BookingGame