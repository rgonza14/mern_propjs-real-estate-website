import "./formContact.styles.css";
import { useState } from "react";
import client from "../../../api/client";
import { toast } from "react-toastify";
import ErrorMessage from "../../error-message/ErrorMessage";
import Button from "../../button/Button";
import LoaderModal from "../../loader/LoaderModal";

const initialState = {
    full_name: "",
    email: "",
    message: "",
    cellphone: ""
};

const FormContact = () => {
    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onInputChange = evt => {
        setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    };

    const onClickButtonSend = async evt => {
        try {
            setModalIsOpen(true);
            await client.post("/send", formValues);
            toast.success("Mensaje enviado correctamente", {
                autoClose: 2500,
                theme: "colored"
            });
            setFormValues(initialState);
            setErrors(undefined);

            return;
        } catch ({ response }) {
            setErrors(response.data.errors);
        } finally {
            setModalIsOpen(false);
        }
    };

    return (
        <>
            <LoaderModal
                isOpen={modalIsOpen}
                message='Enviando mensaje. Por favor, espere...'
            />
            <form action='' className='contact-form'>
                <input
                    type='text'
                    placeholder='Nombre y Apellido'
                    className='contact-form__input'
                    name='full_name'
                    value={formValues.full_name}
                    onChange={onInputChange}
                />
                <input
                    type='number'
                    inputMode='numeric'
                    placeholder='Número de celular'
                    className='contact-form__input'
                    name='cellphone'
                    value={formValues.cellphone}
                    onChange={onInputChange}
                />
                <input
                    type='email'
                    placeholder='uncorreo@correo.com'
                    className='contact-form__input'
                    name='email'
                    value={formValues.email}
                    onChange={onInputChange}
                />
                <textarea
                    placeholder='Mensaje'
                    className='contact-form__input contact-form__input--message'
                    name='message'
                    value={formValues.message}
                    onChange={onInputChange}
                ></textarea>
                <Button
                    buttonClassName='contact-form__btn-submit'
                    fontColor='#fff'
                    fontSize='16.5px'
                    action={onClickButtonSend}
                >
                    Enviar mensaje
                </Button>

                {errors && <ErrorMessage errors={errors} />}
            </form>
        </>
    );
};

export default FormContact;
