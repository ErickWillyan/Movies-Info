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
      <img src={urlImage} alt={movie.title} width={"100%"} />
      <p>Nome do filme: {movie.title} </p>
      <p>Sinopse do filme: {movie.overview} </p>
      <button> Saiba Mais</button>
      <button onClick={saveMovie}> + Adicionar a lista</button>
    </>
  );
}
