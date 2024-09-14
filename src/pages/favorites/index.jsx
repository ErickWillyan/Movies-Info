import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../../components/BackButton";

export default function Favorites() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const response = localStorage.getItem("@favoritesMovies");
    setMovies(JSON.parse(response) || []);
  }, []);

  const handleNavigation = (id) => {
    navigate(`/movie/${id}`);
  };
  const notifyRemoveMovie = (name) => toast.error(`${name} removido da lista`);

  function removeMovie({ item }) {
    let newList = movies.filter((movie) => {
      return movie.id !== item.id;
    });

    notifyRemoveMovie(item.title);
    setMovies(newList);
    localStorage.setItem("@favoritesMovies", JSON.stringify(newList));
  }

  if (movies.length === 0) {
    return (
      <>
        <div className=" relative flex w-[100%] h-[80vh] items-center justify-center ">
          <img
            src="/movieNotFound.svg"
            alt="not found movie"
            className="w-64 h-64 opacity-80"
          />
          <p className=" ml-10 text-2xl opacity-80">
            Você não salvou nenhum filme
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <BackButton route={"/"} />

      <div className="flex max-w-[1300px] justify-center w-90% flex-wrap mt-6 mr-auto ml-auto">
        {movies.map((item) => (
          <div
            key={item.id}
            className="flex hover:scale-105 duration-500 delay-200"
          >
            <div
              className="w-[10rem]  rounded-lg  mr-4 ml-4 mb-8 "
              onClick={() => handleNavigation(item.id)}
            >
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />

              <div className="mt-2 text-left">
                <p className=" font-poppins text-[0.9rem]">{item.title}</p>
              </div>
            </div>

            <RiDeleteBin2Fill
              className="mt-52 cursor-pointer hover:scale-[1.18] duration-500 delay-200"
              size={20}
              onClick={() => removeMovie({ item })}
            />
          </div>
        ))}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
