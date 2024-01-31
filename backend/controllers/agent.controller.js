const Agent = require("./../models/Agent");

const addAgent = async (request, response) => {
    const agent = new Agent(request.body);

    try {
        await agent.save();
        response.status(201).json({
            success: true,
            agent
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const updateAgent = async (request, response) => {
    const idAgent = request.params.id;

    try {
        const agent = await Agent.findById(idAgent);

        if (!agent) {
            return response.status(404).json({
                success: false,
                message: "No existe un agente con el id indicado"
            });
        }
        const updatedAgent = await Agent.findByIdAndUpdate(
            idAgent,
            { ...request.body },
            { new: true }
        );

        response.json({
            success: true,
            agent: updatedAgent
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const getAgents = async (_, response) => {
    const agents = await Agent.find();
    response.status(200).json({
        succcess: true,
        agents
    });
};

const getAgentById = async (request, response) => {
    try {
        const agent = await Agent.findById(request.params.id);
        if (!agent) {
            return response.status(400).json({
                success: false,
                message: "No existe un agente inmobiliario con ese id"
            });
        }
        response.status(200).json({
            success: true,
            agent
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const removeAgent = async (request, response) => {
    const idAgent = request.params.id;

    try {
        const agent = await Agent.findById(idAgent);

        if (!agent) {
            return response.status(404).json({
                success: false,
                message: "No existe el agente"
            });
        }

        await Agent.findByIdAndDelete(idAgent);

        response.json({ success: true, message: "Agente eliminado" });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

module.exports = {
    addAgent,
    getAgents,
    getAgentById,
    removeAgent,
    updateAgent
};
