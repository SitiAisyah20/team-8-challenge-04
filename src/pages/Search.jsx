import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function SearchThree() {
  const location = useLocation();
  const { query } = location.state;
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=dca3f16902da77f476fae29bef18cfb2&query=${query}&include_adult=false`
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
    setSearch(query);
  }, [query]);

  const InputValue = () => {
    if (search !== "") {
      return (
        <h3 className="mt-5 mb-3">
          <b>Search Result "{search}"</b>
        </h3>
      );
    }
    return search;
  };

  return (
    <Container className="mt-5">
      <Row className="mt-4">
        {<InputValue />}
        {movies.length > 0 &&
          movies.map((movie) => (
            <Col sm={12} md={6} lg={3} key={movie.id}>
              <div
                className="card"
                style={{ marginBottom: "50px", borderRadius: "10px" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <div className="card-content" style={{ height: "100px" }}>
                  <h4 className="card-title text-center">{movie.title}</h4>
                  {/* <p className="card-text">{movie.release_date}</p>
                  <p className="card-text">{movie.overview}</p> */}
                  <Button
                    variant="danger"
                    className="ms-2"
                    style={{ borderRadius: "20px", width: "120px" }}
                    as={Link}
                    to={`/details/${movie.id}`}
                  >
                    See Details
                  </Button>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default SearchThree;
