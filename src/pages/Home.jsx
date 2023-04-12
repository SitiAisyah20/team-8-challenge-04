import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import PopularMovie from "../components/PopularMovie";
import "../styles/App.css";

// const API_KEY = "dca3f16902da77f476fae29bef18cfb2";
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2&language=en-US&page=1`;

function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=dca3f16902da77f476fae29bef18cfb2")
      .then((response) => setNowPlayingMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="bg">
        <Carousel controls={false}>
          {nowPlayingMovies.slice(4, 7).map((movie) => (
            <Carousel.Item key={movie.id} style={{ maxHeight: "700px" }}>
              <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
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
                <Button variant="danger" className="ms-2" style={{ borderRadius: "20px", width: "200px" }}>
                  <i class="fas fa-clock" /> Watch Trailer
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <PopularMovie />
      </div>
    </>
  );
}

export default Home;
