import React from 'react'
import {Row,Grid, Col,Dropdown, Container,Button,Form} from 'react-bootstrap'
import '../styles/innerHome.css';
import axios from "axios"

class InnerHome extends React.Component{

  constructor() {

  }

  componentDidMount() {
    var object = {};
    const { cookies } = this.props;
    console.log('Inner home Mount')
    console.log(cookies.get('sessionId'))
    object['sessionId'] = cookies.get('sessionId');
    var json = JSON.stringify(object);
    const options = {
      headers: {
                  'X-Api-Key': 'c%yti%phgv$^#qr8v#vc+t%gkamq9868*lw#*$u@t#e=8mr_t5',
                  'Content-Type': 'application/json'
                }
    };
    axios
        .get(
          'http://localhost:8000/home/',
          json,
          options
      )
        .then(res => {
          console.log("Response")
          //console.log(res)
          console.log(res.data)
        })
        .catch(function (error) {
          console.log("Error")
          console.log(error);
        });
  }

    render(){
        return(
            <div>
							<Container className={'selectPlayer'}>
								<Row className="commonMargin">
									<Col>
									<div className="selectBtn">
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
									</div>
									</Col>
									<Col>
										<div className="innerItem">
											<span>Match Played: 45</span>
										</div>
									</Col>
									<Col>
										<div className="innerItem">
											<span>Win/Loss: 23/22</span>
										</div>
									</Col>
								</Row>
								<Row className="commonMargin">
									<Col>
										<div className="one">Current Rating: 84
										</div>
									</Col>
									<Col>
										<div className="one">Best Ever Rating: 98
										</div>
									</Col>
									<Col>
										<div className="one">Player Ranking :1023
										</div>
									</Col>
									<Col>
										<div className="one">Player Percentile: 94
										</div>
									</Col>
								</Row>
                <Row className="commonMargin">
                  <Col>
                    <div className="ratingBox">
                      <div className="tableAlign">
                        <h2 className="cardHeading">Block1</h2>
                        <ul>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="ratingBox">
                      <div className="tableAlign">
                        <h2 className="cardHeading">Block2</h2>
                        <ul>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                          <li>Name Text</li>
                          <li>Value : 10</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
							</Container>
            </div>
        )
    }
}
export default InnerHome
