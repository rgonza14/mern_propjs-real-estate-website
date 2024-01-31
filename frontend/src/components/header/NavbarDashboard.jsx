import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbardashboard.styles.css";
import { useAuthStore } from "../../hooks/useAuthStore";

const NavbarDashboard = () => {
    const { startLogout } = useAuthStore();
    const navigate = useNavigate();

    const handleClickLogout = () => {
        navigate("/");
        startLogout();
    };

    return (
        <nav className='navbar-db'>
            <ul className='navbar-db__items'>
                <NavLink to='/admin' className='navbar-db__link'>
                    <li className='navbar-db__item'>Propiedades</li>
                </NavLink>

                <NavLink to='/admin/agent-manager' className='navbar-db__link'>
                    <li className='navbar-db__item'>Agentes inmobiliarios</li>
                </NavLink>
                <NavLink to='/admin/admin-manager' className='navbar-db__link'>
                    <li className='navbar-db__item'>Administradores</li>
                </NavLink>
            </ul>
            <button className='navbar-db__link' onClick={handleClickLogout}>
                <li className='navbar-db__item'>Cerrar sesión</li>
            </button>
        </nav>
    );
};

export default NavbarDashboard;
