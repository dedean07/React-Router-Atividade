import { Navigate } from 'react-router';

function RotaProtegida({ usuario, children }) {
    if (!usuario) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default RotaProtegida;