import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import MovieItem from "../components/MovieItem";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filtered, setFilter] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=download_count`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleClick = () => {
    setFilter(true);
  };

  return (
    <div>
      <button onClick={handleClick}>get top 10</button>
      {loading ? (
        <h1>Loading</h1>
      ) : filtered ? (
        <div className="filtered-movie">
          <h1>Top 10</h1>

          <div className="news-table">
            {movies
              .sort((a, b) => b.rating - a.rating)
              .splice(0, 5)
              .map((movie, topIndex) => (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  index={topIndex + 1}
                  coverImg={movie.medium_cover_image}
                  summary={movie.summary}
                  title={movie.title}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="movies">
          <div className="movies-wrap">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
              />
            ))}
            {console.log("In the")}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
