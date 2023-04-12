import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all-movies" element={<AllMovies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
