import {CardReverseDefault, CardReverseTwo } from "./components/CardReverse"
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import MessageContainer from "./components/MessageContainer"
import UncontrolledExample from "./components/Slider"

import CardImg1 from './assets/15170_SBUX_REW_BANNERS3MAIO_01.png'
import CardImg2 from './assets/15170_SBUX_REW_BANNERS3MAIO-02.png'
import CardImg3 from './assets/guatemala.jpg'
import CardImg4 from './assets/team.jpg'
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <div className='w-full m-auto mb-28 border-b-2' >
        <div className='Slider w-11/12 m-auto'>
          <UncontrolledExample />
        </div>
        <div className='cards w-11/12 m-auto' >
          <MessageContainer />
          <CardContainer 
            title='Sua pausa mais saborosa!'
            text='Você pode fazer seu pedido sem pegar filas, pedindo pelo aplicativo da Starbucks e retirando na sua loja preferida.'
            btnText='Peça pelo app e retire na loja'
            img={CardImg1}
            />
            <CardReverseTwo 
            title='Uma surpresa refrescante para você'
            btnText='Saiba mais'
            img={CardImg2}
            />
            <CardContainer
            title='Coisas boas estão acontecendo'
            text='Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.'
            btnText='Saiba mais'
            img={CardImg3}
            />
            <CardReverseDefault
            title='Histórias e Notícias Starbucks'
            text='Fique por dentro das novidades e conheça mais sobre nossas iniciativas.'
            btnText='Saiba mais'
            img={CardImg4}
            />
          </div>
      </div>
          <div className='w-full px-16'>
            <Footer />
          </div>
    </div>
    
  )
}

export default App