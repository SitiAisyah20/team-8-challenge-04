import React, { useState } from "react";
import "../styles/register.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passowordShown, setPasswordShown] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        name,
        email,
        password,
      });

      let config = {
        method: "post",
        url: `https://km4-challenge-5-api.up.railway.app/api/v1/auth/register`,
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

  const togglePassword = () => {
    setPasswordShown(!passowordShown);
  };

  return (
    <>
      <div className="register">
        <Container className="my-3">
          <Navbar.Brand as={Link} to={"/"} className="text-danger">
            <h2 style={{ fontWeight: "bold" }}>Movielist</h2>
          </Navbar.Brand>
        </Container>

        <div className="signup-form">
          <form onSubmit={onSubmit}>
            <h1 className="text-white">Sign Up</h1>
            <input type="text" placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
            <div className="text-or mt-2">
              <h6 className=" text-muted ">
                <span>or</span>
              </h6>
            </div>
          </form>
          <GoogleLogin buttonText="Sign Up With Google" />
          <h6 className="text-white mt-4">
            Already have an account?{" "}
            <span className="sign-link">
              <Link to={"/login"} style={{ color: "white", textDecoration: "none" }}>
                Sign In here
              </Link>
            </span>
          </h6>
        </div>

        {/* <div className="formCard">
          <h2 className="text-white text-center mb-5">Sign Up</h2>
          <Form onSubmit={onSubmit}>
            <FloatingLabel label="Enter Name" controlId="floatingInput" className="mb-3">
              <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel label="Enter Email" className="mb-3">
              <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel label="Enter Password" className="inputPass">
              <Form.Control type={passowordShown ? "text" : "password"} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="text-white" onClick={togglePassword}>
                show
              </span>
            </FloatingLabel>
            <h6 className="text-warning mt-1">
              <b>Password must be contain Uppercase and Number</b>
            </h6>
            <Row className="mt-3">
              <Col>
                <Button variant="outline-danger " className="ms-2" style={{ borderRadius: "20px", width: "200px" }} type="submit">
                  Sign Up
                </Button>
              </Col>
              <Col>
                <GoogleLogin buttonText="Sign up With Google" />
              </Col>
            </Row>
          </Form>
          <Row>
            <Col>
              <h5 className="text-white text-center mt-5">
                Already have an account?{" "}
                <Link to={"/login"} style={{ color: "white" }}>
                  Sign in Here
                </Link>
              </h5>
            </Col>
          </Row>
        </div> */}
      </div>
    </>
  );
}

export default Register;
