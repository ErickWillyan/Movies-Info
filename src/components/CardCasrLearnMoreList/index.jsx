export default function CardCastLeanMoreList({ image, name, character }) {
  return (
    <div className="flex flex-wrap justify-center hover:scale-105 cursor-pointer">
      {image ? (
        <img
          className="rounded-lg  w-40 h-60"
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={name}
        />
      ) : (
        <img
          className="rounded-lg px-3  w-40 h-60 bg-white object-scale-down"
          src="/sem-foto.png"
          alt={name}
        />
      )}
      <div className="w-40 mt-2">
        <p className="text-base font-bold  text-center ">{name}</p>
        <p className="text-sm  text-center">{character}</p>
      </div>
    </div>
  );
}
