import './styles.css';
import ProductCard from 'components/ProductCard';
import BuscaCard from 'components/BuscaCard';

const Catalog = () => {
  return (
      <div className="container my-4 catalog-container home-catalog">
        <BuscaCard />
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
  );
};

export default Catalog;
