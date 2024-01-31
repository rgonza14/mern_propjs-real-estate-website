import { useDispatch, useSelector } from "react-redux";
import client from "../api/client";
import {
    onAddNewAgent,
    onDeleteAgent,
    onLoadAgents,
    onSetActiveAgent,
    onSetErrors,
    onUpdateAgent
} from "../store/slices/agentSlice";
import { toast } from "react-toastify";

export const useAgentStore = () => {
    const dispatch = useDispatch();
    const { activeAgent, errors, agents } = useSelector(state => state.agents);

    const startLoadingAgents = async () => {
        try {
            const { data } = await client.get("/agents");
            dispatch(onLoadAgents(data.agents));
        } catch (error) {
            console.log(error);
        }
    };

    const startLoadingAgentById = async agentId => {
        try {
            const { data } = await client.get(`/agents/${agentId}`);
            dispatch(onSetActiveAgent(data.agent));
        } catch (error) {
            console.log(error);
        }
    };

    const startSavingAgent = async agent => {
        try {
            //actualizando
            if (agent._id) {
                await client.put(`/agents/${agent._id}`, agent);
                dispatch(onUpdateAgent({ ...agent }));
            } else {
                //creando
                const { data } = await client.post("/agents/", agent);
                dispatch(onAddNewAgent({ ...agent, _id: data.agent._id }));
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

    const startDeletingAgent = async _id => {
        try {
            await client.delete(`/agents/${_id}`);
            dispatch(onDeleteAgent({ _id }));
            toast.success("Agente eliminado con éxito", {
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

    const setActiveAgent = agent => {
        dispatch(onSetActiveAgent(agent));
    };

    const setError = error => {
        dispatch(onSetErrors(error));
    };

    return {
        agents,
        activeAgent,
        hasAgentSelected: !!activeAgent,
        errors,
        startSavingAgent,
        startDeletingAgent,
        startLoadingAgents,
        startLoadingAgentById,
        setActiveAgent,

        setError
    };
};

// hasAgentSelected: !!activeEvent -> si es null regresa falso, si hay algo, regresa true
