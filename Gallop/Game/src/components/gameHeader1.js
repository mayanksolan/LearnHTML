import React from 'react'
import {Row,Container,Navbar,Nav,NavDropdown, Col,Jumbotron,Form,FormControl,Button} from 'react-bootstrap'
import '../styles/gameHeader.css';
import FooterDemo from './footerDemo';
class GameHeader1 extends React.Component {
  render(){
    return(
      /*Header Sectin Start */
<Container fluid>
<Row>
  <Col className="no-padding">
    <Navbar className="header-color" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="align-item">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          
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
export default GameHeader1