import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
          {movies.map((movie) => (
            // eslint-disable-next-line react/jsx-no-undef
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              title={movie.title}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
