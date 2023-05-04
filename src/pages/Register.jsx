import React, { useState } from "react";
import "../styles/register.css";
import { Navbar, Container, FloatingLabel } from "react-bootstrap";
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
            <div className="float-label">
              <input type="text" placeholder="" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="name">Name </label>
            </div>
            <div className="float-label">
              <input type="email" placeholder="" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="float-label">
              <input type="password" placeholder="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="password">Password</label>
            </div>
            {/* <div className="float-label">
              <input type="password" placeholder="" id="conpass" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="conpass">Confirm Password</label>
            </div> */}

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
      </div>
    </>
  );
}

export default Register;
