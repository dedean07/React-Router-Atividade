import { useParams, Link } from 'react-router';

function DetalheTarefa({ tarefas, onRemover }) {
  const { id } = useParams();

  const tarefa = tarefas.find((t) => t.id === Number(id));

  if (!tarefa) {
    return (
      <div>
        <p>Tarefa não encontrada. <Link to="/tarefas">Voltar para a lista</Link></p>
      </div>
    );
  }

  return (
    <div className="card card-body">
      <h2>{tarefa.texto}</h2>
      <p className="text-muted"> Criada em: {new Date(tarefa.id).toLocaleString('pt-BR')}</p>
      <Link className="btn btn-secondary" to="/tarefas">
        Voltar
      </Link>
    </div>
  );
}

export default DetalheTarefa;