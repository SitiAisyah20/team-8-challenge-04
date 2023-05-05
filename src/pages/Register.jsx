import React, { useState } from "react";
import "../styles/register.css";
import { Navbar, Container, FloatingLabel, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passowordShown, setPasswordShown] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

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

  // const togglePassword = () => {
  //   setPasswordShown(!passowordShown);
  // };

  return (
    <>
      <div className="register">
        <Container className="my-3">
          <Navbar.Brand as={Link} to={"/"} className="text-danger">
            <h2 style={{ fontWeight: "bold" }}>Movielist</h2>
          </Navbar.Brand>
        </Container>

        <div className="signup-form">
          <Form onSubmit={onSubmit}>
            <h1 className="text-white">Sign Up</h1>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} style={{ height: "50px", backgroundColor: "#dfdfdf" }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ height: "50px", backgroundColor: "#dfdfdf" }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ height: "50px", backgroundColor: "#dfdfdf" }} />
            </FloatingLabel>
            <FloatingLabel label="Confirm Password" className="mb-1">
              <Form.Control type="password" placeholder="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ height: "50px", backgroundColor: "#dfdfdf" }} />
            </FloatingLabel>
            <p className="text-warning ms-2">{confirmPassword !== password ? "Password didn't match!" : null}</p>

            <button type="submit">Sign Up</button>
          </Form>
          <div className="text-or mt-2">
            <h6 className=" text-muted ">
              <span>or</span>
            </h6>
          </div>

          <GoogleLogin buttonText="Sign Up With Google" />
          <h6 className="text-white mt-4">
            Already have an account?{" "}
            <span className="sign-link">
              <Link to={"/login"} style={{ color: "white", textDecoration: "none" }}>
                <b>Sign In here</b>
              </Link>
            </span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Register;
