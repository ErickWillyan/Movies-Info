export default function CardIndication(data) {
  return (
    <div className="flex ">
      <p
        className="flex flex-none items-center h-10 px-3 rounded-s-md font-bold select-none"
        style={{ backgroundColor: `${data.color}` }}
      >
        {data.certification}
      </p>
      <p className="flex bg-slate-700 items-center h-10 p-2 text-sm bg-opacity-50 select-none">
        {data.texto}
      </p>
    </div>
  );
}
