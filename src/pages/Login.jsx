import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login({ usuario, onEntrar, onCriar}) {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [criarConta, setCriarConta] = useState(false);
    const navigate = useNavigate();

    function criar(e) {
        e.preventDefault();
        if (!nome.trim() || !senha) return;
        onCriar(nome, senha);

        setNome('');
        setSenha('');
        navigate('/tarefas');
    }

    function entrar(e) {
        e.preventDefault();
        if (!nome.trim() || !senha) return;

        const sucesso = onEntrar(nome, senha);
        if (sucesso) {
            navigate('/tarefas');
        } else {
            alert("Não há conta cadastrada, gentileza fazer novo cadastro!")
        }
    }

    return (
        <>
        {criarConta ? (
                <form className="card card-body mx-auto" style={{ maxWidth: 400 }} onSubmit={criar}>
                    <h2 className="mb-3">Criar nova conta:</h2>
                    <input className="form-control mb-2" placeholder='Usuário' value={nome} onChange={ (e) => setNome(e.target.value)} />
                    <input className="form-control mb-3" type="password" placeholder="Senha" value={senha} onChange={ (e) => setSenha(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Criar</button>
                    <button className="btn btn-warning" type="button" onClick={ () => setCriarConta(false)}>
                        Já possui cadastro? Entrar
                    </button>
                </form>
            ) : (
                <form className="card card-body mx-auto" style={{ maxWidth: 400 }} onSubmit={entrar}>
                    <h2 className="mb-3">Entrar</h2>
                    <input className="form-control mb-2" placeholder='Usuário' value={nome} onChange={ (e) => setNome(e.target.value)} />
                    <input className="form-control mb-3" type="password" placeholder="Senha" value={senha} onChange={ (e) => setSenha(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Entrar</button>
                    <button className="btn btn-warning" type="button" onClick={ () => setCriarConta(true)}>
                        Não há conta, deseja criar?
                    </button>
                </form>
            )
        }
        </>  
    )
}

export default Login;