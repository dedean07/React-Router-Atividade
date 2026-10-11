import { useState } from 'react';
import ItemTarefa from '../components/ItemTarefa';

function Tarefas({ tarefas, setTarefas }) {
  const [texto, setTexto] = useState('');

  function adicionar() {
    if (texto.trim() === '') return;
    setTarefas([...tarefas, { id: Date.now(), texto: texto}]);
    setTexto('');
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div>
      <h1 className="mb-4">Minhas Tarefas</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className="btn btn-primary" onClick={adicionar}>
          Adicionar
        </button>
      </div>
      <ul className="list-group">
        {tarefas.map((tarefa) => (
          <ItemTarefa key={tarefa.id} tarefa={tarefa}
            onRemover={remover} />
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
