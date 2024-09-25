import { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import ListMoviesDashboard from "../../components/ListMoviesDashboard";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const [PopularMovies, setPopularMovies] = useState([]);
  const [UpComing, setUpComingMovies] = useState([]);
  const [TopRated, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function listPopularMovies() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });
      setPopularMovies(response.data.results);
      setLoading(false);
    }
    async function listUpComingMovies() {
      const response = await api.get("movie/upcoming", {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });
      setUpComingMovies(response.data.results);
    }
    async function listTopRatedMovies() {
      const response = await api.get("movie/top_rated", {
        params: {
          api_key: "92a609de3abd6ca612a59c98882f521b",
          language: "pt-BR",
        },
      });
      setTopRatedMovies(response.data.results);
    }

    listPopularMovies();
    listTopRatedMovies();
    listUpComingMovies();
  }, []);
  function search() {
    alert("Clicou");
  }

  if (loading) {
    return (
      <div>
        <p>Carregando filmes...</p>
      </div>
    );
  }
  console.log(PopularMovies[0].backdrop_path);
  return (
    <>
      <Header />
      <div className="relative flex flex-wrap w-[70%] h-[25rem] m-auto mb-8 items-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${PopularMovies[0].backdrop_path}`}
          alt={PopularMovies[0].title}
          className=" h-full w-full object-cover select-none opacity-40"
        />
        <div className="absolute w-full flex flex-wrap justify-between bg-gradient-to-tr ">
          <div className=" ml-28 ">
            <h1 className=" font-poppins 2xl:text-4xl md:text-3xl 2xl:mb-7 md:mb-3 font-bold select-none">
              Bem-Vindo(a).
            </h1>
            <p className="font-poppins text-3xl mb-5 select-none">
              Encontre seus filmes favoritos
            </p>
          </div>
          <div className="flex w-[100%] justify-center">
            <input
              type="text"
              placeholder="Busque por um filme"
              className=" w-[70%] rounded-3xl px-4 py-2 text-black outline-none "
            />
            <button onClick={search} className="ml-4 ">
              <FaSearch size={25} color="black" />
            </button>
          </div>
        </div>
      </div>
      <ListMoviesDashboard data={PopularMovies} titleList={"Populares"} />
      <ListMoviesDashboard data={UpComing} titleList={"Em Breve"} />
      <ListMoviesDashboard data={TopRated} titleList={"Melhor Classificação"} />
      <Footer />
    </>
  );
}
