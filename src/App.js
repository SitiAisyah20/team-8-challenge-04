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

function App() {
  return (
    <>
      <div className="app">
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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
