import * as React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/details.css";

function Details() {
  const [detailMovie, setDetailMovie] = React.useState({});
  const [genre, setGenre] = React.useState([]);
  //   const [trailer, setTrailer] = React.useState([]);

  const params = useParams();

  const getGenre = genre.genres?.map((gen) => {
    return <h5 className="genre mx-2">{gen.name}</h5>;
  });

  React.useEffect(() => {
    async function getDetailMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=dca3f16902da77f476fae29bef18cfb2`
        );
        setDetailMovie(response.data);
        setGenre(response.data);
      } catch (error) {
        alert(error);
      }
    }
    getDetailMovie();
  }, [params]);

  //   React.useEffect(() => {
  //     async function getTrailer() {
  //       try {
  //         const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=dca3f16902da77f476fae29bef18cfb2&language=en-US`);
  //         setTrailer(trailer.data);
  //         // console.log(trailer);
  //       } catch (error) {
  //         alert(error);
  //       }
  //     }
  //     getTrailer();
  //   }, [params]);
  const myStyle = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <Navbar />

      <div className="detailsPage" style={myStyle}>
        {/* <figure className="position-relative">
          <img
            src={`https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`}
            alt=""
            className="img-fluid"
          />
        </figure> */}
        <figcaption>
          <div className="banner">
            <div className="details">
              <h1 className="movieTitle">{detailMovie.title}</h1>
              <p className="movieDescription">{detailMovie.overview}</p>

              <div style={{ marginBottom: "30px" }}></div>
              <hr style={{ opacity: "0.1" }}></hr>
              <div style={{ marginBottom: "15px" }}></div>

              <div
                className="d-flex justify-content-spacearound "
                style={{ fontStyle: "italic" }}
              >
                {getGenre}
              </div>

              <div className="movieRate">
                <h4>{"Rating: " + detailMovie.vote_average}</h4>
              </div>
              <div className="movieRelease">
                <h6>{"Release: " + detailMovie.release_date}</h6>
              </div>
              <div style={{ paddingBottom: "15px" }}></div>
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${detailMovie.poster_path}`}
                alt="moviePoster"
                className="moviePoster "
              />
            </div>
          </div>
        </figcaption>
        {/* <div className="trailer">
          <video src={`https://www.youtube.com/watch?v=${trailer.key}`} width={750} height={500} controls></video>
        </div> */}
      </div>
    </>
  );
}

export default Details;
