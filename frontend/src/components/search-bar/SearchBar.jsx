import "./searchBar.styles.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({
    children,
    onChange,
    value,
    placeholder = "Buscar..."
}) => {
    return (
        <>
            <div className='search-bar'>
                <div className='search-bar__dentro'>
                    <FaSearch />
                    <input
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className='search-bar__input'
                    />
                </div>
                <div className='search-bar__list'>{children}</div>
            </div>
        </>
    );
};

export const SearchBarOption = ({ children, onClick }) => {
    return (
        <div className='search-bar__option' onClick={onClick}>
            {children}
        </div>
    );
};
