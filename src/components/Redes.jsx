import phone from '../assets/accept-call-icon.svg'
import email from '../assets/email-verification-icon.svg'
import facebook from '../assets/facebook-color-icon.svg'
import instagram from '../assets/ig-instagram-icon.svg'
import whatsapp from '../assets/whatsapp-color-icon.svg'

//<img className="w-10" src={instagram} alt="" />

export const Redes = () => {
  return (
    <div className='flex py-4'>
        <img className="w-10 px-2" src={phone} alt="44411306" />
        
        <img className="w-10 px-2" src={email} alt="" />
         
        <img className="w-10 px-2" src={facebook} alt="" />
    
        <a href="http://www.instagram.com"><img className="w-10 px-2" src={instagram} alt="" /></a>
        <img className="w-10 px-2" src={whatsapp} alt="" />
        
    </div>
  )
}

