import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function CardMovie({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/movie/${data.id}`);
  };
  return (
    <div className="cardImage" onClick={handleNavigation}>
      <img src={urlImage} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
}

CardMovie.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
