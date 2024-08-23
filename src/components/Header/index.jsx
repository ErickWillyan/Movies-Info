import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" flex text-white items-center justify-between px-10 py-4">
      <Link className="text-2xl font-semibold" to="/">
        Movies Info
      </Link>
      <Link
        className=" 
        pl-4 pr-4
        pt-2 pb-2
         font-bold 
         text-base
         rounded 
         bg-white
         text-background "
        to="/favorite"
      >
        Meus Filmes
      </Link>
    </header>
  );
}
