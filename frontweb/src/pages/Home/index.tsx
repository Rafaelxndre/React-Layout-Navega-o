import MainImage from 'assets/images/main-image.png';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={MainImage} alt="nome do carro" />
          </div>
        </div>

        <div className="home-subcard">
          <div className="home-subcontent-container">
            <div className="subcard-button-container">
              <ButtonIcon />
            </div>
            <div className="subcard-text-container">
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
