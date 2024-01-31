import "./formProperty.styles.css";
import { useEffect, useState } from "react";
import { Title } from "../styled-components/utilities";
import fileUpload from "../../helpers/fileUpload";
import { usePropertyStore } from "../../hooks/usePropertyStore";
import MapWithPlaces from "../map/MapWithPlaces";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAgentStore } from "../../hooks/useAgentStore";
import { getObjectByKey } from "../../helpers/getObjectByKey";
import ErrorMessage from "../error-message/ErrorMessage";
import { toast } from "react-toastify";
import LoaderModal from "../loader/LoaderModal";

const typesProperties = [
    { name: "Casa", value: "Casa" },
    { name: "Departamento", value: "Departamento" },
    { name: "Quinta", value: "Quinta" },
    { name: "Ph", value: "Ph" },
    { name: "No disponible", value: "No disponible" }
];

const FormProperty = () => {
    const [defaultTypeProperty, setDefaultTypeProperty] = useState(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { idProperty } = useParams();
    const navigate = useNavigate();
    const { agents, startLoadingAgents, startLoadingAgentById, activeAgent } =
        useAgentStore();
    const {
        startSavingProperty,
        startDeletingProperty,
        setActiveProperty,
        activeProperty,
        startLoadingPropertyById,
        hasPropertySelected,
        errors
    } = usePropertyStore();

    const [formValues, setFormValues] = useState({
        title: "",
        ubication: "",
        lat: null,
        lng: 0,
        agent: "",
        typeProperty: "",
        typeOperation: "",
        numRooms: "",
        numBathrooms: "",
        coveredArea: "",
        price: "",
        numFloors: "",
        numAmbientes: "",
        image: "",
        description: "",
        onSale: true
    });

    useEffect(() => {
        if (idProperty) {
            startLoadingPropertyById(idProperty);
        }
        return () => {
            setActiveProperty(null);
        };
    }, []);

    useEffect(() => {
        startLoadingAgents();
        if (hasPropertySelected) {
            startLoadingAgentById(activeProperty.agent);
            setFormValues(activeProperty);
            setDefaultTypeProperty(
                getObjectByKey(typesProperties, activeProperty.typeProperty)
            );
        }
    }, []);

    useEffect(() => {
        if (errors === null) {
            navigate("/admin");
        }
    }, [errors]);

    const setUbication = ({ text, coords }) => {
        setFormValues({
            ...formValues,
            ubication: text,
            lat: coords.lat,
            lng: coords.lng
        });
    };

    const onSetAgent = _id => {
        setFormValues({ ...formValues, agent: _id });
    };
    const onSetTypeProperty = typeProperty => {
        setFormValues({ ...formValues, typeProperty });
    };

    const onFileInputChange = async evt => {
        if (evt.target.files === 0) return;
        setModalIsOpen(true);
        const imageUrl = await fileUpload(evt.target.files[0]);
        setFormValues({ ...formValues, image: imageUrl });
        setModalIsOpen(false);
    };
    const onInputChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };

    const onSubmit = async () => {
        await startSavingProperty({ ...formValues });
    };

    const onClickButtonRemove = async () => {
        await startDeletingProperty(activeProperty._id);
        navigate("/admin");
    };
    const onClickButtonOnSale = () => {
        setFormValues({ ...formValues, onSale: !formValues.onSale });
    };

    return (
        <>
            <LoaderModal isOpen={modalIsOpen} message='Subiendo imagen...' />
            <form action='' className='form-property'>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                    }}
                >
                    <Button
                        fontColor='#fff'
                        style={{
                            backgroundColor: "var(--red)",
                            padding: "8px"
                        }}
                        action={() => onClickButtonRemove()}
                        buttonClassName={
                            hasPropertySelected || "button--disabled"
                        }
                    >
                        Eliminar propiedad
                    </Button>

                    <Button
                        fontColor='#fff'
                        style={{
                            backgroundColor: "var(--green)",
                            padding: "8px"
                        }}
                        action={() => onClickButtonOnSale()}
                        buttonClassName={
                            hasPropertySelected || "button--disabled"
                        }
                    >
                        {formValues.onSale
                            ? "Marcar como vendida"
                            : "Marcar en venta"}
                    </Button>
                </div>

                <div className='form-property__section'>
                    <Title textAlign='left' marginBottom='1rem'>
                        Ubicación
                    </Title>
                    <MapWithPlaces
                        setUbication={setUbication}
                        defaultPosition={
                            hasPropertySelected
                                ? {
                                      lat: activeProperty.lat,
                                      lng: activeProperty.lng,
                                      text: activeProperty.ubication
                                  }
                                : undefined
                        }
                    />
                </div>

                <div className='form-property__section'>
                    <Title textAlign='left' marginBottom='1rem'>
                        Detalle de la propiedad
                    </Title>

                    <div className='form-property__box'>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Titulo:
                            </span>
                            <input
                                className='form-property__input'
                                type='text'
                                onChange={onInputChange}
                                name='title'
                                value={formValues.title}
                                placeholder='Casa lujosa de dos pisos'
                            />
                        </div>
                    </div>

                    <div className='form-property__box'>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Agente a cargo:
                            </span>

                            <Dropdown
                                options={agents}
                                placeholder='Seleccione un agente'
                                onSelect={onSetAgent}
                                defaultSelect={
                                    hasPropertySelected
                                        ? activeAgent
                                        : undefined
                                }
                                indexName='full_name'
                                indexValue='_id'
                            />
                        </div>

                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Tipo de propiedad:
                            </span>
                            <Dropdown
                                options={typesProperties}
                                placeholder='Seleccione un tipo'
                                onSelect={onSetTypeProperty}
                                defaultSelect={defaultTypeProperty}
                            />
                        </div>
                    </div>
                    <div className='form-property__box'>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Cant. baños:
                            </span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='numBathrooms'
                                value={formValues.numBathrooms}
                                placeholder='0'
                            />
                        </div>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Cant. cuartos:
                            </span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='numRooms'
                                value={formValues.numRooms}
                                placeholder='0'
                            />
                        </div>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Área cubierta:
                            </span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='coveredArea'
                                value={formValues.coveredArea}
                                placeholder='0'
                            />
                        </div>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Precio:
                            </span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='price'
                                value={formValues.price}
                                placeholder='0'
                            />
                        </div>
                    </div>
                    <div className='form-property__box'>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>Pisos:</span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='numFloors'
                                value={formValues.numFloors}
                                placeholder='0'
                            />
                        </div>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Ambientes:
                            </span>
                            <input
                                type='number'
                                className='form-property__input'
                                onChange={onInputChange}
                                name='numAmbientes'
                                value={formValues.numAmbientes}
                                placeholder='0'
                            />
                        </div>
                        <div className='form-property__input--radio'>
                            <span className='form-property__label'>
                                Tipo de operación:
                            </span>
                            <label
                                htmlFor='en-alquiler'
                                style={{ marginRight: "10px" }}
                            >
                                <input
                                    type='radio'
                                    value='alquiler'
                                    name='typeOperation'
                                    onChange={onInputChange}
                                    checked={
                                        formValues.typeOperation === "alquiler"
                                    }
                                />
                                En alquiler
                            </label>
                            <label htmlFor='en-venta'>
                                <input
                                    type='radio'
                                    value='venta'
                                    name='typeOperation'
                                    onChange={onInputChange}
                                    checked={
                                        formValues.typeOperation === "venta"
                                    }
                                />
                                En venta
                            </label>
                        </div>
                    </div>
                    <div className='form-property__box'>
                        <div className='form-property__inputBox'>
                            <span className='form-property__label'>
                                Imagen:
                            </span>
                            <input
                                className='form-property__input'
                                type='file'
                                accept='image/png, image/jpeg, image/jpg'
                                onChange={onFileInputChange}
                                name='image'
                            />
                        </div>
                    </div>

                    <div className='form-property__inputbox'>
                        <span className='form-property__label'>
                            Descripción:
                        </span>
                        <textarea
                            className='form-property__textarea'
                            onChange={onInputChange}
                            value={formValues.description}
                            name='description'
                        ></textarea>
                    </div>

                    <Button
                        fontColor='#fff'
                        buttonClassName='form-property__btn-submit'
                        action={onSubmit}
                    >
                        Guardar cambios
                    </Button>
                </div>
                {errors && <ErrorMessage errors={[errors]} />}
            </form>
        </>
    );
};

export default FormProperty;
