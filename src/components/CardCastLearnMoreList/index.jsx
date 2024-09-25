import { LuImageOff } from "react-icons/lu";

export default function CardCastLeanMoreList({ image, name, character }) {
  return (
    <div className="flex flex-wrap justify-center cursor-pointer">
      {image ? (
        <img
          className="rounded-lg  w-40 h-60"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={name}
        />
      ) : (
        <div className=" flex items-center justify-center rounded-lg w-40 h-60 bg-[#282830]">
          <LuImageOff size={60} />
        </div>
      )}
      <div className="w-40 mt-2">
        <p className="text-base font-bold  text-center ">{name}</p>
        <p className="text-sm  text-center">{character}</p>
      </div>
    </div>
  );
}

// <img
//   className="rounded-lg px-3  w-40 h-60 bg-[#282830] object-scale-down"
//   src="/sem-foto.png"
//   alt={name}
// />
