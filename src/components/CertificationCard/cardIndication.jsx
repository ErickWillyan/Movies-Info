export default function CardIndication(data) {
  return (
    <div className="max-lg:w-full  flex justify-end">
      <div className="flex">
        {data.texto == "L" || data.texto == "X" ? (
          <p
            className="flex flex-none items-center h-10 px-1 rounded-s-md font-bold select-none"
            style={{ backgroundColor: `${data.color}` }}
          >
            {data.certification}
          </p>
        ) : (
          <p
            className="flex flex-none items-center h-10 px-4 rounded-s-md font-bold select-none"
            style={{ backgroundColor: `${data.color}` }}
          >
            {data.certification}
          </p>
        )}
        <p className="flex bg-slate-700 items-center h-10 p-2 text-sm bg-opacity-50 select-none ">
          {data.texto}
        </p>
      </div>
    </div>
  );
}
