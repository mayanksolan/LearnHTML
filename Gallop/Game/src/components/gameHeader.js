import React from 'react'
import {Row,Container,Navbar,Nav,NavDropdown, Col,Jumbotron,Form,FormControl,Button} from 'react-bootstrap'
import '../styles/gameHeader.css';
import FooterDemo from './footerDemo';
import axios from "axios"
class GameHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(event){
    const { cookies } = this.props;
    if (cookies === undefined){
      return;
    }

    var session = cookies.get('sessionId')

    if (session !== undefined) {
      const options = {
        headers: {
                    'X-Api-Key': 'c%yti%phgv$^#qr8v#vc+t%gkamq9868*lw#*$u@t#e=8mr_t5',
                    'Content-Type': 'application/json',
                    'sessionId': session
                  }
      };
      axios
          .get(
            'http://localhost:8000/logout/',
            options
        )
          .then(res => {
            cookies.remove('sessionId')
            this.props.authenticate(false)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }

  render(){
    return(
      /*Header Sectin Start */
<Container fluid>
<Row>
  <Col className="no-padding">
    <Navbar className="header-color" expand="lg">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="align-item">
          <Nav.Link href="/innerSection">Home</Nav.Link>
          <Nav.Link href="/bookingGame1">Booking</Nav.Link>
          <Nav.Link href="/scoreCard">ScoreCard</Nav.Link>
          <Nav.Link href="/stats">Stats</Nav.Link>
          <Nav.Link href="/leaderBoard">Leader Board</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="custom-dropdwn">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Col>
</Row>
</Container>

    )
  }
}
export default GameHeader
