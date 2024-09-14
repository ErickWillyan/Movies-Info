import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import BackButton from "../../components/BackButton";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import CardCastLeanMoreList from "../../components/CardCasrLearnMoreList";

export default function LearnMore() {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState({});
  const [cast, setCast] = useState([]);
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
      <BackButton route={`/movie/${movie.id}`} />
      <div className="flex flex-wrap justify-center items-center w-[100%] my-14">
        <img
          className="rounded-lg  w-60"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="w-[50%] ">
          <p className=" font-poppins 2xl:text-5xl md:text-3xl 2xl:mb-7 md:mb-3 ml-10 font-bold select-none">
            {movie.title}
          </p>

          <p className=" font-poppins text-base mb-5 select-none ml-8">
            {movie.overview}
          </p>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 8,
          },
          1000: {
            slidesPerView: 8,
          },
          1200: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          1500: {
            slidesPerView: 8,
          },
          1900: {
            slidesPerView: 9,
          },
        }}
        modules={[Scrollbar]}
        className=" w-[90%]"
      >
        {cast.map((item) => (
          <SwiperSlide key={item.cast_id} className="mx-32">
            <CardCastLeanMoreList
              name={item.name}
              image={item.profile_path}
              character={item.character}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
