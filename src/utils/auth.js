import jwt_decode from 'jwt-decode';

export const usuarioAutenticado = () => localStorage.getItem("token-firebase") !== null;

export const isAdmin = () => {
    if(usuarioAutenticado()){
        const user = jwt_decode(localStorage.getItem('token-firebase'))
        return user.role === 'atendente' 
    }
    
    return false;
}