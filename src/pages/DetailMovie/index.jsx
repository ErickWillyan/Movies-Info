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
          className=" w-full xl:h-[28rem] object-cover "
        />
        <div className="absolute w-full flex bg-gradient-to-tr h-full from-background from-10% items-end ">
          <div className="w-[28rem]">
            <p className="text-xl">{movie.title} </p>
            <p className="text-base">{movie.overview} </p>
            <div className="flex w-full justify-around">
              <button> Saiba Mais</button>
              <button onClick={saveMovie}> + Adicionar a lista</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
