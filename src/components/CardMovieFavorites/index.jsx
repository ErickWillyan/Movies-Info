import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardMovieFavorites({ data }) {
    const urlImage = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/movie/${data.id}`);
    };


    return (
        <>
            <div
                className="w-[10rem]  rounded-lg  mr-4 ml-4 mb-8 hover:scale-105 duration-500 delay-200"
                onClick={handleNavigation}
            >
                <img className="rounded-lg" src={urlImage} alt={data.title} />

                <div className="mt-2 text-left">
                    <p className=" font-poppins text-[0.9rem]">{data.title}</p>
                </div>
            </div>

        </>
    );
}

CardMovieFavorites.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
};

{/* <ul>
        {movies.map((item) => {
          return (

          <button onClick={() => removeMovie(item.id)}>
            remover Filme
          </button>
            <div className="" key={item.id}>
              <li onClick={() => navigateToDetailMovie(item.id)}>
                <p>{item.title}</p>
              </li>
            </div>

          );
        })}
      </ul> */}