import { useDispatch, useSelector } from "react-redux";
import {
    onAddNewProperty,
    onDeleteProperty,
    onLoadProperties,
    onSetActiveProperty,
    onSetErrors,
    onSetImageToActiveProperty,
    onSetLoading,
    onUpdateProperty
} from "../store/slices/propertySlice";
import client from "../api/client";
import fileUpload from "../helpers/fileUpload";
import { toast } from "react-toastify";
import { hasEmptyValues } from "../helpers/hasEmptyValues";

export const usePropertyStore = () => {
    const dispatch = useDispatch();
    const { properties, isLoading, activeProperty, errors } = useSelector(
        state => state.properties
    );

    const setActiveProperty = property => {
        dispatch(onSetActiveProperty(property));
    };

    const startSavingProperty = async property => {
        try {
            if (hasEmptyValues(property)) {
                //chequeo si hay campos vacios
                dispatch(onSetErrors("Todos los campos son obligatorios"));
                return;
            }
            if (property._id) {
                //Actualizando
                await client.put(`/properties/${property._id}`, property);
                dispatch(onUpdateProperty({ ...property }));
                toast.success("Se guardaron los cambios correctamente", {
                    autoClose: 2500,
                    theme: "colored"
                });
                return;
            }

            //Creando
            const { data } = await client.post("/properties/", property);

            dispatch(onAddNewProperty({ ...property }));
            toast.success(data.message, {
                autoClose: 2500,
                theme: "colored"
            });
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                autoClose: 2500,
                theme: "colored"
            });
        }
    };

    const startLoadingProperties = async (filters = {}) => {
        try {
            dispatch(onSetLoading(true));

            const { data } = await client.get("properties", {
                params: { typeProperties: filters?.typeProperties }
            });
            dispatch(onLoadProperties(data.properties));
        } catch (error) {
            console.log("Error al cargar las propiedades");
            console.log(error);
        }
    };

    const startLoadingNLastProperties = async (quantity = 0) => {
        try {
            dispatch(onSetLoading(true));
            const { data } = await client.get(
                `/properties/getLastN/${quantity}`
            );
            dispatch(onLoadProperties(data.properties));
        } catch (error) {
            console.log(error);
        }
    };

    const startLoadingPropertyById = async id => {
        try {
            const { data } = await client.get(`/properties/${id}`);
            dispatch(onSetActiveProperty(data.property));
        } catch (error) {
            console.log(error);
        }
    };

    const startDeletingProperty = async _id => {
        try {
            const { data } = await client.delete(`/properties/${_id}`);

            toast.success(data.message, {
                autoClose: 2500,
                theme: "colored"
            });
            dispatch(onDeleteProperty({ _id }));
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                autoClose: 2500,
                theme: "colored"
            });
        }
    };

    const startUploadingImage = async image => {
        const imageUrl = await fileUpload(image);
        dispatch(onSetImageToActiveProperty(imageUrl));
    };

    const setErrors = errors => {
        dispatch(onSetErrors(errors));
    };

    return {
        properties,
        isLoading,
        hasPropertySelected: !!activeProperty,
        startSavingProperty,
        startLoadingProperties,
        startLoadingNLastProperties,
        startLoadingPropertyById,
        setActiveProperty,
        startDeletingProperty,
        startUploadingImage,
        activeProperty,
        errors,
        setErrors
    };
};
