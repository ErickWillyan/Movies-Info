import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import "./index.css";

export default function CardMovie({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/movie/${data.id}`);
  };
  return (
    <div
      className="w-48 flex flex-wrap mr-8 ml-8 mb-8 "
      onClick={handleNavigation}
    >
      <img className="h-64 w-48" src={urlImage} alt={data.title} />
      <p className="text-white mt-2">{data.title}</p>
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
