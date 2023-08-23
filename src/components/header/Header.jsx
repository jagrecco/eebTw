import logo from "../../assets/logo.png"

import {NavBar} from './NavBar'
//  place-items-center

export const Header = () => {
  return (
    <header className="w-[100%] relative flex place-content-between px-6 pt-8">
        <div className="w-20 my-2" >
          <picture>
            <img src={logo} alt="" />
          </picture>
          
        </div>

        <NavBar/>
        
    </header>
  )
}
