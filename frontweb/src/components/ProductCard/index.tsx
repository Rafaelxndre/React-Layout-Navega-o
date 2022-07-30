import './styles.css';

import ProductImg from 'assets/images/cardcar.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Card card"></img>
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-card-car">
          <h6>COMPRAR</h6>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
