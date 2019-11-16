import React from 'react'
import {Row,Grid, Col,Dropdown, Container,Button,Form,Table,ButtonToolbar} from 'react-bootstrap'
import Datetime from 'react-datetime';
import '../styles/customeTable.css';
import '../styles/innerHome.css';
import '../styles/react-datetime.css';
import FooterDemo from './footerDemo';


class ScoreCard extends React.Component{
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
                    <Button variant="primary" className="btn-width">Match Involving Player</Button>
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
            <Col className={"custome-strip"}>
                  <div className="col-lg-3 tableSearchBtn">
                    <div class="form-group">
                      <input type="text" class="search form-control" placeholder="Search Matches?"/>
                    </div>
                  </div>
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
            </Row>
        </Container>
    </React.Fragment>
        )
    }
}
export default ScoreCard;