export default function CardCastLeanMoreList({ image, name, character }) {
  return (
    <div>
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
      <div className="w-40">
        <p className="text-base font-bold ">{name}</p>
        <p className="text-sm">( {character} )</p>
      </div>
    </div>
  );
}
