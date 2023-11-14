import Historias from '../assets/sb-historias-logo.svg'
import Logo from '../assets/starbucks-nav-logo.svg'
import { LightButton, DarkButton } from './Button'

const Header = () => {
  return (
    <div className='header flex w-full justify-between py-8 px-12 shadow-md'>
        <nav className='flex items-center gap-10'>
            <div className='img wrapper flex'>
                <img src={Logo} alt="nav-logo" className='w-16' />
            </div>
            <ul className='flex gap-9 text-base ml-4 mb-1 font-bold tracking-wide'>
                <li><a className='text-zinc-800 hover:text-emerald-800' href="#">MENU</a></li>
                <li><a className='text-zinc-800 hover:text-emerald-800' href="#">REWARDS</a></li>
                <li><a className='text-zinc-800 hover:text-emerald-800' href="#">NOSSO CAFÉ</a></li>
                <li><a className='text-zinc-800 hover:text-emerald-800' href="#">IMPACTO SOCIAL</a></li>
            </ul>
        </nav>
        <nav className='flex items-center mr-2 justify-center gap-5'>
            <div className='Starbucks historias'>
                <img src={Historias} alt="starbucks historias" className='w-40 mr-3' />
            </div>
            <div>
                <p className='text-lg font-bold'>encontre uma loja</p>
            </div>
           <LightButton text='Entrar' />
           <DarkButton text='Participe agora' />
        </nav>
    </div>
  )
}

export default Header