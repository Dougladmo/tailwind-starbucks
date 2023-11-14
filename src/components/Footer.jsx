import Historias from '../assets/sb-historias-logo.svg'

const Footer = () => {
  return (
    <div className='w-full mb-28'>
        <div className='Footer-top flex px-16 border-b-2 pb-16'>
            <div className='flex flex-col ml-5'>
                <h3 className='text-xl font-semibold'>Sobre nós</h3>
                <ul  className='text-gray-600 mt-5 text-lg flex flex-col gap-7 max-w-xs'>
                    <li><a href="#">Nossa empresa</a></li>
                    <li><a href="#">Nosso café</a></li>
                    <li><a href="#">Atendimento ao cliente</a></li>
                    <li><a href="#">Compliance e Privacidade</a></li>
                    <li><a href="#">Código de Etica e Conduta SouthRock</a></li>
                </ul>
            </div>
            <div className='flex flex-col ml-5'>
                <h3 className='text-xl font-semibold'>Carreira</h3>
                <ul  className='text-gray-600 mt-5 text-lg flex flex-col gap-7 max-w-xs'>
                    <li><a href="#">Central de carreiras</a></li>
                </ul>
            </div>
            <div className='flex flex-col  ml-5'>
                <h3 className='text-xl font-semibold'>Impacto social</h3>
                <ul  className='text-gray-600 mt-5 text-lg flex flex-col gap-7 max-w-xs'>
                    <li><a href="#">Comunidade</a></li>
                    <li><a href="#">Meio Ambiente</a></li>
                    <li><a href="#">Fornecimento ético</a></li>
                    <li><a href="#">Histórias Starbucks</a></li>
                </ul>
            </div>
            <div className='flex flex-col ml-5'>
                <h3 className='text-xl font-semibold'>Starbucks rewards</h3>
                <ul className='text-gray-600 mt-5 text-lg flex flex-col gap-7 max-w-xs'>
                    <li><a href="#">Baixa o Aplicativo</a></li>
                    <li><a href="#">Termos & Condições do Starbucks Card</a></li>
                    <li><a href="#">Termos & Condições do Starbucks Rewards</a></li>
                    <li><a href="#">Termos & Condições do Gift Card</a></li>
                    <li><a href="#">Termos & Condições de Promoções Starbucks</a></li>
                    <li><a href="#">Termos & Condições Peça e Pague pelo Celular e Retire na Loja</a></li>
                </ul>
            </div>
            <div>
                <img className='w-40' src={Historias} alt="starbucks historias" />
            </div>
        </div>
    </div>
  )
}

export default Footer