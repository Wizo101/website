import './header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">WideScope</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="advertisement">Contact Us</Nav.Link>
            <NavDropdown title="Inquire Now" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
              <NavDropdown.Item href="/price-estimator">Price Estimator</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div style={{ marginTop: '56px' }}>
    </div>
  </div>
  )
}

export default header
