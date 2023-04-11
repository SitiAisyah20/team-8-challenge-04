import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [filterSearch, setFilterSearch] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2&language=en-US&page=1"
      )
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const onSearch = (e) => {
    e.preventDefault();

    setFilterSearch(e.target["search"].value);

    // console.log(e.target["search"].value);
  };

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <Card className="my-4">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Form onSubmit={onSearch}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="text"
                        name="search"
                        placeholder="What do you want to watch?"
                        aria-label="search"
                        onChange={(event) => {
                          setSearch(event.target.value);
                        }}
                      />
                      <Button
                        variant="outline-secondary"
                        type="submit"
                        style={{ borderColor: "#DADADA" }}
                      >
                        <FaSearch /> {/* icon search */}
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {popularMovies &&
          popularMovies.length > 0 &&
          popularMovies.map((movie) =>
            filterSearch != null &&
            movie.title.toLowerCase().includes(filterSearch) ? (
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
            ) : (
              filterSearch == null && (
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
              )
            )
          )}
      </Row>
    </Container>
  );
}

export default Search;
