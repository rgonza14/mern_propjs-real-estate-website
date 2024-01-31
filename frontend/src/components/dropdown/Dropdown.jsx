import "./dropdown.styles.css";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({
    options = [],
    placeholder = "Seleccione una opción",
    indexName = "name",
    indexValue = "value",
    onSelect,
    defaultSelect
}) => {
    const [isActive, setIsActive] = useState(false);
    const [name, setName] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        if (defaultSelect) {
            setName(defaultSelect[indexName]);
        }
    }, [defaultSelect]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = evt => {
        if (ref.current && !ref.current.contains(evt.target)) {
            setIsActive(false);
            //click fuera
        }
    };

    const handleClickOption = option => {
        onSelect(option[indexValue]);
        setName(option[indexName]);
        setIsActive(false);
    };

    const handleClickInput = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='dropdown' ref={ref}>
            <input
                type='text'
                className='dropdown-input'
                readOnly
                value={name || ""}
                placeholder={placeholder}
                onClick={handleClickInput}
            />
            <FiChevronDown
                color={isActive ? "#8a8a8a" : "#c9c9c9"}
                className='dropdown__icon'
            />
            {isActive && (
                <div className='dropdown-content'>
                    {options.map((option, index) => (
                        <div
                            className='dropdown-item'
                            onClick={() => handleClickOption(option)}
                            key={index}
                        >
                            {option[indexName]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
