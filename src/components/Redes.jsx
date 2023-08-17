import phone from '../assets/accept-call-icon.svg'
import email from '../assets/email-verification-icon.svg'
import facebook from '../assets/facebook-color-icon.svg'
import instagram from '../assets/ig-instagram-icon.svg'
import whatsapp from '../assets/whatsapp-color-icon.svg'

//<img className="w-10" src={instagram} alt="" />

export const Redes = () => {
  return (
    <div className='flex flex-col'>
        <img className="w-10" src={phone} alt="44411306" />
        <p>44411306</p>
        <img className="w-10" src={email} alt="" />
        <p>info@eeb.edu.ar</p>
        <img className="w-10" src={facebook} alt="" />
        <p>44411306</p>
        <a href="http://www.instagram.com"><img className="w-10" src={instagram} alt="" /></a>
        <img className="w-10" src={whatsapp} alt="" />
        <p>44411306</p>
    </div>
  )
}

