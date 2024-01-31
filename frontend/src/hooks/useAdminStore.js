import client from "../api/client";
import { useDispatch, useSelector } from "react-redux";
import {
    onAddNewAdmin,
    onDeleteAdmin,
    onLoadAdmins,
    onSetActiveAdmin,
    onSetErrors,
    onUpdateAdmin
} from "../store/slices/adminSlice";
import { toast } from "react-toastify";

export const useAdminStore = () => {
    const dispatch = useDispatch();
    const { activeAdmin, errors, admins } = useSelector(state => state.admins);

    const startLoadingAdmins = async () => {
        try {
            const { data } = await client.get("/admins");
            dispatch(onLoadAdmins(data.admins));
        } catch (error) {
            console.log(error);
        }
    };

    const startSavingAdmin = async admin => {
        console.log("ADMIN", admin);
        try {
            //actualizando

            if (admin._id) {
                await client.put(`/admins/${admin._id}`, admin);
                dispatch(onUpdateAdmin({ ...admin }));
            } else {
                //creando
                const { data } = await client.post("/auth/register", admin);
                dispatch(onAddNewAdmin({ ...admin, _id: data.admin._id }));
            }
            toast.success("Se guardaron los cambios correctamente", {
                autoClose: 2500,
                theme: "colored"
            });
        } catch (error) {
            console.log(error);
            dispatch(onSetErrors(error.response.data.errors));
        }
    };

    const startDeletingAdmin = async _id => {
        try {
            const { data } = await client.delete(`/admins/${_id}`);
            dispatch(onDeleteAdmin({ _id }));
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

    const setActiveAdmin = admin => {
        dispatch(onSetActiveAdmin(admin));
    };
    const setErrors = error => {
        dispatch(onSetErrors(error));
    };

    return {
        startLoadingAdmins,
        startSavingAdmin,
        setActiveAdmin,
        startDeletingAdmin,
        setErrors,
        admins,
        activeAdmin,
        errors
    };
};
