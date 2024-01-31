import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const client = axios.create({
    baseURL: VITE_API_URL
});

//TODO: Configurar interceptores

export default client;
