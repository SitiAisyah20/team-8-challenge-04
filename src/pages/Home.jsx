import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

// const API_KEY = "dca3f16902da77f476fae29bef18cfb2";
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2&language=en-US&page=1`;

function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=dca3f16902da77f476fae29bef18cfb2"
      )
      .then((response) => setNowPlayingMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2&language=en-US&page=1"
      )
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Carousel>
        {nowPlayingMovies.slice(7, 10).map((movie) => (
          <Carousel.Item key={movie.id} style={{ maxHeight: "600px" }}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              //   style={{ maxHeight: "500px" }}
            />
            <Carousel.Caption
              className="text-start"
              style={{
                left: "30%",
                transform: "translateX(-50%)",
                bottom: "20%",
              }}
            >
              <h1 className="display-4" style={{ fontWeight: "bold" }}>
                {movie.title}
              </h1>
              <p>{movie.overview}</p>
              <Button
                variant="danger"
                className="ms-2"
                style={{ borderRadius: "20px", width: "200px" }}
              >
                <i class="fas fa-clock" /> Watch Trailer
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="my-5">
        <Row>
          <Col sm={10}>
            <h3>Popular Movies</h3>
          </Col>
          <Col sm={2} className="text-right">
            <p className="text-danger">
              See All Movie <i className="fas fa-arrow-right" />
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          {popularMovies.map((movie) => (
            <Col sm={12} md={6} lg={3} key={movie.id}>
              <div
                className="card"
                style={{ marginBottom: "50px", borderRadius: "10px" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <div className="card-content" style={{ height: "70px" }}>
                  <h4 className="card-title text-center">{movie.title}</h4>
                  {/* <p className="card-text">{movie.release_date}</p> */}
                  {/* <p className="card-text">{movie.overview}</p> */}
                  {/* <Button
                    variant="danger"
                    className="ms-2"
                    style={{ borderRadius: "20px", width: "120px" }}
                  >
                    See Details
                  </Button> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
