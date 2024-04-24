import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Favorites() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const response = localStorage.getItem("@favoritesMovies");
    setMovies(JSON.parse(response) || []);
  }, []);

  function removeMovie(id) {
    let newList = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(newList);
    localStorage.setItem("@favoritesMovies", JSON.stringify(newList));

    alert(`${id} deletado`);
  }

  function navigateToDetailMovie(id) {
    navigate(`/movie/${id}`);
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
              <li onClick={() => navigateToDetailMovie(item.id)}>
                <p>{item.title}</p>
              </li>
              <button onClick={() => removeMovie(item.id)}>
                remover Filme
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
