// #ffc000
import React from 'react'
import {Row,Grid, Col,Dropdown, Container,Button,Jumbotron} from 'react-bootstrap'
// import '../styles/innerHome.css';
import '../styles/innerSection.css';
import Form from 'react-bootstrap/FormGroup';
import axios from "axios"


class InnerSection extends React.Component{
  componentDidMount() {
    var object = {};
    const { cookies } = this.props;
    console.log('Inner home Mount')
  }


    render(){
        return(
            <React.Fragment>
                <Container>
                  <Row className="body-custom">
                    <Col lg={4} className="center-item">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          CHoose Game Formate
                        </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Single Formate</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Double Formate</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Multiple Formate</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col lg={4} className="center-item">
                        <span>Matches Played: 45</span>
                      </Col>
                      <Col lg={4} className="center-item">
                        <span>Win/Loss: 20/23</span>
                      </Col>
                      <Col lg={4} className="center-item">

                      </Col>
                  </Row>
                </Container>

                <Container>
                  <Row className="body-custom">
                    <Col lg={3} className="rating-item">
                       <p>Current Rating: 84</p>
                    </Col>

                    <Col lg={3} className="rating-item">
                      <p>Current Rating: 84</p>
                    </Col>
                     <Col lg={3} className="rating-item">
                      <p>Current Rating: 84</p>
                     </Col>
                     <Col lg={3} className="rating-item">
                      <p>Current Rating: 84</p>
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
export default InnerSection;
