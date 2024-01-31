import "./header.styles.css";
import { useEffect, useState } from "react";
import { Container } from "../styled-components/utilities";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import Logo from "./../../assets/images/logo.png";

const Header = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);
    let location = useLocation();

    useEffect(() => {
        setIsOpenNav(false);
    }, [location]);

    return (
        <div className='header-bg'>
            <Container>
                <header className='header'>
                    <Link to='/'>
                        <img src={Logo} alt='logo' style={{ width: "150px" }} />
                    </Link>

                    <GrMenu
                        className='icon-menu'
                        size={24}
                        onClick={() => setIsOpenNav(!isOpenNav)}
                    />

                    <nav className={`nav ${isOpenNav ? "nav--open" : ""}`}>
                        <ul className='nav__items'>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to='/'>
                                    Inicio
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to='/properties'>
                                    Propiedades
                                </NavLink>
                            </li>

                            <li className='nav__item'>
                                <NavLink className='nav__link' to='/contact'>
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div
                        onClick={() => setIsOpenNav(!isOpenNav)}
                        className={`layer ${isOpenNav ? "layer--open" : ""}`}
                    ></div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
