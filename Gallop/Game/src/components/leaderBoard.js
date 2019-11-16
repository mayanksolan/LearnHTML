import React from 'react';
import {Row,Grid, Col,Dropdown, Container,Button,Form,Table,ButtonToolbar} from 'react-bootstrap'
import Datetime from 'react-datetime';
import '../styles/customeTable.css';
import '../styles/innerHome.css';
import '../styles/react-datetime.css';


class LeaderBoard extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Container>
                <Row className="body-custom">
                    <Col lg={3} className="center-item">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Choose Game Format</Form.Label>
                        <Form.Control as="select">
                          <option>One</option>
                          <option>one</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={3} className="center-item">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Level</Form.Label>
                        <Form.Control as="select">
                          <option>Hard</option>
                          <option>Medium</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={3} className="center-item">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Choose City</Form.Label>
                        <Form.Control as="select">
                          <option>Hard</option>
                          <option>Medium</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={3} className="center-item">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                          <option>Male</option>
                          <option>Female</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                </Row>
              </Container>
          
              <Container>
                <Row>
                  <Col className={"custome-strip"}>
                    <Table striped bordered hover>
                      <thead className={"customise-table"}>
                        <tr>
                          <th>Pos</th>
                          <th>Player</th>
                          <th>Match</th>
                          <th>Win</th>
                          <th>Tie</th>
                          <th>Draw</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>abc bcd</td>
                            <td>abc bcd</td>
                            <td>abc bcd</td>
                            <td>Gurgaon</td>
                            <td>18-05-19, 12:30</td>
                            <td><a href="#">View</a></td>
                          </tr>
                        </tbody>
                      </Table>
                      <Table striped bordered hover>
                      <thead className={"customise-table"}>
                        <tr>
                          <th>Pos</th>
                          <th>Player</th>
                          <th>Matches</th>
                          <th>Wickets</th>
                          <th>Boweling Average</th>
                          <th>Economy Rate</th>
                          <th>Boweling Rating</th>
                        </tr>
                      </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>abc bcd</td>
                            <td>abc bcd</td>
                            <td>abc bcd</td>
                            <td>Gurgaon</td>
                            <td>18-05-19, 12:30</td>
                            <td><a href="#">View</a></td>
                          </tr>
                        </tbody>
                      </Table> 
                      <Table striped bordered hover>
                      <thead className={"customise-table"}>
                        <tr>
                          <th>Pos</th>
                          <th>Player</th>
                          <th>Matches</th>
                          <th>Runs</th>
                          <th>Batting Average</th>
                          <th>Strike Rate</th>
                          <th>Batting Rating</th>
                        </tr>
                      </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>abc bcd</td>
                            <td>abc bcd</td>
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
export default LeaderBoard