import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ data }) {
  const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/movie/${data.id}`);
  };
  return (
    <div
      //   className="w-48 flex  flex-wrap ml-8 mr-8 mb-4  transition ease-in-out duration-300  hover:border-4 border-gray-300"
      //   onClick={handleNavigation}
      // >
      //   <img className="h-72 w-48 mb-1" src={urlImage} alt={data.title} />
      //   <p className="text-white pl-2">{data.title}</p>
      className="group relative flex h-64 w-48  mr-8 ml-8 mb-8 hover:scale-110 duration-500  "
      onClick={handleNavigation}
    >
      <img
        className="h-64 w-48 rounded-lg object-fill"
        src={urlImage}
        alt={data.title}
      />
      <div className=" flex h-full w-full absolute items-end ">
        <p
          className=" opacity-0 group-hover:opacity-100 duration-500  
       text-white font-normal text-sm absolute  text-wrap bg-gradient-to-r from-background"
        >
          {data.title}
        </p>
      </div>
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
