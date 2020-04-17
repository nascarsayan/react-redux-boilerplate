import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Vidhan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Browse</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
