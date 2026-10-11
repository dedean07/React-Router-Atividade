import { Link } from 'react-router';

function NaoEncontrada() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Página não encontrada</p>
      <Link className="btn btn-primary" to="/"> Voltar ao inicio </Link>
    </div>
  );
}

export default NaoEncontrada;
