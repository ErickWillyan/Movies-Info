import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-24 text-white items-center flex justify-between pl-10 pr-10  ">
      <Link className="text-3xl font-semibold" to="/">
        Movies Info
      </Link>
      <Link
        className=" 
        pl-5 pr-5
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
