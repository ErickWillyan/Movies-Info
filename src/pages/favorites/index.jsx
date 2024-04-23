import { useEffect, useState } from "react";
import "./index.css";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = localStorage.getItem("@favoritesMovies");
    setMovies(JSON.parse(response) || []);
  }, []);

  function removeMovie() {
    alert("Remover filme");
  }

  function navigateToDetailMovie() {
    alert("detalhes do filme");
  }

  if (movies.length === 0) {
    return (
      <div>
        <p>Você não salvou nenhum filme</p>
      </div>
    );
  }

  console.log(movies);

  return (
    <div>
      <ul>
        {movies.map((item) => {
          return (
            <div className="movieItem" key={item.id}>
              <li onClick={navigateToDetailMovie}>
                <p>{item.title}</p>
              </li>
              <button onClick={removeMovie}>remover Filme</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
