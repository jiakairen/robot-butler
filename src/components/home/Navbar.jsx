import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo2.png";

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg="p-3 mb-2 bg-light text-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <button onClick={() => props.onSubscribe(true)}>Subscribe!</button>
            <button onClick={() => props.onDashboard(true)}>Dashboard</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
