import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardMovieMyList({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/movie/${data.id}`);
  };
  return (
    <div
      className="w-[10rem]  rounded-lg cursor-pointer"
      onClick={handleNavigation}
    >
      <img className="rounded-lg" src={urlImage} alt={data.title} />

      <div className="mt-2 text-left">
        <p className=" font-poppins text-[0.9rem]">{data.title}</p>
      </div>
    </div>
  );
}

CardMovieMyList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
