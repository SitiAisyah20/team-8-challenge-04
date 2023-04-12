import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllMovies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=dca3f16902da77f476fae29bef18cfb2&query=${search}&include_adult=false`
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
    setSearch(search);
  }, [search]);

  return (
    <Row className="mt-4">
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
  );
}

export default AllMovies;
