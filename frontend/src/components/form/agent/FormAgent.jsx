import "./formAgent.styles.css";
import { useAgentStore } from "../../../hooks/useAgentStore";
import { useState } from "react";
import ErrorMessage from "../../error-message/ErrorMessage";
import fileUpload from "../../../helpers/fileUpload";
import LoaderModal from "../../loader/LoaderModal";
import Button from "../../button/Button";

const FormAgent = ({ handleCloseForm }) => {
    const { startSavingAgent, activeAgent, errors } = useAgentStore();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(
        activeAgent || {
            dni: "",
            full_name: "",
            email: "",
            cellphone: "",
            image: "aa",
            _id: undefined
        }
    );

    const onFileInputChange = async evt => {
        if (evt.target.files === 0) return;
        setModalIsOpen(true);
        const imageUrl = await fileUpload(evt.target.files[0]);
        setFormValues({ ...formValues, image: imageUrl });
        setModalIsOpen(false);
    };

    const onInputChange = evt => {
        setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    };

    const onClickButtonSend = async () => {
        await startSavingAgent({ ...formValues });
        if (errors !== null) {
            handleCloseForm();
        }
    };

    return (
        <>
            <LoaderModal isOpen={modalIsOpen} message='Subiendo imagen...' />
            <form action='' className='agent-form'>
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
                    <span className='agent-form__label'>Celular:</span>
                    <input
                        type='text'
                        placeholder='Celular'
                        className='agent-form__input'
                        name='cellphone'
                        value={formValues.cellphone}
                        onChange={onInputChange}
                    />
                </div>
                <div className='agent-form__inputBox'>
                    <span className='agent-form__label'>Imagen:</span>
                    <input
                        type='file'
                        accept='image/png, image/jpeg, image/jpg'
                        className='agent-form__input'
                        onChange={onFileInputChange}
                        name='image'
                    />
                </div>
                <Button
                    buttonClassName='agent-form__btn-submit'
                    fontColor='#fff'
                    fontSize='16.5px'
                    action={onClickButtonSend}
                >
                    Guardar cambios
                </Button>
                {errors && <ErrorMessage errors={errors} />}
            </form>
        </>
    );
};

export default FormAgent;
