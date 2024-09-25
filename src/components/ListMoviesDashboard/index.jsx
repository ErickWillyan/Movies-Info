import CardMovieDashboard from "../CardMovieDashboard";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function ListMoviesDashboard({ data, titleList }) {
  return (
    <div className="flex flex-wrap w-[70%] m-auto mt-12 ">
      <p className="text-xl mb-2 select-none ">{titleList}</p>
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        modules={[Scrollbar]}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        className="flex p-5 items-center "
        style={{
          "--swiper-scrollbar-size": "6px",
          "--swiper-scrollbar-drag-bg-color": "#d3d3d3",
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="flex">
            <CardMovieDashboard key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
