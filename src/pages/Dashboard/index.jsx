import { useEffect, useState } from "react";
import api from "../../services/api";
import CardMovie from "../../components/cardMovie";
import "./index.css";
export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function listPopularMovies() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    }
    listPopularMovies();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Carregando filmes...</p>
      </div>
    );
  }
  return (
    <main className="mainContainer">
      <div className="listMoviesContainer">
        {movies.map((data) => {
          return <CardMovie key={data.id} data={data} />;
        })}
      </div>
    </main>
  );
}
