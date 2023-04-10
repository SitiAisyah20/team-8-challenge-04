import Button from "react-bootstrap/Button";
import { Container, Row, Col, Form, Navbar } from "react-bootstrap";

function NavScroll() {
  return (
    <Navbar
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        zIndex: 1000,
      }}
      expand="lg"
    >
      <Container>
        <Row className="w-100">
          <Col xs={12} md={4} className="d-flex align-items-center ml-auto">
            <Navbar.Brand href="#" className="text-danger">
              <h2 style={{ fontWeight: "bold" }}>Movielist</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="What do you want to watch?"
                  className="me-2 border-danger"
                  aria-label="Search"
                  style={{ backgroundColor: "transparent", width: "300px" }}
                />
              </Form>
            </Navbar.Collapse>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Button
                variant="outline-danger"
                style={{ borderRadius: "20px", width: "100px" }}
              >
                Login
              </Button>
              <Button
                variant="danger"
                className="ms-2"
                style={{ borderRadius: "20px", width: "100px" }}
              >
                Register
              </Button>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
