import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Movies Info
      </Link>
      <Link className="favoritesButton"> Meus Filmes</Link>
    </header>
  );
}
