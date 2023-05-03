import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";
import "../src/styles/App.css";
import NoNavbar from "./components/NoNavbar";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
              <Route path="/details/:id" element={<Details />} />
              <Route path="/search" element={<Search />} />
              <Route path="/all-movies" element={<AllMovies />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
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
