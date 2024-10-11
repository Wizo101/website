import './ads.scss';
import Carousel from 'react-bootstrap/Carousel';
import Ex1 from './Ex12';
import Ex2 from './Ex22';
import Ex3 from './Ex32';

const Advertisement = () => {
    return (
        <div className="addss">
            <div className="caro-container">
            <Carousel>
      <Carousel.Item interval={1000}>
        <Ex1 text="First slide" />
        <Carousel.Caption style={{ color: 'black'}}>
          <h3>Calling Cards</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Ex2 text="Second slide" />
        <Carousel.Caption style={{ color: 'black'}}>
          <h3>Flyers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Ex3 text="Third slide" />
        <Carousel.Caption style={{ color: 'black'}}>
          <h3>Magazines</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            
        </div>
    );
}

export default Advertisement;


