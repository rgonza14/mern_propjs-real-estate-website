const { Router } = require("express");
const {
    addAdmin,
    getAdmins,
    removeAdmin,
    updateAdmin,
    getAdminById
} = require("./../controllers/admin.controller");
const { checkSchema } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const router = Router();

const validateAdmin = () => {
    return [
        checkSchema({
            full_name: {
                errorMessage: "El nombre es obligatorio",
                notEmpty: true
            },
            email: { errorMessage: "Email no válido", isEmail: true },
            dni: {
                errorMessage: "Se requiere dni del administrador",
                notEmpty: true
            },
            user: {
                errorMessage: "El usuario es obligatorio",
                notEmpty: true
            },
            password: {
                errorMessage: "La contraseña debe tener 8 o mas caracteres",
                isLength: {
                    min: 8,
                    max: undefined
                }
            }
        }),
        validateFields
    ];
};

router.post("/", validateAdmin(), addAdmin);
router.get("/", getAdmins);
router.get("/:id", getAdminById);
router.delete("/:id", removeAdmin);
router.put("/:id", validateAdmin(), updateAdmin);

module.exports = router;
