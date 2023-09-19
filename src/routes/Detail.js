import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./detail.css";
import RatingView from "../components/Rating";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovieDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    console.log(json);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading../</h1>
      ) : (
        <DetailView
          background_image={details.background_image}
          image={details.medium_cover_image}
          title={details.title}
          description_intro={details.description_intro}
          description_full={details.description_full}
          year={details.year}
          rating={details.rating}
          genres={details.genres}
        />
      )}
    </div>
  );
}

export default Detail;

function DetailView({
  background_image,
  image,
  title,
  description_intro,
  description_full,
  year,
  rating,
  genres,
}) {
  return (
    <div
      className="detailBackground"
      style={{
        backgroundImage: `url(${background_image})`,
      }}
    >
      <h2>{title}</h2>
      <img src={image} />

      <p>{description_full}</p>
      <div className="ratingView">
        <p>Released: {year}</p>
        <p>Rating: {rating}</p>
        <RatingView value={rating} />
      </div>
      <b>Ganres</b>
      <ul>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
  );
}

DetailView.propTypes = {
  background_image: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
