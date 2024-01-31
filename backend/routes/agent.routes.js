const { Router } = require("express");
const {
    addAgent,
    getAgents,
    removeAgent,
    updateAgent,
    getAgentById
} = require("./../controllers/agent.controller");
const { checkSchema } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const router = Router();

const validateAgent = () => {
    return [
        checkSchema({
            full_name: {
                errorMessage: "El nombre es obligatorio",
                notEmpty: true
            },
            email: { errorMessage: "Email no válido", isEmail: true },
            dni: { errorMessage: "Se requiere dni del agente", notEmpty: true },
            cellphone: {
                errorMessage: "El número de celular es obligatorio",
                notEmpty: true
            }
        }),
        validateFields
    ];
};

router.post("/", validateAgent(), addAgent);
router.get("/", getAgents);
router.get("/:id", getAgentById);
router.delete("/:id", removeAgent);
router.put("/:id", validateAgent(), updateAgent);

module.exports = router;
