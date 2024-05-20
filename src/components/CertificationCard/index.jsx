import CardIndication from "./cardIndication";

export default function certificationCard(certification) {
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
      return (
        <CardIndication
          certification="X"
          color="#000000"
          texto="Classicação não informada"
        />
      );
  }
}
