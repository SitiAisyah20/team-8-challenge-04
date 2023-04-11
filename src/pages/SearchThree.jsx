import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

function SearchThree() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=dca3f16902da77f476fae29bef18cfb2&query=${search}&include_adult=false`
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
    // async function searchMovie() {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/search/movie?api_key=dca3f16902da77f476fae29bef18cfb2&query=${search}`
    //     );
    //     setPopularMovies(response.data.results);
    //   } catch (error) {
    //     alert(error);
    //   }
    // }
    setSearch(search);
    // searchMovie();
  }, [search]);

  const InputValue = () => {
    if (search !== "") {
      return <h3>Search Result "{search.valueOf()}"</h3>;
    }
    return search;
  };

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <Card className="my-4">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <Form>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="text"
                        name="search"
                        placeholder="What do you want to watch?"
                        aria-label="search"
                        onChange={(event) => {
                          setSearch(event.target.value);
                          <h1>Search Result: "{search}"</h1>;
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
                    {<InputValue />}
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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
    </Container>
  );
}

export default SearchThree;
