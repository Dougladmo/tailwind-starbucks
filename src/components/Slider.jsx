import Carousel from 'react-bootstrap/Carousel';

import imagem_1 from '../assets/banner_195590685_desktop.jpg'
import imagem_2 from '../assets/banner_2001633349_desktop.jpg'
import imagem_3 from '../assets/banner_3568429784_desktop.jpg'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imagem_1} alt="imagem 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagem_2} alt="imagem 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagem_3} alt="imagem 1" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;