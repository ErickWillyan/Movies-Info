import PropTypes from "prop-types";
import "./index.css";

export default function CardMovie({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  return (
    <div className="cardImage">
      <img src={urlImage} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
}

CardMovie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
