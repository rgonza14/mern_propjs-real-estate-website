// import "./formAgent.styles.css";
import { useEffect, useState } from "react";
import ErrorMessage from "../../error-message/ErrorMessage";
import { useAdminStore } from "../../../hooks/useAdminStore";

const FormAdmin = ({ handleCloseForm }) => {
    const { activeAdmin, startSavingAdmin, setErrors, errors } =
        useAdminStore();

    // const [passwords, setPasswords] = useState({ password: "", password2: "" });
    const [formValues, setFormValues] = useState(
        activeAdmin || {
            dni: "",
            full_name: "",
            email: "",
            user: "",
            password: "",
            password2: "",
            _id: undefined
        }
    );

    const onInputChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };

    const onSubmit = async evt => {
        evt.preventDefault();
        if (formValues.password !== formValues.password2) {
            setErrors([{ msg: "Las contraseñas no coinciden" }]);
        } else {
            await startSavingAdmin({
                ...formValues
            });
        }
        if (errors !== null) {
            handleCloseForm();
        }
    };

    return (
        <>
            <form action='' className='agent-form' onSubmit={onSubmit}>
                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>Dni:</span>
                    <input
                        type='number'
                        placeholder='DNI'
                        className='agent-form__input'
                        name='dni'
                        value={formValues.dni}
                        onChange={onInputChange}
                    />
                </div>

                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>
                        Nombre y apellido:
                    </span>
                    <input
                        type='text'
                        placeholder='Nombre y Apellido'
                        className='agent-form__input'
                        name='full_name'
                        value={formValues.full_name}
                        onChange={onInputChange}
                    />
                </div>
                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>Email:</span>
                    <input
                        type='email'
                        placeholder='uncorreo@correo.com'
                        className='agent-form__input'
                        name='email'
                        value={formValues.email}
                        onChange={onInputChange}
                    />
                </div>

                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>Usuario:</span>
                    <input
                        type='text'
                        placeholder='Usuario'
                        className='agent-form__input'
                        name='user'
                        value={formValues.user}
                        onChange={onInputChange}
                    />
                </div>

                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>Contraseña:</span>
                    <input
                        type='password'
                        placeholder='Contraseña'
                        className='agent-form__input'
                        name='password'
                        value={formValues.password}
                        onChange={onInputChange}
                    />
                </div>

                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>
                        Confirmar contraseña:
                    </span>
                    <input
                        type='password'
                        placeholder='Contraseña'
                        className='agent-form__input'
                        name='password2'
                        value={formValues.password2}
                        onChange={onInputChange}
                    />
                </div>

                <input
                    type='submit'
                    value='Guardar cambios'
                    className='agent-form__btn-submit'
                />
                {errors && <ErrorMessage errors={errors} />}
            </form>
        </>
    );
};

export default FormAdmin;
