import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex align-items-center">
      <Container>
        <Navbar.Brand className="d-flex">
          <h3>BS</h3>
          <Nav.Link href="/">
            {" "}
            - <span className="text-success">Billing</span>
            <span className="text-warning">Suite</span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/r">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
