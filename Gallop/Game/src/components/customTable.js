import React from 'react';
import {Row,Grid, Col,Table, Container,Button,Form,FormGroup,ButtonToolbar} from 'react-bootstrap'
import '../styles/customeTable.css';

class CustomTable extends React.Component{
    render(){
        return(
            <div>
              <Container>
                <Row>
                  <Col className={"custome-strip"}>
                  <div className="col-lg-3 tableSearchBtn">
                    <div class="form-group">
                      <input type="text" class="search form-control" placeholder="What you looking for?"/>
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
              
            </div>
        )
    }
}

export default CustomTable;