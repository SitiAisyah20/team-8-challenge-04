import React, { useState } from "react";
import "../styles/login.css";
import { Form, Container, Row, Col, Navbar } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import GoogleLogin from "../components/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <div className="login">
      <Container className="my-3">
        <Navbar.Brand as={Link} to={"/"} className="text-danger">
          <h2 style={{ fontWeight: "bold" }}>Movielist</h2>
        </Navbar.Brand>
        <Row>
          <Col className="signin-form">
            <Form onSubmit={onSubmit}>
              <h1 className="text-white">Sign In</h1>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="floating-label mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="floating-label mb-3"
              >
                <Form.Control
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // style={{ color: "#868485", height: "50px" }}
                />
                <span
                  className="position-absolute translate-middle-y"
                  style={{
                    height: "100%",
                    border: "none",
                    color: "#1b1a1a",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    right: "10px",
                    top: "46px",
                  }}
                  onClick={() => setVisible((visible) => !visible)}
                >
                  {visible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </FloatingLabel>
              <button type="submit">Sign In</button>

              <Row className="text-or mt-2">
                <Col>
                  <h6 className="text-muted">
                    <span>or</span>
                  </h6>
                </Col>
              </Row>
            </Form>
            <GoogleLogin buttonText="Sign In with Google" />

            <h6 className="text-white mt-4">
              Don't have an account?{" "}
              <span className="sign-link">
                <Link
                  to={"/register"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <b>Sign up here</b>
                </Link>
              </span>
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
