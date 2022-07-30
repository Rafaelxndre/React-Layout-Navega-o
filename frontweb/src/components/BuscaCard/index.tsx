import './styles.css';

const BuscaCard = () => {
  return (
    <div className="base-card home-car">
      <div className="car-pesquisa">
        <input
          className="form-control"
          type="email"
          placeholder="Digite sua busca"
        />
      </div>
      <div className="car-button-busca">
        <button className="btn btn-busca-car">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </div>
  );
};
export default BuscaCard;
