import { NavBar } from "./header/NavBar"
import { Redes } from "./Redes"
export const Footer = () => {
  return (
    <div className="bg-lime-100 mx-6 flex justify-center">
      <NavBar/>
      <Redes/>
    </div>
  )
}
