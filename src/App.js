import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {movies.map((movie, index) => (
            <div>
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.count === 0 ? null : (
                  <div>
                    {movie.genres.map((g) => (
                      <li>{g}</li>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
