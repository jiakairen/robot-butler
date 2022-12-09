import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo2.png'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="p-3 mb-2 bg-light text-dark">
        <Container>
          <Navbar.Brand href="#home" ><img src={logo} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      
    </>
  );
}

export default ColorSchemesExample;