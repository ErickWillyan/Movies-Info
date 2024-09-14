import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BackButton({ route }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`${route}`);
      }}
      className=" flex hover:scale-105 duration-500 delay-200 ml-5 mt-5 py-2 w-[10rem] items-center cursor-pointer"
    >
      <p className="mr-2">
        <MdOutlineArrowBackIos size={25} />
      </p>
      <p className="text-xl">Voltar</p>
    </div>
  );
}
