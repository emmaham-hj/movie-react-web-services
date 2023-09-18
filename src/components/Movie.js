import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, summary, title, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.count === 0 ? null : (
          <div>
            {genres.map((g) => (
              <li>{g}</li>
            ))}
          </div>
        )}
      </ul>
    </div>
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
