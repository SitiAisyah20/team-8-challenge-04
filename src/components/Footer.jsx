import React from "react";
import "../styles/footer.css";
import "../styles/App.css";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Movie</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore quasi consequuntur eos, sit recusandae cumque nemo officia quod ipsam ducimus delectus nesciunt eius minima rem iure saepe. Officia, quasi?
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h6 className="text-center">Genre</h6>
              <div className="genre-container">
                <ul className="footer-links genre-list">
                  <li>
                    <a href="https://www.themoviedb.org/movie">Action</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Adventure</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Animation</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Comedy</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Drama</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Fantasy</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Horror</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Romance</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Mystery</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Thriller</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Crime</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Documentary</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Family</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">History</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Western</a>
                  </li>
                  <li>
                    <a href="https://www.themoviedb.org/movie">Music</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-md-2">
              <h6>Streaming</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://www.themoviedb.org/movie">Popular</a>
                </li>
                <li>
                  <a href="https://www.themoviedb.org/movie">Now Playing</a>
                </li>
                <li>
                  <a href="https://www.themoviedb.org/movie">Upcoming</a>
                </li>
                <li>
                  <a href="https://www.themoviedb.org/movie">Top Rated</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved</p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
