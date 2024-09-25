export default function CertificationCardLearnMore(certification) {
  switch (certification.data) {
    case "L":
      return (
        <CardIndication
          certification="L"
          color="#29FB44"
          texto="Livre para todos"
        />
      );
    case "10":
      return (
        <CardIndication
          certification="10"
          color="#169AF7"
          texto="Maiores de 10 anos"
        />
      );

    case "12":
      return (
        <CardIndication
          certification="12"
          color="#EBB828"
          texto="Maiores de 12 anos"
        />
      );
    case "14":
      return (
        <CardIndication
          certification="14"
          color="#ff8c00"
          texto="Maiores de 14 anos"
        />
      );

    case "16":
      return (
        <CardIndication
          certification="16"
          color="#E01409"
          texto="Maiores de 16 anos"
        />
      );
    case "18":
      return (
        <CardIndication
          certification="18"
          color="#000000"
          texto="Maiores de 18 anos"
        />
      );
    default:
      return;
  }

  function CardIndication(data) {
    return (
      <div className="max-lg:w-full  flex ml-7 ">
        <div className="flex ">
          {data.texto == "L" ? (
            <p
              className="flex flex-none items-center h-10 px-1  font-bold select-none rounded-s-md"
              style={{ backgroundColor: `${data.color}` }}
            >
              {data.certification}
            </p>
          ) : (
            <p
              className="flex flex-none items-center h-10 px-4  font-bold select-none rounded-s-md"
              style={{ backgroundColor: `${data.color}` }}
            >
              {data.certification}
            </p>
          )}
          <p className="flex bg-slate-700 items-center h-10 p-2 text-sm bg-opacity-50 select-none rounded-e-md">
            {data.texto}
          </p>
        </div>
      </div>
    );
  }
}
