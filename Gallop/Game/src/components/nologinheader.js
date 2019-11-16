import React from 'react'
import {Row,Container,Navbar,Nav,NavDropdown, Col,Jumbotron,Form,FormControl,Button} from 'react-bootstrap'
import '../styles/gameHeader.css';
import FooterDemo from './footerDemo';
class NoLoginHeader extends React.Component {
  render(){
    return(
      <Container fluid>
      <Row>
        <Col className="no-padding">
          <Navbar className="header-color" expand="lg">
            <Navbar.Brand href="#home">Gully Cricket</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          </Navbar>
        </Col>
      </Row>
      </Container>
    )
  }
}
export default NoLoginHeader
