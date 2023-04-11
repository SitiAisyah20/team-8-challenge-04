import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import SearchTwo from "./pages/SearchTwo";
import SearchThree from "./pages/SearchThree";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search2" element={<SearchTwo />} />
        <Route path="/search3" element={<SearchThree />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
