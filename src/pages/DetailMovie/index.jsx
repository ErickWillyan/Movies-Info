import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailMovie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function getDetailMovies() {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });

      setMovie(response.data);
      setLoading(false);
    }
    getDetailMovies();
  }, [id]);

  const urlImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  if (loading) {
    return (
      <div>
        <p>Carregando filmes...</p>
      </div>
    );
  }

  function saveMovie() {
    const favoritesMovie = localStorage.getItem("@favoritesMovies");

    let moviesSaved = JSON.parse(favoritesMovie) || [];

    const existsMovies = moviesSaved.some(
      (movieFound) => movieFound.id === movie.id
    );

    if (existsMovies) {
      alert("Este filme já foi salvo");
      return;
    }

    moviesSaved.push(movie);
    localStorage.setItem("@favoritesMovies", JSON.stringify(moviesSaved));
    alert("Filme Salvo");
  }

  return (
    <>
      <div className=" relative flex flex-wrap w-full  bg-slate-200">
        <img
          src={urlImage}
          alt={movie.title}
          className=" w-full 2xl:h-[34rem] xl:h-[34rem] lg:h-[34rem] object-cover select-none"
        />
        <div className="absolute w-full flex bg-gradient-to-tr h-full from-background from-10% items-center ">
          <div className="ml-8 w-[40rem]">
            <p className="text-5xl font-normal mb-7 ml-1 select-none">
              {movie.title}
            </p>
            <p className="text-base mb-5 select-none">{movie.overview} </p>
            <div className="">
              <button className="pl-4 pr-4 pt-1 pb-1 font-bold select-nonetext-base rounded bg-whitetext-background ">
                Saiba Mais
              </button>
              <button
                onClick={saveMovie}
                className="ml-2 p-1 text-lg select-none"
              >
                + Adicionar a lista
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
