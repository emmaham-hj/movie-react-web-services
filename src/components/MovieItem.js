import "../style.css";
import { Link } from "react-router-dom";
import RatingView from "./Rating";
function MovieItem({ id, index, coverImg, summary, title, rating, genres }) {
  return (
    <article className="card" style={{ width: "300px" }}>
      <div className="cardGrid">
        <div className="card-image">
          <img alt="" src={coverImg} />
        </div>
        <div className="card-content">
          <h2>
            <Link to={`/movie/${id}`}>
              Top {index}: {title}
            </Link>
          </h2>
          <h6>Rating : {rating}</h6>
          <RatingView value={rating} />
          <p>{summary.substring(0, 100)}...</p>
        </div>
      </div>
    </article>
  );
}

export default MovieItem;
