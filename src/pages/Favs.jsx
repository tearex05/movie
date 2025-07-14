import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favs() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <>
        <div className="favorites">
          <h2>Your Favs</h2>
        </div>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="favorites-emptpy">
      <h3>No movies yet</h3>
    </div>
  );
}

export default Favs;
