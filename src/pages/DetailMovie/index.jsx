import api from "../../services/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function DetailMovie() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  useEffect(() => {
    async function getDetailMovies() {
      const response = await api.get(`movie/${location.state.id}`, {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });

      setMovie(response.data);
    }
    getDetailMovies();
  }, []);

  const urlImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <>
      <img src={urlImage} alt={movie.title} height={300} width={200} />
      <p>Nome do filme: {movie.title} </p>
      <p>Sinopse do filme: {movie.overview} </p>
    </>
  );
}
