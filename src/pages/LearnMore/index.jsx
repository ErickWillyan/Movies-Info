import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function LearnMore() {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState({});
  const [cast, setCast] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getDetailMovie() {
      const movie = await api.get(`movie/${id}`, {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });

      setMovie(movie.data);
    }
    async function getCreditsMovie() {
      const credits = await api.get(`movie/${id}/credits`, {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });

      setCast(credits.data.cast);
      setCrew(credits.data.crew);
    }
    getCreditsMovie();
    getDetailMovie();
  }, [id]);

  console.log(crew);
  console.log(cast);
  console.log(movie);
  return (
    <>
      <div>Saiba mais</div>
    </>
  );
}
