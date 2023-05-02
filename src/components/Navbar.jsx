import Button from "react-bootstrap/Button";
import { Container, Row, Col, Form, Navbar, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function NavScroll() {
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    // console.log(e.target.elements.search.value);
    navigate("/search", { state: { query } });
  };

  return (
    <Navbar
      fixed="top"
      style={{
        // position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#222222",
        zIndex: 1000,
      }}
      expand="lg"
    >
      <Container>
        <Row className="w-100">
          <Col xs={12} md={4} className="d-flex align-items-center ml-auto">
            <Navbar.Brand as={Link} to={"/"} className="text-danger">
              <h2 style={{ fontWeight: "bold" }}>Movielist</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex" onSubmit={onSearch}>
                <InputGroup>
                  <Form.Control
                    type="search"
                    name="search"
                    placeholder="What do you want to watch?"
                    className="border-danger"
                    aria-label="Search"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      width: "300px",
                    }}
                  />
                  <Button variant="outline-danger" type="submit">
                    <FaSearch color="#DADADA" />
                  </Button>
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-end">
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Button variant="outline-danger" style={{ borderRadius: "20px", width: "100px" }} as={Link} to={"/login"}>
                Login
              </Button>
              <Button variant="danger" className="ms-2" style={{ borderRadius: "20px", width: "100px" }} as={Link} to={"/register"}>
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
