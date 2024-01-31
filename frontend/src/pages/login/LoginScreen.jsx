import "./login.styles.css";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { Title } from "../../components/styled-components/utilities";
import { useAuthStore } from "../../hooks/useAuthStore";
import ErrorMessage from "../../components/error-message/ErrorMessage";

const LoginScreen = () => {
    const [formValues, setFormValues] = useState({
        user: "",
        password: ""
    });

    const { startLogin, errorMessage } = useAuthStore();

    const onInputChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        startLogin({ user: formValues.user, password: formValues.password });
    };

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <div className='login-form__icon'>
                    <PiUserCircleLight size={100} />
                </div>

                <Title color='#000' textAlign='center' marginBottom='0'>
                    Iniciar sesión
                </Title>
                <form className='login-form' onSubmit={onSubmit}>
                    <div className='login-form__inputbox'>
                        <span className='login-form__label'>Usuario:</span>
                        <input
                            type='text'
                            className='login-form__input'
                            name='user'
                            value={formValues.user}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='login-form__inputbox'>
                        <span className='login-form__label'>Contraseña:</span>
                        <input
                            type='password'
                            className='login-form__input'
                            name='password'
                            value={formValues.password}
                            onChange={onInputChange}
                        />
                    </div>

                    <input
                        type='submit'
                        value='Ingresar'
                        className='login-form__submit'
                    />

                    {errorMessage && (
                        <ErrorMessage errors={[{ msg: errorMessage }]} />
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
