import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CardMovieDashboard({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/movie/${data.id}`);
  };
  return (
    <div
      className="group relative rounded-lg flex h-[15rem] w-[10rem]  mb-8 hover:scale-[1.01] duration-500 delay-200 select-none "
      onClick={handleNavigation}
    >
      <img
        className="h-full rounded-lg w-full object-fill"
        src={urlImage}
        alt={data.title}
      />
      <div className="opacity-0 rounded-lg group-hover:opacity-100 duration-500 delay-100  bg-gradient-to-tr from-background flex h-full w-full absolute  items-end">
        <p className=" font-poppins p-2 text-white font-normal text-sm absolute  text-wrap transition ">
          {data.title}
        </p>
      </div>
    </div>
  );
}

CardMovieDashboard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
