import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";
import "../src/styles/App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoNavbar from "./components/NoNavbar";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NoTokenAccess from "./components/NoTokenAccess";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <div className="app">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
          <BrowserRouter>
            <NoNavbar>
              <Navbar />
            </NoNavbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/details/:id"
                element={
                  <Protected>
                    <Details />
                  </Protected>
                }
              />
              <Route path="/search" element={<Search />} />
              <Route path="/all-movies" element={<AllMovies />} />
              <Route
                path="/register"
                element={
                  <NoTokenAccess>
                    <Register />
                  </NoTokenAccess>
                }
              />
              <Route
                path="/login"
                element={
                  <NoTokenAccess>
                    <Login />
                  </NoTokenAccess>
                }
              />
            </Routes>
            <Footer />

            <ToastContainer theme="colored" />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
