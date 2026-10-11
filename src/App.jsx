import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import RotaProtegida from './components/RotaProtegida';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Tarefas from './pages/Tarefas';
import DetalheTarefa from './pages/DetalheTarefa';
import NaoEncontrada from './pages/NaoEncontrada';

function App() {
  const [usuario, setUsuario] = useState([null]);
  const [tarefas, setTarefas] = useState([]);

  function adicionar(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto: texto }]);
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function criar(nome, senha) {
    const dados = {nome, senha};
    localStorage.setItem('cadastro', JSON.stringify(dados));
    setUsuario(dados);
  }

  function entrar(nome, senha) {
    const salvo = localStorage.getItem('cadastro');
    if (!salvo) return false;

    const conta = JSON.parse(salvo);
    if (conta.nome === nome && conta.senha === senha) {
      setUsuario(conta);
      return true;
    }

    return false;
  }

  return (
    <>
      <Navbar usuario={usuario} onSair={ () => setUsuario(null)} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login usuario={usuario} onCriar={criar} 
          onEntrar={entrar}/>} />

          <Route path="/tarefas" element={
            <RotaProtegida usuario={usuario}>
              <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
            </RotaProtegida>
            } />
          
          <Route path="/tarefas/:id" element={
            <RotaProtegida usuario={usuario}>
              <DetalheTarefa tarefas={tarefas} />
            </RotaProtegida>
          } />
          
          <Route path="*" element={ <NaoEncontrada />} />
        </Routes>
      </div>
    </>
 );
}

export default App;
