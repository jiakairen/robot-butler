import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo2.png";
import "./main.css";

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg="p-3 mb-2 bg-light text-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Products</Nav.Link>
            <div className="subscribe-link">
              <Nav.Link href="#" onClick={() => props.onSubscribe(true)}>
                Subscribe!
              </Nav.Link>
            </div>
            <Nav.Link href="#" onClick={() => props.onDashboard(true)}>
              Dashboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
