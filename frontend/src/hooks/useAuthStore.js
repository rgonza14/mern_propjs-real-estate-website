import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store/slices/authSlice";
import client from "../api/client";

export const useAuthStore = () => {
    const { status, errorMessage, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ user, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await client.post("/auth/login", {
                user,
                password
            });

            dispatch(
                onLogin({
                    full_name: data.full_name,
                    user: data.user,
                    _id: data._id
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(onLogout("Usuario o contraseña incorrectos"));
        }
    };
    const startLogout = () => {
        dispatch(onLogout());
    };

    return {
        status,
        user,
        errorMessage,
        startLogin,
        startLogout
    };
};
