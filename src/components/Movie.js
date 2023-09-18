import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImage, summary, title, genres }) {
  const Movie = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: #000;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 15px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.03);
    backface-visibility: hidden;

    img {
      width: 100%;
    }
    h2 {
      font-size: 1.3em;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        color: rgb(126, 17, 17);
      }
    }
  `;
  return (
    <Movie
      onMouseEnter={() => {
        document.querySelector(".movies-wrap").style.animationPlayState =
          "paused";
      }}
      onMouseLeave={() => {
        document.querySelector(".movies-wrap").style.animationPlayState =
          "running";
      }}
    >
      <img src={coverImage} />
      <div className="text">
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      </div>
    </Movie>

    // <div>
    //   <img src={coverImage} alt={title} />
    //   <h3>
    //     <Link to={`/movie/${id}`}>{title}</Link>
    //   </h3>
    //   <p>{summary}</p>
    //   <ul>
    //     {genres.count === 0 ? null : (
    //       <div>
    //         {genres.map((g) => (
    //           <li>{g}</li>
    //         ))}
    //       </div>
    //     )}
    //   </ul>
    // </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
