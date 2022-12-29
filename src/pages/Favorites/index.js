import "./favorites.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@myMovies");

    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let movieFilter = movies.filter(movie => {
      return movie.id !== id;
    });

    setMovies(movieFilter);
    localStorage.setItem("@myMovies", JSON.stringify(movieFilter));
  }

  return (
    <div>
      <h1 className="page-title">My Movies</h1>
      {movies.length === 0 && (
        <div className="sad-msg">
          <h3 className="message">
            So sad! you don't have any movies in your favorites tab
          </h3>
          <img
            alt="gif"
            className="gif"
            src="https://media.tenor.com/do8q_eYrsW4AAAAM/crying-black-guy-meme.gif"
          />
          <Link className="back-home" to="/">
            Back to home
          </Link>
        </div>
      )}

      <div className="movie-detail">
        <ul>
          {movies.map(movie => {
            return (
              <div className="movies">
                <li key={movie.id}>
                  <span className="movie-title">{movie.title}</span>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="buttons">
                    <Link className="btn-details" to={`/movie/${movie.id}`}>
                      See Details
                    </Link>
                    <button
                      className="btn-delete"
                      onClick={() => deleteMovie(movie.id)}
                    >
                      Delete Movie
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
