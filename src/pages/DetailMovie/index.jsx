import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificationCard from "../../components/CertificationCard";
import CardMovieMyList from "../../components/CardMovieMyList";
import { Navigation, Pagination, Scrollbar, Zoom } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header";
import toast, { Toaster } from "react-hot-toast";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetailMovie() {
  const [movie, setMovie] = useState({});
  const [favoriteMovies, setFavoritesMovies] = useState({});
  const [existMovie, setExistMovie] = useState(false);
  const [certification, setCertification] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getDetailMovies() {
      const favoriteList = localStorage.getItem("@favoritesMovies");

      let moviesSaved = JSON.parse(favoriteList) || [];

      const existsMovies = moviesSaved.some(
        (movieFound) => movieFound.id === JSON.parse(id)
      );

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

        setCertification(
          classificacao_Indicativa.release_dates[0].certification
        );
      } catch (error) {
        setCertification({});
      }

      setExistMovie(existsMovies);
      setFavoritesMovies(JSON.parse(favoriteList) || []);
      setMovie(response.data);
      setLoading(false);
    }

    getDetailMovies();
  }, [id]);

  const handleNavigationToLearnMore = () => {
    navigate(`/learnMore/${movie.id}`);
  };

  const notifyAddMovie = () =>
    toast.success(`${movie.title} adicionado a lista`);

  const notifyRemoveMovie = () =>
    toast.error(`${movie.title} removido da lista`);

  const urlImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  if (loading) {
    return (
      <div>
        <p>Carregando filmes...</p>
      </div>
    );
  }

  function removeMovie() {
    let newList = favoriteMovies.filter((item) => {
      return item.id !== JSON.parse(id);
    });

    setFavoritesMovies(newList);
    localStorage.setItem("@favoritesMovies", JSON.stringify(newList));

    setExistMovie(false);
    notifyRemoveMovie();
  }

  function saveMovie() {
    const favoritesMovie = localStorage.getItem("@favoritesMovies");

    let moviesSaved = JSON.parse(favoritesMovie) || [];

    if (existMovie) {
      alert("Este filme já foi salvo");
      return;
    }

    let newList = favoriteMovies.concat(movie);

    setFavoritesMovies(newList);
    setExistMovie(true);
    moviesSaved.push(movie);
    localStorage.setItem("@favoritesMovies", JSON.stringify(moviesSaved));
    notifyAddMovie();
  }

  return (
    <>
      <Header />
      <div className="relative flex flex-wrap w-full  bg-slate-200">
        <img
          src={urlImage}
          alt={movie.title}
          className="  2xl:h-[34rem] xl:h-[25rem] lg:h-[25rem] md:h-[20rem] w-full object-cover select-none"
        />
        <div className="absolute w-full flex flex-wrap justify-between bg-gradient-to-tr h-full from-background from-10% items-center ">
          <div className=" w-[60rem] lg:w-[40rem]">
            <h1 className=" font-poppins 2xl:text-5xl md:text-3xl 2xl:mb-7 md:mb-3 ml-10 font-bold select-none">
              {movie.title}
            </h1>
            <p className="font-poppins text-base mb-5 select-none ml-8">
              {movie.overview}
            </p>
            <div className="ml-8">
              <button
                onClick={handleNavigationToLearnMore}
                className="  hover:scale-105 duration-200 delay-200  font-poppins 2xl:pl-4 md:pl-2 2xl:pr-4 md:pr-2 pt-1 pb-1 font-bold select-none text-base rounded bg-white text-background "
              >
                Saiba Mais
              </button>
              {existMovie ? (
                <button
                  onClick={removeMovie}
                  className=" hover:scale-105 duration-200 delay-200 font-poppins ml-2 p-1 2xl:text-lg md:text-base select-none"
                >
                  - Remover da lista
                </button>
              ) : (
                <button
                  onClick={saveMovie}
                  className=" hover:scale-105 duration-200 delay-200 font-poppins ml-2 p-1 2xl:text-lg md:text-base select-none"
                >
                  + Adicionar a lista
                </button>
              )}
            </div>
          </div>
          {<CertificationCard data={certification} />}
        </div>
      </div>
      <div>
        <p className="text-lg ml-14 font-poppins">Minha Lista</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            800: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1500: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1900: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
          className=" flex pt-7 items-center h-[20rem]  mb-6"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation, Pagination, Scrollbar, Zoom]}
          zoom={true}
          navigation
        >
          {favoriteMovies.map((item) => (
            <SwiperSlide key={item.id} className="w-1 flex justify-center ">
              <CardMovieMyList data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
