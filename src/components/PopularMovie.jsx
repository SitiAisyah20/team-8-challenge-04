import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/App.css";

function PopularMovie() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2`
      )
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="bg">
        <Container className="mt-4">
          <Row>
            <Col sm={10}>
              <h3 className="text-danger text-popular">
                <b>Popular Movies</b>
              </h3>
            </Col>
            <Col sm={2} className="all-movie">
              <Button
                variant="dark"
                className="text-danger all-movie"
                as={Link}
                to={`/all-movies`}
              >
                See All Movie <i className="fas fa-arrow-right" />
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            {popularMovies.map((movie) => (
              <Col sm={12} md={6} lg={3} key={movie.id}>
                <div
                  className="card"
                  style={{ marginBottom: "50px", borderRadius: "10px" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    className="card-content"
                    style={{ height: "100px", color: "#DADADA" }}
                  >
                    <h4 className="card-title text-center text-white my-3">
                      <b>{movie.title}</b>
                    </h4>
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
      </div>
    </>
  );
}

export default PopularMovie;
