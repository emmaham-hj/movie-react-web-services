import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import MovieItem from "../components/MovieItem";
import "./home.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  const handleAllMoviesClick = () => {
    getMovies();
    setLoading(true);
    setFilter(false);
  };

  return (
    <div className="movieView">
      <Header
        handleClick={handleClick}
        handleAllMoviesClick={handleAllMoviesClick}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : filtered ? (
        <div className="filtered-movie">
          <div className="news-table">
            {movies
              .sort((a, b) => b.rating - a.rating)
              .splice(0, 10)
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

//Todo: Move this to upper level when redux or other equivalent state management tool is implemented.
function Header({ handleClick, handleAllMoviesClick }) {
  // style
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #000;
    background-color: #000;
    h1 {
      margin: 0;
      height: 100%;
      line-height: 60px;

      a {
        text-decoration: none;
        color: red;
      }
    }
  `;

  const Nav = styled.nav`
    height: 100%;

    ul {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      list-style: none;
      padding: 0 20px;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      color: #fff;
    }
  `;

  return (
    <Header>
      <h1 className="logo">
        <Link to="" onClick={handleAllMoviesClick}>
          CINEMAWORLD
        </Link>
      </h1>
      <Nav>
        <ul>
          <li>
            <Link to="" onClick={handleClick}>
              Top 10
            </Link>
          </li>
          <li>
            <Link to="/">Science Fiction</Link>
          </li>
          <li>
            <Link to="/">Romance</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}
