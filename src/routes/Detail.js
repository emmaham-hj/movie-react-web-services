import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

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
  title,
  description_intro,
  description_full,
  year,
  rating,
  genres,
}) {
  return (
    <div style={{ padding: 16 }}>
      <img src={background_image} />
      <h4>{title}</h4>
      <p>{description_intro}</p>
      <p>{description_full}</p>
      <div>
        <p>Released: {year}</p>
        <p>Rating: {rating}</p>
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
  title: PropTypes.string.isRequired,
  description_intro: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
