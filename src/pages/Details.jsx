import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/details.css";
import { toast } from "react-toastify";

function Details() {
  const [detailMovie, setDetailMovie] = React.useState({});
  const [genre, setGenre] = React.useState([]);
  const [backdropPath, setbackdropPath] = React.useState("");
  const [user, setUser] = useState("");

  const params = useParams();

  const getGenre = genre.genres?.map((gen) => {
    return <h5 className="genre mx-1">{gen.name}</h5>;
  });

  React.useEffect(() => {
    async function getDetailMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=dca3f16902da77f476fae29bef18cfb2`
        );
        setDetailMovie(response.data);
        setGenre(response.data);
        setbackdropPath(
          `https://image.tmdb.org/t/p/original/${response.data.backdrop_path}`
        );
      } catch (error) {
        alert(error);
      }
    }
    getDetailMovie();
  }, [params]);

  const myStyle = {
    backgroundImage: `url(${backdropPath})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_API}/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMe();
  }, []);

  return (
    <>
      <Navbar />

      <div className="detailsPage" style={myStyle}>
        <div className="banner">
          <div className="details">
            <h1 className="movieTitle">{detailMovie.title}</h1>
            <p className="movieDescription">{detailMovie.overview}</p>

            <div style={{ marginBottom: "30px" }}></div>
            <hr style={{ opacity: "0.1" }}></hr>
            <div style={{ marginBottom: "15px" }}></div>

            <div
              className="d-flex justify-content-spacearound movieGenre"
              style={{ fontStyle: "italic" }}
            >
              {getGenre}
            </div>

            <div>
              <h4 className="movieRate">
                {"Rating: " + detailMovie?.vote_average?.toFixed(1)}
              </h4>
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

          {/* <div className="trailer">
          <video src={`https://www.youtube.com/watch?v=${trailer.key}`} width={750} height={500} controls></video>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Details;
