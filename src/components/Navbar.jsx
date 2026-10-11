import { Link, NavLink } from 'react-router';

function Navbar({ usuario, onSair }) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary" >
            <div className="container">
                <Link className="navbar-brand" to="/">Minhas Tarefas</Link>
                <div className="navbar-nav me-auto">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/tarefas">Tarefas</NavLink>
                </div>
                {usuario ? (
                    <div className="d-flex align-items-center gap-2">
                        <span className="navbar-text">Olá, Prezado {usuario.nome} </span>
                        <button className="btn btn-outline-light btn-sm"
                            onClick={onSair}>
                            Sair
                        </button>
                    </div>
                ) : (
                    <Link className="btn btn-light btn-sm" to="/login">Entrar</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;