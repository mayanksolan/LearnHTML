import React from 'react';
import {Row,Grid, Col,Dropdown, Container,Button,Form,FormGroup,ButtonToolbar} from 'react-bootstrap'
import '../styles/innerHome.css';
import Datetime from 'react-datetime';
import '../styles/react-datetime.css';


class BookingGame1 extends React.Component{
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
                        <Form.Label>Select City</Form.Label>
                        <Form.Control as="select">
                          <option>Choose City</option>
                          <option>one</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={3} className="center-item">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Select Arena</Form.Label>
                        <Form.Control as="select">
                          <option>Choose Arena</option>
                          <option>one</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={3} className="center-item">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Date</Form.Label>
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
                        <Button variant="primary" className="btn-width">Add Player</Button>
                      </ButtonToolbar>
                      </Form.Group>
                  </Col>
                  
                  <Col lg={3} className="rating-item">
                    <Col>
                      <Form.Control placeholder="Search Player to Add" />
                    </Col>
                  </Col>

                  <Col lg={3} className="rating-item">
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                  </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                  <Col lg={6}>
                    <div className="ratingBox">
                      <div className="table-align">
                        <h1>Batting</h1>
                          <ul>
                            <li>Run</li>
                            <li>456</li>
                            <li>Batting Average</li>
                            <li>56</li>
                            <li>Strike Rate</li>
                            <li>59</li>
                            <li>Batting Rating</li>
                            <li>50</li>
                            <li>Batting Rank</li>
                            <li>50</li>
                            <li>Batting Percentile</li>
                            <li>50</li>
                          </ul>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="ratingBox">
                      <div className="table-align">
                        <h1>Bowling</h1>
                          <ul>
                            <li>Run</li>
                            <li>456</li>
                            <li>Batting Average</li>
                            <li>56</li>
                            <li>Strike Rate</li>
                            <li>59</li>
                            <li>Batting Rating</li>
                            <li>50</li>
                            <li>Batting Rank</li>
                            <li>50</li>
                            <li>Batting Percentile</li>
                            <li>50</li>
                          </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
            </Container>
          
        </React.Fragment>
        )
    }
}
export default BookingGame1