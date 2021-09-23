import React from 'react';
import { Navbar,Container,NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
  <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Brand  href="#home"><h1>Mechon</h1></Navbar.Brand>
    <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Area"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    <Navbar.Collapse id="navbar-dark-example">
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
