import hamb from "../../assets/hamb.svg";
import { useState } from "react";

export const NavBar = () => {

  const [clicked, setClicked]=useState(false);

  const handleClick=()=>{
    setClicked(prevState=>!prevState)

  }
  
  return (
    <nav className="">
      <ul className={`bg-sky-100 w-[329px] h-[185px] top-[120px] absolute left-0 right-0 mx-auto  flex-col items-center place-content-around after:content-[''] after:absolute after:top-[-24px] after:right-[0px] after:border-[12px] after:border-sky-100 after:border-t-transparent after:border-l-transparent ${clicked ? 'flex' : 'hidden'}`}>
        <li className="list-none font-light hover:cursor-pointer hover:font-bold hover:text-sky-700">
          Primer
        </li>
        <li className="list-none font-light hover:cursor-pointer hover:font-bold hover:text-sky-700">
          Segundo
        </li>
        <li className="list-none font-light w-[150px] h-[50px] grid place-content-center rounded-full hover:cursor-pointer hover:font-bold hover:text-sky-700 hover:bg-red-100 hover:bor">
          Tercer
        </li>
      </ul>
      <div className="hover:cursor-pointer" onClick={handleClick}>
        <img  src={hamb} alt="Menú" />
      </div>
    </nav>
  );
};
