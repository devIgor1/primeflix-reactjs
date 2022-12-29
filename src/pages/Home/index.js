import "./home.css";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "8f8839ff5d2dfc092309ad5bf9ebccaa",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 20));
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Movies...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="movies-list">
        {movies.map(movie => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>

              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />

              <Link to={`/movie/${movie.id}`}>Access</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
