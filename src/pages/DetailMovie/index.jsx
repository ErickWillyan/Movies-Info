import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificationCard from "../../components/CertificationCard";

export default function DetailMovie() {
  const [movie, setMovie] = useState({});
  const [certification, setCertification] = useState({});
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
      const certification = await api.get(`movie/${id}/release_dates`, {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
        },
      });
      try {
        const classificacao_Indicativa = certification.data.results.find(
          (result) => result.iso_3166_1 === "BR" 
        );
        
        setCertification(classificacao_Indicativa.release_dates[0].certification);
      } catch (error) {
        setCertification({})
      }
      
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
  console.log("A classificação indicativa", certification)


  return (
    <>
      <div className=" relative flex flex-wrap w-full  bg-slate-200">
        <img
          src={urlImage}
          alt={movie.title}
          className="2xl:h-[34rem] xl:h-[25rem] lg:h-[25rem] md:h-[20rem] w-full object-cover select-none"
        />
        <div className="absolute w-full flex justify-between bg-gradient-to-tr h-full from-background from-10% items-center ">
          <div className="ml-8 2xl:w-[40rem] md:w-[60rem]">
            <p className="2xl:text-5xl md:text-3xl 2xl:mb-7 md:mb-3 ml-1 select-none">
              {movie.title}
            </p>
            <p className="text-base mb-5 select-none">{movie.overview} </p>
            <div className="">
              <button className="2xl:pl-4 md:pl-2 2xl:pr-4 md:pr-2 pt-1 pb-1 font-bold select-none text-base rounded bg-white text-background ">
                Saiba Mais
              </button>
              <button
                onClick={saveMovie}
                className="ml-2 p-1 2xl:text-lg md:text-base select-none"
              >
                + Adicionar a lista
              </button>
            </div>
          </div>
          <div>{<CertificationCard data={certification} />} </div>
        </div>
      </div>
    </>
  );
}
