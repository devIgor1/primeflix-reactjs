import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./movies.css";

import { toast } from "react-toastify";

import api from "../../services/api";

function Movies() {
  const { id } = useParams();
  const navigation = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "8f8839ff5d2dfc092309ad5bf9ebccaa",
          },
        })
        .then(response => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Movie not found");
          alert("MOVIE NOT FOUND");
          navigation("/", { replace: true });
          return;
        });
    }

    loadMovie();

    return () => {};
  }, [navigation, id]);

  function saveMovie() {
    const myMovies = localStorage.getItem("@myMovies");

    let savedMovies = JSON.parse(myMovies) || [];

    const hasMovie = savedMovies.some(savedMovie => savedMovie.id === movie.id);

    if (hasMovie) {
      toast.warn("MOVIE ALREADY ADDED!");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@myMovies", JSON.stringify(savedMovies));
    toast.success("MOVIE SUCCESSFULLY ADDED");
  }

  if (loading) {
    return (
      <div className="movie-details">
        <h1>Loading Details...</h1>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <h1 className="title">{movie.title}</h1>
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3 className="overview">Overview</h3>
      <span className="description">{movie.overview}</span>
      <strong className="rating">
        Rating: {movie.vote_average.toFixed(1)}/10
      </strong>

      <div className="btn-area">
        <button className="btn-save" onClick={saveMovie}>
          Save Movie
        </button>
        <button className="btn-trailer">
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${movie.title} Trailer `}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movies;
