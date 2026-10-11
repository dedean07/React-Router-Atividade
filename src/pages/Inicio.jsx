import { Link } from 'react-router';

function Inicio() {
  return (
    <div className="p-5 bg-light rounded-3">
      <h1>Bem-vindo (a)!</h1>
      <p className="lead">Organize suas tarefas do dia a dia.</p>
      <Link className="btn btn-primary" to="/tarefas">Ver minhas tarefas</Link>      
    </div>
  );
}

export default Inicio;
