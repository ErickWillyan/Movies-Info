import { useEffect, useState } from "react";
import api from "../../services/api";
import CardMovie from "../../components/cardMovie";
import Header from "../../components/Header";
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

  async function handleSelectChange(event) {
    const response = await api.get(`${event.target.value}`, {
      params: {
        api_key: "92a609de3abd6ca612a59c98882f521b",
        language: "pt-BR",
      },
    });
    setMovies(response.data.results);
  }

  if (loading) {
    return (
      <div>
        <p>Carregando filmes...</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className=" justify-center w-full">
        <div className="mt-5 w-[75%] mr-auto ml-auto ">
          <select
            className="text-xl bg-transparent outline-none"
            onChange={handleSelectChange}
          >
            <option className="text-base bg-background" value="movie/popular">
              Filmes Populares
            </option>
            <option
              className="text-base bg-background"
              value="movie/now_playing"
            >
              Em exibição
            </option>
            <option className="text-base bg-background" value="movie/upcoming">
              Em breve
            </option>
            <option className="text-base bg-background" value="movie/top_rated">
              Melhor Classificação
            </option>
          </select>
        </div>
        <div className="flex justify-center w-90% flex-wrap mt-4 mr-auto ml-auto  ">
          {movies.map((data) => {
            return <CardMovie key={data.id} data={data} />;
          })}
        </div>
      </main>
    </>
  );
}
